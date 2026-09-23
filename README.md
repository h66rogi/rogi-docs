# Rogi API 문서

`docs.rogi.chat`의 Docusaurus 소스입니다. 현재 API 설계 단계의 문서는 **계획됨**으로 표시합니다.
실제 제공 중인 기능으로 설명을 바꾸기 전에 [rogi-collector](https://github.com/h66rogi/rogi-collector)의
구현과 운영 배포를 확인하세요.

## 개발

Node.js 22 이상을 사용합니다.

```sh
npm ci
npm run typecheck
npm run build
```

## 배포

Cloudflare Workers Static Assets가 `build/`를 제공합니다. Wrangler의 custom domain은
`docs.rogi.chat`입니다. 배포 전 [Cloudflare Docusaurus 가이드](https://developers.cloudflare.com/workers/framework-guides/web-apps/more-web-frameworks/docusaurus/)와
[Workers custom domain](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)을 확인합니다.

```sh
npm run build
npx wrangler deploy
```
