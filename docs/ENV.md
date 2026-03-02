# Environment variables

## Strapi (events API)

| Variable | Development | Production |
|----------|-------------|------------|
| `NEXT_PUBLIC_STRAPI_URL` | `.env.development`: `http://localhost:1337` | `.env.production`: `https://loving-comfort-5b814b6e84.strapiapp.com` |
| `STRAPI_INSECURE_TLS` | Set to `1` only if you get "self-signed certificate" (e.g. `npm run dev:prod`). **Never set in production.** | Do not set |

## Production setup

### Option A: Use committed `.env.production`

The repo includes `.env.production` with the production Strapi URL. When you run:

```bash
npm run build
npm run start
```

Next.js loads `.env.production`, so the app uses the production Strapi API. No extra setup needed.

### Option B: Set in your hosting dashboard (recommended for deploy)

If you deploy to **Vercel**, **Netlify**, or similar, set environment variables in the dashboard so they override or replace file-based env.

| Host | Where to set |
|------|----------------|
| **Vercel** | Project → Settings → Environment Variables. Add `NEXT_PUBLIC_STRAPI_URL` = `https://loving-comfort-5b814b6e84.strapiapp.com` for **Production**. |
| **Netlify** | Site → Site settings → Environment variables. Add `NEXT_PUBLIC_STRAPI_URL` for Production. |
| **Other** | Set `NEXT_PUBLIC_STRAPI_URL` in the production environment so it’s available at build time. |

- Use **Production** (or equivalent) scope so it only applies to production builds.
### Fetch fails in production (e.g. "self-signed certificate" or "fetch failed")?

1. **Check the URL is set**  
   In your host (Vercel, Netlify, etc.), ensure **Production** has:
   - `NEXT_PUBLIC_STRAPI_URL` = `https://loving-comfort-5b814b6e84.strapiapp.com`

2. **Same TLS error as locally**  
   If the host’s Node runtime rejects the Strapi certificate (e.g. `self-signed certificate in certificate chain`), add in **Production**:
   - `STRAPI_INSECURE_TLS` = `1`  
   This skips TLS verification for Strapi only. Use only if needed; it weakens security for that request.

3. **Other**  
   Check the deploy logs for the exact error (timeout, 403, etc.).
