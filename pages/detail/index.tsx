import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import Image from 'next/image';
import { AirpodImg } from '../../assets';
import Progress from '../../components/common/Progress';
import priceFormatter from '../../util/priceFormatter';

type FundObjectType = {
  name: string;
  goalPrice: number;
  totalPrice: number;
};

export default function Detail() {
  const [funderName, setFunderName] = useState<string>('000');
  const [fund, setFund] = useState<FundObjectType>({
    name: 'Apple 에어팟 맥스',
    goalPrice: 700000,
    totalPrice: 320000,
  });
  const [itemImage, setItemImage] = useState<string>(AirpodImg);
  return (
    <Layout buttons={['펀딩에 참여할래요']}>
      <Styled.Titles>
        <Styled.Title>{funderName}님은</Styled.Title>
        <Styled.BoldTitle>{fund.name}</Styled.BoldTitle>
        <Styled.Title>를(을) 갖고싶어해요</Styled.Title>
      </Styled.Titles>
      <Styled.Images>
        <Styled.ImageContainer>
          <Image
            src={itemImage}
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
        <Styled.ProgressAmount>￦ {priceFormatter(fund.totalPrice)}</Styled.ProgressAmount>
        <Progress totalPrice={fund.totalPrice} goalPrice={fund.goalPrice} />
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
