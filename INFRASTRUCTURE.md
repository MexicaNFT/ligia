# Project Report — ligiaurroz.com
**Date:** April 23, 2026

---

## 1. Changes Made This Session

### Codebase

| File | Change |
|---|---|
| `next.config.ts` | Added `output: "export"` (static HTML export) + `images.unoptimized: true` (required for static hosting — Next.js image optimization needs a server) |
| `package.json` | Added `"deploy"` script (kept for local use, not used in CI) |
| `firebase.json` | Created — Firebase Hosting config, public dir set to `out/` |
| `.firebaserc` | Created — links repo to Firebase project `ligiaurroz` |
| `.gitignore` | Added `.firebase/` (local deploy cache) |
| `.github/workflows/firebase-deploy.yml` | Created — GitHub Actions CI/CD pipeline |
| `src/app/components/NovelaSection.tsx` | Added `amazonUrl` field + "Comprar en Amazon" button in detail modal |
| `src/app/components/CuentoSection.tsx` | Added `amazonUrl` field + each tale row is now a link to Amazon |
| `src/app/components/CronicaSection.tsx` | Added `amazonUrl` to featured crónica, card is now a link to Amazon |

### Amazon Links Mapped

| Title | URL |
|---|---|
| La Muralla | https://a.co/d/0dq1vB7R |
| Somoza | https://a.co/d/08ijn6og |
| Por mi gran culpa | https://a.co/d/0bodVezo |
| Narciso Negro *(Mujeres de miedo que cuentan)* | https://a.co/d/0hKjDcg1 |
| Viajes Oníricos *(Once mujeres que cuentan erotismo)* | https://a.co/d/03D8OP3H |
| Diario de un Aislamiento *(Mujeres que cuentan secretos)* | https://a.co/d/06zGzOQI |
| Por qué quise ser invisible *(Abusado)* | https://a.co/d/09gBkoaL |
| Lo que el 20 se llevó | https://a.co/d/0deTgKv0 |

---

## 2. Infrastructure — Current State

### Domain & DNS

| Component | Provider | Details |
|---|---|---|
| Domain registrar | Squarespace | `ligiaurroz.com` — nameservers updated to Google Cloud DNS |
| DNS zone | Google Cloud DNS | Zone `ligiaurroz-com` in project `ligiaurroz` |
| DNS records | Google Cloud DNS | A → `199.36.158.100` (Firebase), CNAME `www` → `ligiaurroz.web.app`, 2× Firebase verification CNAMEs |

### Hosting

| Component | Provider | Details |
|---|---|---|
| Static hosting | Firebase Hosting | Project `ligiaurroz`, site `ligiaurroz.web.app` |
| Custom domains | Firebase Hosting | `ligiaurroz.com` + `www.ligiaurroz.com` |
| SSL certificate | Firebase (auto) | Let's Encrypt, auto-renewed |
| CDN | Firebase / Google CDN | Global edge caching included |

### CI/CD

| Component | Details |
|---|---|
| Pipeline | GitHub Actions — triggers on every push to `main` |
| Auth | Keyless Workload Identity Federation (no stored secrets) |
| WIF Pool | `github-pool` — scoped to `MexicaNFT/ligia` only |
| WIF Provider | `github-provider` — OIDC, `https://token.actions.githubusercontent.com` |
| Service account | `firebase-github-deploy@ligiaurroz.iam.gserviceaccount.com` |
| SA roles | `roles/firebasehosting.admin` + `roles/iam.workloadIdentityUser` |
| Build | Node 20, `npm ci` → `next build` → `out/` (57 static files, 6 routes) |

### Decommissioned (AWS)

- Route 53 hosted zone for `ligiaurroz.com` — deleted (no CloudFront or S3 was in use)

---

## 3. Maintenance

### Day-to-day (automated)

- **Deployments**: push to `main` → auto-deploys via GitHub Actions. No manual steps.
- **SSL renewal**: Firebase renews Let's Encrypt certificates automatically.
- **CDN cache**: Firebase manages cache invalidation on each deploy.

### Periodic tasks

| Task | Frequency | How |
|---|---|---|
| Review GitHub Actions run logs | After each merge | GitHub → Actions tab |
| Check Firebase Hosting usage | Monthly | Firebase Console → Hosting |
| Dependabot alerts | As they appear | GitHub Security tab |
| DNS record changes (if needed) | On demand | `gcloud dns record-sets` or GCP Console |

### Adding email in the future (`@ligiaurroz.com`)

Add MX + SPF records to the Google Cloud DNS zone — no AWS involvement required:

```bash
gcloud dns record-sets create ligiaurroz.com. \
  --zone=ligiaurroz-com --type=MX --ttl=3600 \
  --rrdatas="1 aspmx.l.google.com.,5 alt1.aspmx.l.google.com.,5 alt2.aspmx.l.google.com.,10 alt3.aspmx.l.google.com.,10 alt4.aspmx.l.google.com."

gcloud dns record-sets create ligiaurroz.com. \
  --zone=ligiaurroz-com --type=TXT --ttl=3600 \
  --rrdatas='"v=spf1 include:_spf.google.com ~all"'
```

---

## 4. Billing

### Google Cloud / Firebase

| Service | Free tier | Expected cost |
|---|---|---|
| Firebase Hosting | 10 GB storage, 360 MB/day transfer | **$0/month** (static site well within limits) |
| Google Cloud DNS | First 25 zones: $0.20/zone/month + $0.40/million queries | ~**$0.25/month** |
| IAM / WIF | Free | $0 |
| **GCP total** | | ~**$0.25/month** |

### GitHub

| Service | Cost |
|---|---|
| GitHub Actions (public repo) | Free (unlimited minutes) |
| GitHub Actions (private repo) | 2,000 min/month free, then $0.008/min |

### Squarespace (domain registrar)

| Service | Cost |
|---|---|
| Domain `ligiaurroz.com` renewal | ~**$20/year** |

### AWS

| Service | Cost |
|---|---|
| Route 53 hosted zone | **$0** (deleted) |

### Summary

| Provider | Monthly | Annual |
|---|---|---|
| Google Cloud | ~$0.25 | ~$3 |
| GitHub | $0 | $0 |
| Squarespace (domain) | ~$1.67 | ~$20 |
| AWS | $0 | $0 |
| **Total** | **~$2/month** | **~$23/year** |
