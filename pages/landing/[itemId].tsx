import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import { useFundDetail } from '../../hooks/useFundDetail';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fundingIdState, fundingState } from '../../states/atom';
import { STATUS } from '../../util/const';

interface ParamProps {
  params: ItemProps;
}

interface ItemProps {
  itemId: string;
}

export default function Lading({ itemId }: ItemProps) {
  const router = useRouter();
  const { data, isLoading, isError } = useFundDetail(parseInt(itemId));
  const { hostName, status } = useRecoilValue(fundingState);
  const setFundingId = useSetRecoilState(fundingIdState);

  useEffect(() => {
    setFundingId(parseInt(itemId));
    if (status === 'PROGRESS') {
      //router.push('/detail');
    }
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError || status === STATUS.FAILED) {
    return <div>error! 존재하지 않는 펀딩입니다</div>;
  }

  return (
    <Layout buttons={['네이버로 시작하기']} link="HABDAY가 처음이세요?" onClickButton={() => router.push('/signup')}>
      <Styled.Emoji>🎁</Styled.Emoji>
      <Styled.Message>{hostName}님의 펀딩에 참여해보세요!</Styled.Message>
    </Layout>
  );
}

export async function getServerSideProps({ params }: ParamProps) {
  const itemId = params.itemId;
  return { props: { itemId } };
}

const Styled = {
  Emoji: styled.h1`
    margin-top: 31.3rem;
    text-align: center;
    text-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    font-size: 12rem;
    font-weight: 500;
  `,
  Message: styled.h2`
    margin-top: 3.4rem;
    text-align: center;
    font-size: 2.1rem;
    font-weight: 500;
  `,
};
