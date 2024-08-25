Project Summary
# Getting Started 

## Frontend 
### Tech Stack
- react 
- vite
```
cd frontend
yarn
yarn run dev
```

## Backend
### Tech Stack
- nestjs 
- solidity 
- hardhat

Prerequisites
- Deploy smart contract
- [install zkpass_transgate chrome extension](https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma?utm_source=ext_sidebar&hl)
- [wallet setup metamask](https://metamask.io/download/) 
- zkpass schema
  - enroll: https://dev.zkpass.org
  - what is schema: https://zkpass.gitbook.io/zkpass/developer-guides/extension-js-sdk/schema
```
cd voting-server
npx hardhat compile

npm i 
npm run build
npm run start
```

# 1. 팀 및 프로젝트 소개(슬라이드 1-2개)

Our team is Strawberry pie! 
We present QUAD-VOTE, a safe-voting system with zero-knowledge & block-chain protocol. 

# 2. 팀원들과 그들의 역할, 배경을 간략하게 소개하세요.

JungMin Jum (Web Frontend Developer)

: Built Frontend Server and Designed UI by herself.

Sunny Heo (Web Backend Developer)

: Designed the ERD relationship structure of the backend server.

Hailey Park (Web Backend Developer)

: Designed and developed the structure of a Solidity-based blockchain smart contract voting system and the backend server logic.

Yeong-Hak Seo (Web Backend Developer)

: implemented the verification logic which integrate with zkPass, and created a demo video.

# 3. 프로젝트 요약

Global data flow is rapidly increasing, 
driven not only by everyday internet use but also by the demands of big data analysis. 

However, as privacy concerns continue to grow, 
existing protocols fall short in adequately protecting sensitive personal information. 

Meanwhile, businesses are in urgent need of “meaningful” and “safe-to-use” data sets 
for critical decision-making and big data analysis. 

To address these challenges, we offer a secure and verified querying process 
by leveraging zero-knowledge protocols and blockchain technology.

# 4. 귀하의 프로젝트가 귀하가 선택한 과제 선언문을 어떻게 해결하는지 강조하십시오. 
- 여기서도 특정 테마/과제 설명을 선택하는 이유를 공유할 수 있습니다(예: 팀의 기술, 관심 또는 가치와 일치).
- 5가지 심사 기준이 심사위원 평가의 기초가 된다는 점을 염두에 두고 솔루션에 대한 포괄적인 개요를 제공하세요.
데모(1분)

# 5. 실제 프레젠테이션 중에 직면할 수 있는 잠재적인 기술적 문제를 피하기 위해 데모를 사전 녹음하는 것이 좋습니다!
여기에서 솔루션의 기술적 강점, 유용성 및 성능을 보여주세요.
미래 로드맵(1-2슬라이드)

6.개선을 통해 얻은 주요 교훈과 여지가 있나요?
프로젝트를 계속 개발하려는 경우 프로젝트의 다음 단계를 간략하게 설명하세요.

# Project Structure
```
├── README.md
├── frontend
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   ├── benchpress.webp
│   │   ├── climbing.webp
│   │   ├── dashboard.png
│   │   ├── golf.webp
│   │   ├── logo.png
│   │   └── mockServiceWorker.js
│   ├── src
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── apis
│   │   │   └── user.ts
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── layout
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.module.scss
│   │   │   └── ui
│   │   │       ├── Accordion
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── DatePicker
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── DoubleButton
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── IconButton
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── ImageBox
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── ImageDashboard
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── ImageInput
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── Item
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── LabelInput
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── ProgressBar
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── Select
│   │   │       │   ├── Select.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── SelectGroup
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── TextArea
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       ├── TextBox
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.module.scss
│   │   │       └── index.ts
│   │   ├── constants
│   │   │   └── index.ts
│   │   ├── main.tsx
│   │   ├── mocks
│   │   │   ├── browser.ts
│   │   │   ├── data
│   │   │   │   └── index.ts
│   │   │   └── handlers.ts
│   │   ├── pages
│   │   │   ├── group
│   │   │   │   ├── create
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.scss
│   │   │   │   └── list
│   │   │   │       ├── index.tsx
│   │   │   │       └── style.scss
│   │   │   ├── home
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.module.scss
│   │   │   ├── signup
│   │   │   │   ├── complete
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.scss
│   │   │   │   ├── signinInfo
│   │   │   │   │   └── index.tsx
│   │   │   │   └── userInfo
│   │   │   │       ├── index.tsx
│   │   │   │       └── style.scss
│   │   │   └── voting
│   │   │       ├── complete
│   │   │       │   └── index.tsx
│   │   │       ├── create
│   │   │       │   ├── choice
│   │   │       │   │   ├── Detail.tsx
│   │   │       │   │   ├── Main.tsx
│   │   │       │   │   ├── index.tsx
│   │   │       │   │   └── style.scss
│   │   │       │   ├── complete
│   │   │       │   │   └── index.tsx
│   │   │       │   ├── details
│   │   │       │   │   ├── constants.ts
│   │   │       │   │   ├── helper.ts
│   │   │       │   │   ├── index.tsx
│   │   │       │   │   ├── solanaInstruction.ts
│   │   │       │   │   ├── style.scss
│   │   │       │   │   └── types.ts
│   │   │       │   ├── type
│   │   │       │   │   ├── index.tsx
│   │   │       │   │   └── style.scss
│   │   │       │   └── voter
│   │   │       │       ├── Detail.tsx
│   │   │       │       ├── Main.tsx
│   │   │       │       ├── index.tsx
│   │   │       │       └── style.scss
│   │   │       └── vote
│   │   │           ├── Detail.tsx
│   │   │           ├── Main.tsx
│   │   │           ├── img
│   │   │           ├── index.tsx
│   │   │           └── style.scss
│   │   ├── stores
│   │   │   ├── group.ts
│   │   │   ├── signup.ts
│   │   │   ├── user.ts
│   │   │   └── vote.ts
│   │   ├── styles
│   │   │   ├── _reset.scss
│   │   │   ├── _variables.scss
│   │   │   └── index.scss
│   │   ├── types
│   │   │   └── index.ts
│   │   ├── utils
│   │   │   ├── format.ts
│   │   │   └── validate.ts
│   │   └── vite-env.d.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   └── yarn.lock
└── voting-server
    ├── LICENSE
    ├── artifacts
    │   ├── build-info
    │   │   └── 6a003a8359d46907588ac0dc51f95e62.json
    │   └── contracts
    │       ├── quadraticVoting.sol
    │       │   ├── QuadraticVotingContract.dbg.json
    │       │   └── QuadraticVotingContract.json
    │       └── singleVoting.sol
    │           ├── VotingContract.dbg.json
    │           └── VotingContract.json
    ├── cache
    │   └── solidity-files-cache.json
    ├── contracts
    │   ├── quadraticVoting.sol
    │   └── singleVoting.sol
    ├── docker-compose.yml
    ├── hardhat.config.ts
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── scripts
    │   └── deploy.ts
    ├── test
    │   └── app.e2e-spec.ts
    ├── tsconfig.build.json
    ├── tsconfig.json
    ├── typechain
    │   ├── common.ts
    │   ├── factories
    │   │   ├── index.ts
    │   │   ├── quadraticVoting.sol
    │   │   │   ├── QuadraticVotingContract__factory.ts
    │   │   │   └── index.ts
    │   │   └── singleVoting.sol
    │   │       ├── VotingContract__factory.ts
    │   │       └── index.ts
    │   ├── hardhat.d.ts
    │   ├── index.ts
    │   ├── quadraticVoting.sol
    │   │   ├── QuadraticVotingContract.ts
    │   │   └── index.ts
    │   └── singleVoting.sol
    │       ├── VotingContract.ts
    │       └── index.ts
    └── voting-backend
        ├── src
        │   ├── app.controller.spec.ts
        │   ├── app.controller.ts
        │   ├── app.module.ts
        │   ├── app.service.ts
        │   ├── config
        │   │   └── configuration.ts
        │   ├── dto
        │   │   ├── index.ts
        │   │   └── register-voter.dto.ts
        │   ├── entities
        │   │   ├── maskable.ts
        │   │   ├── users.entity.ts
        │   │   ├── vote.entity.ts
        │   │   └── voters.entity.ts
        │   ├── http-service.interceptor.ts
        │   ├── lib
        │   │   ├── constant.ts
        │   │   └── decorators
        │   │       ├── index.ts
        │   │       ├── master-only.decorator.ts
        │   │       └── public.decorator.ts
        │   ├── main.ts
        │   ├── voting
        │   │   ├── voting.controller.ts
        │   │   ├── voting.module.ts
        │   │   └── voting.service.ts
        │   └── zkpass
        │       ├── constants.ts
        │       ├── helper.ts
        │       ├── solanaInstruction.ts
        │       └── zkpass.service.ts
        └── test
            ├── app.e2e-spec.ts
            └── jest-e2e.json



```