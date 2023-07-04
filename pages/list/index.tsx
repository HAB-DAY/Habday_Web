import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import Image from 'next/image';
import { AirpodImg } from '../../assets';
import CommonModal from '../../components/common/modal/CommonModal';

export default function List() {
  return (
    <Layout link="내 선물도 펀딩하고 싶다면?">
      <Styled.Title>참여 중인 펀딩을 확인해보세요</Styled.Title>
      <Styled.Subtitle>펀딩을 터치해 참여를 취소할 수 있어요</Styled.Subtitle>
      <Styled.ItemContainer>
        <Styled.ImageContainer>
          <Image src={AirpodImg} width={70} height={70} alt="펀딩상품 이미지" priority />
        </Styled.ImageContainer>
        <Styled.TextContainer>
          <Styled.ItemName>펀딩 이름</Styled.ItemName>
          <Styled.ItemPrice>펀딩 금액</Styled.ItemPrice>
          <Styled.ItemDeadline>2023.02.03 ~ 2023.03.03</Styled.ItemDeadline>
        </Styled.TextContainer>
      </Styled.ItemContainer>
      <Styled.ItemContainer>
        <Styled.ImageContainer>
          <Image src={AirpodImg} width={70} height={70} alt="펀딩상품 이미지" priority />
        </Styled.ImageContainer>
        <Styled.TextContainer>
          <Styled.ItemName>펀딩 이름</Styled.ItemName>
          <Styled.ItemPrice>펀딩 금액</Styled.ItemPrice>
          <Styled.ItemDeadline>2023.02.03 ~ 2023.03.03</Styled.ItemDeadline>
        </Styled.TextContainer>
      </Styled.ItemContainer>
      <Styled.ItemContainer>
        <Styled.ImageContainer>
          <Image src={AirpodImg} width={70} height={70} alt="펀딩상품 이미지" priority />
        </Styled.ImageContainer>
        <Styled.TextContainer>
          <Styled.ItemName>펀딩 이름</Styled.ItemName>
          <Styled.ItemPrice>펀딩 금액</Styled.ItemPrice>
          <Styled.ItemDeadline>2023.02.03 ~ 2023.03.03</Styled.ItemDeadline>
        </Styled.TextContainer>
      </Styled.ItemContainer>
      <CommonModal message={`'은형의 Airpod MAx' 펀딩을\n취소하시겠습니까?`} buttons={['예', '아니오']} />
    </Layout>
  );
}

const Styled = {
  Title: styled.h1`
    min-width: 30.8rem;
    margin-top: 6.1rem;
    font-size: 2.1rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
    text-align: left;
  `,
  Subtitle: styled.h1`
    min-width: 30.8rem;
    margin-top: 0.7rem;
    margin-bottom: 4.7rem;
    color: #979797;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: -0.14rem;
    text-align: left;
  `,
  ItemContainer: styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 30.8rem;
    margin-bottom: 2.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
      transition: 0.3s ease;
    }
  `,
  ImageContainer: styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 1rem;
    margin-right: 2rem;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    height: 6.2rem;
  `,
  ItemName: styled.h2`
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;
  `,
  ItemPrice: styled.h3`
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;
  `,
  ItemDeadline: styled.p`
    color: #acacac;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;
  `,
};
