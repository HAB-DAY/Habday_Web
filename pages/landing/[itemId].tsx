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
        <Greeting message="펀딩 인증이 도착했어요!" isPing onClickIcon={() => router.push('/review')} />
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
