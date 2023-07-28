import React from 'react';
import Layout from '../../components/common/Layout';
import styled from 'styled-components';
import Greeting from '../../components/common/Greeting';
import { useFundDetail } from '../../hooks/fund/useFundDetail';
import { ItemProps, ParamProps } from '../landing/[itemId]';
import { useRouter } from 'next/router';

export default function ReviewIntro({ itemId }: ItemProps) {
  const router = useRouter();
  const { isLoading, isError } = useFundDetail(parseInt(itemId));

  if (isLoading) {
    <Layout>
      <Greeting message="로딩중.." />
    </Layout>;
  }
  if (isError) {
    <Layout>
      <Greeting message="존재하지 않는 펀딩이에요" />
    </Layout>;
  }
  return (
    <Layout>
      <Greeting message="펀딩 인증이 도착했어요!" isPing onClickIcon={() => router.push('/reviewcontent')} />
    </Layout>
  );
}

export async function getServerSideProps({ params }: ParamProps) {
  const itemId = params.itemId;
  return { props: { itemId } };
}
