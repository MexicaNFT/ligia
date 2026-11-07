# Project Report — ligiaurroz.com
**Date:** April 23, 2026 (infrastructure updated November 7, 2026: moved to Firebase project `ligia-urroz`)

---

## 1. Changes Made This Session

### Codebase

| File | Change |
|---|---|
| `next.config.ts` | Added `output: "export"` (static HTML export) + `images.unoptimized: true` (required for static hosting — Next.js image optimization needs a server) |
| `package.json` | Added `"deploy"` script (kept for local use, not used in CI) |
| `firebase.json` | Created — Firebase Hosting config, public dir set to `out/` |
| `.firebaserc` | Created — links repo to Firebase project `ligia-urroz` (originally `ligiaurroz`) |
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
| Domain registrar | Squarespace | `ligiaurroz.com` |
| DNS | Squarespace | Squarespace's own nameservers (Google Cloud DNS is no longer used) |
| DNS records | Squarespace | Firebase Hosting records for `@` and `www` (as shown in Firebase Console → Hosting → Custom domains), Google Workspace mail (MX, SPF, DKIM), Google verification CNAMEs |

### Hosting

| Component | Provider | Details |
|---|---|---|
| Static hosting | Firebase Hosting | Project `ligia-urroz` (number `127833374564`, owned by `afolch@mexicanft.com.mx`), site `ligia-urroz.web.app` |
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
| Service account | `firebase-github-deploy@ligia-urroz.iam.gserviceaccount.com` |
| Setup script | `scripts/setup-new-firebase-project.sh` (re-runnable; skips what exists) |
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
| DNS record changes (if needed) | On demand | Squarespace → Domains → ligiaurroz.com → DNS |

### Email (`@ligiaurroz.com`)

Google Workspace mail is already configured: MX, SPF (`v=spf1 include:_spf.google.com ~all`) and DKIM (`google._domainkey`) records live in Squarespace DNS. Keep them when changing website records.

---

## 4. Billing

### Google Cloud / Firebase

| Service | Free tier | Expected cost |
|---|---|---|
| Firebase Hosting | 10 GB storage, 360 MB/day transfer | **$0/month** (static site well within limits) |
| IAM / WIF | Free | $0 |
| **GCP total** | | **$0/month** (no billing account needed) |

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
| Google Cloud | $0 | $0 |
| GitHub | $0 | $0 |
| Squarespace (domain) | ~$1.67 | ~$20 |
| AWS | $0 | $0 |
| **Total** | **~$1.67/month** | **~$20/year** |
