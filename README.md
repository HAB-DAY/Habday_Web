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

<br/>

# 📝 코드 소개

- 커스텀훅을 컨트롤러 역할로 둔 MVC 패턴
- 커스텀훅을 사용하면 UI와 비즈니스 로직을 분리할 수 있습니다.

> React 커스텀훅(Custom Hook) 이란?
> React 함수 컴포넌트에서 상태 관리, 라이프사이클 기능 등을 추상화하여 재사용 가능한 로직을 구현하고 공유할 수 있게 해주는 훅

## 펀딩 상세보기

- `/landing/아이템id`로 진입하게 되면, Landing 컴포넌트를 렌더링합니다.
- `getServersizeProps` 메소드로 params를 받아와, 서버에 해당 id의 펀딩상세정보를 요청합니다.

```tsx
import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout';
import { useFundDetail } from '../../hooks/fund/useFundDetail';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { fundingIdState } from '../../states/atom';
import Greeting from '../../components/common/Greeting';

export interface ParamProps {
  params: ItemProps;
}

export interface ItemProps {
  itemId: string;
}

const STATUS = {
  PROGRESS: 'PROGRESS',
  FAILED: 'FAILED',
  SUCCESS: 'SUCCESS',
};

export default function Landing({ itemId }: ItemProps) {
  const router = useRouter();
  const { detail, isLoading, isError } = useFundDetail(parseInt(itemId));
  const setFundingId = useSetRecoilState(fundingIdState);

  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&state=${process.env.NEXT_PUBLIC_LOGIN_STATE}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}`;
  const onClickLogin = () => window.location.assign(NAVER_AUTH_URL);

  useEffect(() => {
    setFundingId(parseInt(itemId));
  }, [detail]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError || detail?.status === STATUS.FAILED) {
    return <div>error! 존재하지 않는 펀딩입니다</div>;
  }

  if (detail?.isConfirmation) {
    return (
      <Layout>
        <Greeting message="펀딩 인증이 도착했어요!" isPing onClickIcon={onClickLogin} />
      </Layout>
    );
  }

  if (detail?.status === STATUS.SUCCESS) {
    return (
      <Layout link="참여이력 보러가기">
        <Greeting message="펀딩에 성공했어요, 감사합니다!" />
      </Layout>
    );
  }

  return (
    <Layout isNaver buttons={['네이버로 시작하기']} link="HABDAY가 처음이세요?" onClickButton={onClickLogin}>
      <Greeting message={`${detail?.hostName}님의 펀딩에 참여해보세요!`} />
    </Layout>
  );
}

export async function getServerSideProps({ params }: ParamProps) {
  const itemId = params.itemId;
  return { props: { itemId } };
}
```

- 자주 사용하는 를 `common/Layout`으로 선언해, 공통 컴포넌트화 하였습니다.

```tsx
interface LayoutProps {
  children: React.ReactNode;
  buttons?: string[];
  link?: string;
  onClickButton?: () => void;
  onClickLeftButton?: () => void;
  isNaver?: boolean;
}

export default function Layout(props: LayoutProps) {
  const { children, buttons, link, onClickButton, onClickLeftButton, isNaver } = props;
  return (
    <Styled.Root>
      <Styled.Main>{children}</Styled.Main>
      <Styled.Footer isButtons={buttons?.length === 2}>
        {buttons && buttons?.length == 2 && (
          <Styled.ButtonLeft onClick={onClickLeftButton}>{buttons[1]}</Styled.ButtonLeft>
        )}
        {buttons && buttons?.length >= 1 && (
          <Styled.Button isNaver={isNaver} onClick={onClickButton}>
            {isNaver && <Image alt="네이버 로고" src={NaverImg} height={42} width={42} />}
            {buttons[0]}
          </Styled.Button>
        )}
        {link && <Styled.Link>{link}</Styled.Link>}
      </Styled.Footer>
    </Styled.Root>
  );
}
```

- 커스텀훅 `useFundDetail`을 선언해 UI와 비즈니스 로직을 분리하였습니다.
- `useFundDetail`은 `fetchFundDetail` 함수를 호출합니다. axios 라이브러리를 사용해 더욱 효율적인 REST API 통신을 구현합니다.

```ts
// useFundDetail.ts
import { useQuery } from 'react-query';
import { fetchFundDetail } from '../../api/fund';
import { useSetRecoilState } from 'recoil';
import { QUERY_KEY } from '..';

