# rogi-docs rules

- This repository is public. Never add credentials, real chat records, user data, private infrastructure values, or unreviewed operational logs.
- Check current Docusaurus and Cloudflare Workers documentation through Context7 before changing project setup or deployment configuration.
- Build Docusaurus as static assets for Cloudflare Workers. Keep `docs.rogi.chat` as the canonical URL.
- Label planned API behavior clearly until it is implemented and verified in production. API contracts must match the `rogi-collector` source revision.
- Validate the exact staged files, build, and remote deployment before reporting completion.
