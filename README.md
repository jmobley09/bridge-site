# Bridge Homeschool Community Site

Static Next.js site for Bridge Homeschool Community.

## Requirements

- Node.js `>=22.13.0`
- Use `npm ci` in deployment and CI.

## Commands

```bash
npm run dev
npm run lint
npm run build:azure
npm audit
```

## Deployment

The GitHub Actions workflow exports the site with `npm run build:azure` and
deploys the generated `out/` directory to Azure Static Web Apps.

Security headers are defined in `public/staticwebapp.config.json`; the static
export copies that file into `out/staticwebapp.config.json` for Azure.

## Security Notes

- Keep dependencies current with `npm outdated` and `npm audit`.
- Do not commit `.env*` files or private keys.
- Public files under `public/` are served directly; only place intentionally
  public assets there.
