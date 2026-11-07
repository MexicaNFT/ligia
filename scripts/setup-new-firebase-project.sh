#!/usr/bin/env bash
# Creates a brand-new Google Cloud / Firebase project for ligiaurroz.com:
# Firebase Hosting site and keyless GitHub Actions deploys (Workload Identity
# Federation). Run it in Google Cloud Shell (https://shell.cloud.google.com)
# signed in as afolch@mexicanft.com.mx.
#
# Usage:
#   PROJECT_ID=ligia-urroz bash scripts/setup-new-firebase-project.sh
#
# It also works on a project that was already created in the Firebase
# console: steps that already exist are skipped. No billing account is
# needed: DNS for the domain stays at Squarespace by default.
#
# Optional: CREATE_DNS_ZONE=1 to also create a Cloud DNS zone for the domain
# (needs billing; pass BILLING_ACCOUNT=<id> if the project has none).
#
# The new project lives in a different Google account from the old
# `ligiaurroz` project. The script refuses to run unless gcloud is signed in
# as EXPECTED_ACCOUNT, so it can't touch (or create projects in) the old
# account by mistake.
#
# Optional: ORG_ID=<numeric org id> to create the project inside the
# mexicanft.com.mx organization.
set -euo pipefail

: "${PROJECT_ID:?Set PROJECT_ID (e.g. ligia-urroz)}"
EXPECTED_ACCOUNT="${EXPECTED_ACCOUNT:-afolch@mexicanft.com.mx}"

ACTIVE_ACCOUNT="$(gcloud config get-value account 2>/dev/null)"
if [ "$ACTIVE_ACCOUNT" != "$EXPECTED_ACCOUNT" ]; then
  echo "ERROR: gcloud is signed in as '${ACTIVE_ACCOUNT}', expected ${EXPECTED_ACCOUNT}." >&2
  echo "Open Cloud Shell from a browser profile signed in as ${EXPECTED_ACCOUNT}," >&2
  echo "or run: gcloud auth login ${EXPECTED_ACCOUNT}" >&2
  exit 1
fi
if [ "$PROJECT_ID" = "ligiaurroz" ]; then
  echo "ERROR: ligiaurroz is the OLD project (other account). Use PROJECT_ID=ligia-urroz." >&2
  exit 1
fi
echo "==> Signed in as ${ACTIVE_ACCOUNT}"
BILLING_ACCOUNT="${BILLING_ACCOUNT:-}"
CREATE_DNS_ZONE="${CREATE_DNS_ZONE:-0}"
GITHUB_REPO="${GITHUB_REPO:-MexicaNFT/ligia}"
DOMAIN="${DOMAIN:-ligiaurroz.com}"
DNS_ZONE="${DNS_ZONE:-ligiaurroz-com}"
SA_NAME="firebase-github-deploy"
POOL="github-pool"
PROVIDER="github-provider"

echo "==> 1/6 Creating project ${PROJECT_ID}"
if ! gcloud projects describe "$PROJECT_ID" >/dev/null 2>&1; then
  gcloud projects create "$PROJECT_ID" --name="Ligia Urroz" \
    ${ORG_ID:+--organization="$ORG_ID"}
fi
gcloud config set project "$PROJECT_ID"
if [ -n "$BILLING_ACCOUNT" ]; then
  gcloud billing projects link "$PROJECT_ID" --billing-account="$BILLING_ACCOUNT"
elif [ "$CREATE_DNS_ZONE" = "1" ] && \
     [ "$(gcloud billing projects describe "$PROJECT_ID" --format='value(billingEnabled)')" != "True" ]; then
  echo "ERROR: ${PROJECT_ID} has no billing account (Cloud DNS needs one)." >&2
  echo "Re-run with BILLING_ACCOUNT=<id> (see: gcloud billing accounts list)." >&2
  exit 1
fi
PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"

echo "==> 2/6 Enabling APIs"
gcloud services enable \
  firebase.googleapis.com firebasehosting.googleapis.com \
  iam.googleapis.com iamcredentials.googleapis.com sts.googleapis.com \
  cloudresourcemanager.googleapis.com
if [ "$CREATE_DNS_ZONE" = "1" ]; then
  gcloud services enable dns.googleapis.com
fi

echo "==> 3/6 Adding Firebase and creating the Hosting site"
npx --yes firebase-tools projects:addfirebase "$PROJECT_ID" || \
  echo "   (Firebase already enabled on this project, continuing)"
npx --yes firebase-tools hosting:sites:create "$PROJECT_ID" --project "$PROJECT_ID" || \
  echo "   (Hosting site ${PROJECT_ID} already exists, continuing)"

if [ "$CREATE_DNS_ZONE" = "1" ]; then
  echo "==> 4/6 Creating Cloud DNS zone ${DNS_ZONE} for ${DOMAIN}"
  if ! gcloud dns managed-zones describe "$DNS_ZONE" >/dev/null 2>&1; then
    gcloud dns managed-zones create "$DNS_ZONE" \
      --dns-name="${DOMAIN}." --description="${DOMAIN} (Firebase Hosting)"
  fi
  NAMESERVERS="$(gcloud dns managed-zones describe "$DNS_ZONE" --format='value(nameServers)' | tr ';' '\n')"
else
  echo "==> 4/6 Skipping Cloud DNS (DNS for ${DOMAIN} stays at Squarespace)"
  NAMESERVERS="(none: keep Squarespace's own nameservers)"
fi

echo "==> 5/6 Deploy service account"
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
if ! gcloud iam service-accounts describe "$SA_EMAIL" >/dev/null 2>&1; then
  gcloud iam service-accounts create "$SA_NAME" --display-name="GitHub Actions Firebase deploy"
fi
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SA_EMAIL}" --role="roles/firebasehosting.admin" \
  --condition=None >/dev/null

echo "==> 6/6 Workload Identity Federation for ${GITHUB_REPO}"
if ! gcloud iam workload-identity-pools describe "$POOL" --location=global >/dev/null 2>&1; then
  gcloud iam workload-identity-pools create "$POOL" --location=global \
    --display-name="GitHub Actions"
fi
if ! gcloud iam workload-identity-pools providers describe "$PROVIDER" \
    --location=global --workload-identity-pool="$POOL" >/dev/null 2>&1; then
  gcloud iam workload-identity-pools providers create-oidc "$PROVIDER" \
    --location=global --workload-identity-pool="$POOL" \
    --display-name="GitHub OIDC" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
    --attribute-condition="assertion.repository=='${GITHUB_REPO}'"
fi
gcloud iam service-accounts add-iam-policy-binding "$SA_EMAIL" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL}/attribute.repository/${GITHUB_REPO}" \
  >/dev/null

cat <<SUMMARY

================ DONE — send these values back ================
PROJECT_ID:      ${PROJECT_ID}
PROJECT_NUMBER:  ${PROJECT_NUMBER}
WIF provider:    projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL}/providers/${PROVIDER}
Service account: ${SA_EMAIL}
Hosting URL:     https://${PROJECT_ID}.web.app

Nameservers for ${DOMAIN}:
${NAMESERVERS}
================================================================
SUMMARY