export const useFundDetail = (itemId: number) => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.fundDetail], () => fetchFundDetail(itemId));

  return { detail: data, isLoading, isError };
};

// fund.ts
import { client } from '.';
import { Response } from '../types';
import { DetailOutput } from '../types/responses/fund';

export const fetchFundDetail = async (itemId: number) => {
  const {
    data: { data },
  } = await client.get<Response<DetailOutput>>(`/funding/showFundingContent?itemId=${itemId}`);
  return data;
};
```

## 로그인

- 펀딩 상세보기 `Detail` 뷰에서는 `getServersideProps`로 query param의 인가코드를 가져옵니다.
- 인가코드를 사용해 `useAccessToken`을 호출하면, 자체 액세스 토큰을 발급해 recoil atom에 저장합니다.

```tsx
interface codeProps {
  code: string;
}

export default function Detail({ code }: codeProps) {
  const router = useRouter();
  const itemId = useRecoilValue(fundingIdState);
  const { detail } = useFundDetail(itemId);
  const { accessToken, isLoading } = useAccessToken(code);
  // const signupStat = useRecoilValue(signupLogState);
  const { isRegister } = useIsRegister();

  useEffect(() => {
    if (code === undefined || isRegister === undefined) return;
    if (!isRegister) router.push('/signup');
    else if (detail?.isConfirmation) router.push('/review');
  }, [code, detail, accessToken, isRegister]);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <Layout buttons={['펀딩에 참여할래요']} onClickButton={() => router.push('/fund')}>
      <Styled.Titles>
        <Styled.Title>{detail?.hostName}님은</Styled.Title>
        <Styled.BoldTitle>{detail?.fundingName}</Styled.BoldTitle>
        <Styled.Title>를(을) 갖고싶어해요</Styled.Title>
      </Styled.Titles>
      <Styled.Images>
        <Styled.ImageContainer>
          <Image
            src={detail?.fundingItemImg ?? AirpodImg}
            alt="펀딩아이템 이미지"
            width={222}
            height={222}
            placeholder="blur"
            blurDataURL="asstes/default.svg"
            priority
          />
        </Styled.ImageContainer>
      </Styled.Images>
      <Styled.ProgressContainer>
        <Styled.ProgressTitle>현재까지 모인 금액</Styled.ProgressTitle>
        <Styled.ProgressAmount>￦ {priceFormatter(detail?.totalPrice ?? 0)}</Styled.ProgressAmount>
        <Progress totalPrice={detail?.totalPrice ?? 0} goalPrice={detail?.goalPrice ?? 0} />
      </Styled.ProgressContainer>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return { props: { code: context.query.code ?? '' } };
}
```

- `AxiosInterceptor`에서 발급된 accessToken을 header에 넣습니다.

```tsx
export const BASE_URL = process.env.NEXT_PUBLIC_END;

const client = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

function AxiosInterceptor({ children }: PropsWithChildren) {
  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenState);

  const requestIntercept = client.interceptors.request.use((config) => {
    if (config.headers && !config.headers['accessToken']) {
      config.headers['accessToken'] = accessToken ? `${accessToken}` : '';

      return config;
    }

    return config;
  });

  const responseIntercept = client.interceptors.response.use(
    (config) => config,
    async (error) => {
      const config = error.config;
      console.log(error);
      if (error.response.status === 401) {
        alert('로그인 후 이용해 주세요');
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      client.interceptors.request.eject(requestIntercept);
      client.interceptors.response.eject(responseIntercept);
    };
  }, [requestIntercept]);

  return <>{children}</>;
}

