# > QuadVote
 Our team is Strawberry pie! 
 We present QUAD-VOTE, a safe-voting system with zero-knowledge & block-chain protocol. 
 
> Global data flow is rapidly increasing, 
> driven not only by everyday internet use but also by the demands of big data analysis. 
> However, as privacy concerns continue to grow, 
> existing protocols fall short in adequately protecting sensitive personal information. 
> Meanwhile, businesses are in urgent need of “meaningful” and “safe-to-use” data sets 
> for critical decision-making and big data analysis. 
> To address these challenges, we offer a secure and verified querying process 
> by leveraging zero-knowledge protocols and blockchain technology.


## 개발기간 
2024/08/24~2024/08/25


## 팀원
 
**_FE_** : [JungMin Jum(금정민)](https://github.com/KumJungMin)

**_BE_** : [Hailey Park(박정현)](https://github.com/haileyjpark) [Yeong-Hak Seo(서영학)](https://github.com/inspire12) [Sunny Heo(허선영)](https://github.com/Sunny-Heo-myth)

**_SMART-CONTRACT_** : [Hailey Park, 박정현](https://github.com/haileyjpark)


### Demo Link
[![QuadVote Demo](https://github.com/user-attachments/assets/cae03111-21d4-4f8d-9134-6ab56eed1282")](https://youtu.be/mYKVLyD_T8w)



## ERD Modeling
![](https://github.com/user-attachments/assets/733be1ab-9a95-42c3-9bd2-83a049173870)


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
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

npm i 
npm run build
npm run start
```

## Project Structure
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