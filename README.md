# 후로기 Developers

[docs.rogi.chat](https://docs.rogi.chat)의 Docusaurus 소스입니다. [Data API](docs/intro.mdx), [로기마블 사용법](docs/marble/overview.mdx), [rogi-collector 기술 설명](docs/collector/overview.mdx)을 한곳에 모읍니다. HTTP 계약은 [OpenAPI 3.1 명세](static/openapi.yaml)에, WebSocket 이벤트는 [실시간 채팅 문서](docs/chat-stream.mdx)에 있습니다. 공개 API 구현은 [rogi-collector](https://github.com/h66rogi/rogi-collector)의 Go `query/publicapi` 패키지를 따릅니다.

## 로컬 검증

Node.js 22.22 이상과 npm 10 이상이 필요합니다.

```sh
npm ci
npm run check
```

`check`는 TypeScript, OpenAPI 참조·규칙, Docusaurus 링크와 정적 빌드를 검증합니다. 개발 서버는 `npm start`로 실행할 수 있습니다.

## 배포

정적 빌드는 Cloudflare Workers Static Assets에서 `docs.rogi.chat`으로 제공됩니다. 인증된 Wrangler 환경에서 다음을 실행합니다.

```sh
npm run check
npx wrangler deploy
```

배포 후 [문서 홈](https://docs.rogi.chat/)과 [OpenAPI 파일](https://docs.rogi.chat/openapi.yaml)을 확인합니다. API 계약을 바꿀 때는 `rogi-collector`의 응답·오류 코드와 명세·예시를 함께 갱신하세요. 실제 채팅, 운영 비밀, 내부 주소는 이 공개 저장소에 넣지 않습니다.