export { client, AxiosInterceptor };
```

## 펀딩 참여하기

- `/fund` 진입시 펀딩에 참여할 수 있는 `Fund` 컴포넌트를 호출합니다.
- 다양한 input들의 비즈니스 로직을 처리하기 위해 `useParticipantForm` 커스텀훅을 사용하였습니다.
- `usePaymentList`는 기존에 등록해둔 결제수단 정보를 가져옵니다.

```tsx
export default function Fund() {
  const router = useRouter();

  const itemId = useRecoilValue(fundingIdState);
  const { detail } = useFundDetail(itemId);

  const { participant, setParticipantForm, submitPariticipant, toggleAgree } = useParticipantForm(async () => {
    router.push('/complete');
  });
  const { isError, isLoading, paymentList } = usePaymentList();

  useEffect(() => {
    paymentList.length && setParticipantForm({ paymentId: paymentList[0].paymentId });
  }, [paymentList]);

  return (
    <Layout buttons={['다음']} onClickButton={submitPariticipant}>
      <Styled.Title>{detail?.hostName} 님에게</Styled.Title>
      <Styled.Form>
        <Styled.Label>보내는 분 성함</Styled.Label>
        <Styled.Input
          value={participant.name}
          id="buyer"
          type="text"
          onChange={(e) => setParticipantForm({ name: e.target.value })}
        />
      </Styled.Form>
      <Styled.Form>
        <Styled.Label>펀딩 금액</Styled.Label>
        <Progress
          goalPrice={detail?.goalPrice ?? 0}
          totalPrice={detail?.totalPrice ?? 0}
          isPing
          amount={participant.amount}
        />
        <Styled.Input
          id="amount"
          type="number"
          max={`${detail?.goalPrice ?? 0 - (detail?.totalPrice ?? 0)}`}
          placeholder={`최대 ${priceFormatter(detail?.goalPrice ?? 0 - (detail?.totalPrice ?? 0))}원까지 가능해요`}
          onChange={(e) => setParticipantForm({ amount: parseInt(e.target.value) })}
        />
      </Styled.Form>
      <Styled.Form>
        <Styled.Label>응원 메시지</Styled.Label>
        <Styled.Textarea
          value={participant.message}
          onChange={(e) => setParticipantForm({ message: e.target.value })}
        />
        <Styled.Maxline>{participant.message.length || 0}/60</Styled.Maxline>
      </Styled.Form>
      <Styled.Form>
        <Styled.Label>
          카드 결제
          <Styled.AddCardButton onClick={() => router.push('/card')}>카드 추가</Styled.AddCardButton>
        </Styled.Label>
        {paymentList.length ? (
          <Styled.Select defaultValue={0}>
            {paymentList.map(({ paymentId, paymentName }, index) => (
              <option key={paymentId} onClick={() => setParticipantForm({ paymentId: paymentId })}>
                {paymentName}
              </option>
            ))}
          </Styled.Select>
        ) : (
          <Styled.Message>결제수단을 추가해주세요</Styled.Message>
        )}
        <Styled.Check>
          선물하실 금액은 목적금액 미달성시 다른 상품구매에
          <br />
          사용될 수 있습니다. 동의하시겠습니까?
          <input type="checkbox" onClick={toggleAgree} />
        </Styled.Check>
      </Styled.Form>
    </Layout>
  );
}
```

- 사용자 입력을 처리하는 `useParticipantForm`은 recoil atom을 사용하여 사용자의 입력값이 유지되도록 합니다.
- `submitPariticipant` 함수에서 에러핸들링을 수행하고 있습니다.
- react query 라이브러리를 사용하여, 데이터 패칭 성공시에 기존에 있던 `fundDetail` 데이터를 캐싱하고 성공 후에 해야할 일을 수행함으로써 데이터 정합성을 보장하고 서버 상태관리를 수행합니다.

```ts
export const useParticipateMutation = (onSuccessMutation: () => void) => {
  const participant = useRecoilValue(participantState);
  const queryClient = useQueryClient();

  return useMutation(() => postParticipate(participant), {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.fundDetail]);
      onSuccessMutation();
    },
    onError({ response }: ParticipateErrorResponse) {
      alert(response.data.msg);
    },
  });
};

export const useParticipantForm = (onSuccessMutation: () => void) => {
  const [participant, setParticipant] = useRecoilState(participantSelector);
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const participantMutation = useParticipateMutation(onSuccessMutation);

  const setParticipantForm = (input: Partial<ParticipateInput>) => {
    setParticipant({ ...participant, ...input });
  };

  const submitPariticipant = () => {
    if (participant.paymentId === -99) alert('결제수단을 선택해주세요');
    else if (participant.amount < 101) alert('최소 금액은 101원입니다');
    else if (!participant.name.length) alert('성함을 입력해주세요');
    else if (!isAgree) alert('약관에 동의해주세요');
    else participantMutation.mutate();
  };

  const toggleAgree = () => setIsAgree((prev) => !prev);

  return { participant, setParticipantForm, submitPariticipant, toggleAgree };
};

```
