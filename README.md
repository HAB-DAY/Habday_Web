# 🎁 서비스 소개

카카오톡으로 기프티콘 선물 받기, 너무 진부한 생일이지 않나요? HABDAY를 이용해 친구들에게 선물 펀딩을 받아보세요!

<p align = "center">
<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/514070c4-c7c6-472a-9dcc-24dd3eca0474" width="200" height="200"/> 
</p>

HABDAY는 친구들과 함께하는 선물 펀딩 플랫폼입니다.<br/>
자신이 원하는 선물을 친구들에게 펀딩을 받고, 그동안 갖고 싶었던 고가의 선물을 구매할 수 있습니다.<br/>
뿐만 아니라, 친구들의 도움으로 꿈을 실현할 수도 있는 혁신적인 플랫폼입니다. 

<br/>

# 🛠 사용기술 및 라이브러리

`Next.js`
- React 기반의 웹 개발 프레임워크
- 검색엔진 최적화(SEO)와 서버사이드 렌더링(SSR)의 장점을 가지고 있음
- Routing의 편의성이 서비스 특징과 잘 맞물리기 때문에 사용

`Typescript`

- Javascript에 타입이 추가된 정적 타입 언어
- complie 단계에서 에러를 발견해낼 수 있어 효율적인 개발 가능

`React-query`

- 서버 상태관리를 위한 라이브러리

`Recoil`

- 전역 클라이언트 상태관리를 위한 라이브러리

`Styled-components`

- 동적 스타일링을 용이하게 해주는 스타일링 라이브러리

`Axios`

- HTTP 요청을 용이하게 해주는 Promise 기반 라이브러리

<br/>

# 📌 기능 및 뷰 설명

<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/9f4ee31c-adb4-41d0-a87c-34c0bcb08062" width="200" /> 

<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/3f0fd95a-6901-439b-80d5-df52de4d0f4e" width="200" /> 


## 로그인 뷰

- 참여자가 생성자가 공유한 링크로 진입하게 되면, 로그인 화면을 보여준다.
- `네이버로 시작하기` 버튼을 클릭하면, 네이버로그인 링크로 접속한다.
- 참여자가 네이버 아이디와 비밀번호를 입력하여 로그인에 성공하면 인가코드를 발급받는다.
- 발급받은 인가코드를 서버에 전달해, 액세스 토큰을 발급한다.
- 발급받은 액세스 토큰은 앞으로의 서버 요청 시 headers에 넣어 사용자 식별에 사용된다.
- 만약 최초로 로그인한 사용자이면, 추가 정보를 입력하여 가입을 완료한다.

<br/>

<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/b9234ae3-01e5-4f75-a9e7-01280060acc7" width="200" /> 

## 펀딩 상세보기 뷰

- 로그인에 성공하면 펀딩 상세보기 뷰로 진입하며, 생성자 이름, 펀딩 이름, 펀딩 사진, 모인 금액이 표시된다.
- `펀딩에 참여할래요` 버튼을 클릭하면 펀딩 참여를 위한 정보 입력 뷰로 이동한다.

<br/>

<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/cfc43d6f-6b5f-4cca-b47b-80ba34f2de2a" width="200" /> 

## 펀딩 참여 뷰

- 펀딩 참여자의 이름, 펀딩할 금액, 응원 메시지 등을 입력해 펀딩에 참여할 수 있다.
- 입력한 정보는 추후 펀딩 생성자에게 전달된다.
- 결제수단은 이전에 입력했던 카드가 있으면 선택해서 결제할 수 있다.
- 선물된 금액이 펀딩 생성자의 선택에 따라 다른 상품 구매에 쓰일 수 있으므로, 해당 사항에 동의해야 최종 결제가 가능하다.

<br/>
<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/dcc655ef-a626-4702-ad4a-b3613659da46" width="200" /> 

## 카드 추가 뷰

- 만일 아직 결제수단을 입력하지 않았거나 새로운 결제 수단을 입력하고 싶다면 카드정보를 입력할 수 있다.
- 카드 정보를 올바르게 입력하지 않을 경우, 알림창이 뜨며 올바른 값을 입력하도록 유도한다.

<br/>
<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/b7b74ba7-de4c-4a04-b108-2e7d0205a8af" width="200" /> 

## 펀딩참여 완료 뷰

- 최종적으로 참여가 완료되었음을 알리는 화면이다.
- `참여내역 보러가기`를 클릭해 참여한 펀딩 리스트를 조회할 수 있다.

<br/>
<img width="200" alt="Untitled (33)" src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/a4a4816e-80a7-4dc9-a866-96484aac5c05">

## 펀딩참여 목록 뷰

- 참여했던 펀딩 내역을 확인할 수 있는 뷰이다.
- 펀딩을 클릭해 참여했던 펀딩을 취소할 수 있으며, 취소 된 이후에는 cancel  상태로 변경된다.

<br/>
<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/9a0013bf-412c-4792-9d0d-2c79dcbbf24a" width="200" /> 
<img src="https://github.com/HAB-DAY/Habday_Web/assets/65955748/09e9fec5-6f03-4a69-8e11-9e359e3bb549" width="200" /> 

## 펀딩 인증 뷰

- 펀딩 생성자가 펀딩이 성공한 후 2주 이내로 앱을 통해 인증을 하면, 기존의 펀딩 url로 진입했을 때 펀딩 뷰가 아닌 인증 뷰가 뜬다.
- 인증 상세보기 뷰에서 실제로 선물을 구입했는지 여부와 감사 메시지를 확인할 수 있다.

<br/>

# 🗂 폴더 구조

```
📦 
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ api
├─ assets
├─ components
│  └─ common
│     ├─ Greeting.tsx
│     ├─ Layout.tsx
│     ├─ Progress.tsx
│     └─ modal
├─ hooks
├─ pages
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ card
│  ├─ complet
│  ├─ detai
│  ├─ fun
│  ├─ index.ts
│  ├─ landing
│  │  └─ [itemId].tsx  // Dynamic routing: 최초 진입 페이지
│  ├─ list
│  ├─ revie
│  └─ signu
├─ public
├─ states  // for atoms
├─ styles  // for global styling
├─ types   // for common types
├─ util    // for constants
└─ yarn.lock
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)