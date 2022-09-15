# NUMBLE - `Node.js with express` 기반으로 비대면 진료 앱 클론 서버 만들기

## 프로젝트 소개

- 기간 : `22.09.02 ~ 22.09.15`
- Node.js with express 기반으로 비대면 진료 앱 CHEKIT 클론 서버 만들기
- node.js + express.js를 통해 실제 운영 가능한 nest.js 같은 서버 프레임워크 만들기
- <a href="https://endurable-existence-f23.notion.site/NUMBLE-Node-js-with-express-c23a036f641c4f05a6aa102d0cd51474">회고 링크</a>

<br />

## 사용 스택

- express
- bcrypt
- jsonwebtoken
- Mongodb + mongoose
- nodemon
- typescript

<br />

## File Tree

```jsx
.
├── common
│   ├── httpMessage
│   │   ├── httpException.ts
│   │   └── httpSuccess.ts
│   ├── middleware
│   │   ├── auth.ts
│   │   └── index.ts
│   └── util
│       ├── jwt.ts
│       └── reg.ts
├── config
│   └── winston.ts
├── modules
│   ├── auth
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   ├── doctor
│   │   ├── doctor.controller.ts
│   │   ├── doctor.module.ts
│   │   ├── doctor.schema.ts
│   │   └── doctor.service.ts
│   ├── std
│   │   ├── std.controller.ts
│   │   ├── std.module.ts
│   │   ├── std.schema.ts
│   │   └── std.service.ts
│   ├── test
│   │   ├── test.controller.ts
│   │   ├── test.module.ts
│   │   └── test.service.ts
│   └── user
│       ├── user.controller.ts
│       ├── user.module.ts
│       ├── user.schema.ts
│       └── user.service.ts
└── server.ts
```
