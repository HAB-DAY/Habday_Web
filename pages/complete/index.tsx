import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import Image from 'next/image';
import { AirpodImg } from '../../assets';
import Progress from '../../components/common/Progress';
import priceFormatter from '../../util/priceFormatter';
import { useRecoilValue } from 'recoil';
import { fundingIdState } from '../../states/atom';
import { useFundDetail } from '../../hooks/fund/useFundDetail';
import { useRouter } from 'next/router';

export default function Complete() {
  const router = useRouter();
  const itemId = useRecoilValue(fundingIdState);
  const { detail, isError, isLoading } = useFundDetail(itemId);

  return (
    <Layout buttons={['참여내역 보러가기', '내 펀딩 만들러가기']} onClickButton={() => router.push('/list')}>
      <Styled.Titles>
        <Styled.Title>펀딩참여 완료!</Styled.Title>
        <Styled.BoldTitle>{detail?.fundingName}</Styled.BoldTitle>
        <Styled.Title>
          {detail?.totalPrice === detail?.goalPrice
            ? `${detail?.hostName}님께 전달될 예정이에요`
            : '까지 얼마남지 않았어요'}
        </Styled.Title>
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

const Styled = {
  Titles: styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 9rem;
    text-align: center;
  `,
  Title: styled.h1`
    text-align: center;
    font-size: 2.1rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
  BoldTitle: styled.h1`
    text-align: center;
    font-size: 2.1rem;
    font-weight: 600;
    letter-spacing: -0.03rem;
    margin: 0.6rem 0;
  `,
  Images: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4.6rem;
  `,
  ImageContainer: styled.div`
    width: 22.2rem;
    height: 22.2rem;
    border-radius: 1rem;
  `,
  ProgressContainer: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    min-width: 28.1rem;
    text-align: center;
  `,
  ProgressTitle: styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
  ProgressAmount: styled.h3`
    margin-top: 0.9rem;
    margin-bottom: 3rem;
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
};
