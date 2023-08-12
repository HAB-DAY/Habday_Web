import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import Image from 'next/image';
import { AirpodImg } from '../../assets';
import CommonModal from '../../components/common/modal/CommonModal';
import { useParticipantList } from '../../hooks/participate/useParticipantList';
import { useCancelParticipateMutation } from '../../hooks/participate/useCancelParticipate';
import { ParticipateListOutput } from '../../types/responses/fund';

export default function List() {
  const { data, isError, isLoading } = useParticipantList();
  const [clickedFunding, setClickedFunding] = useState<ParticipateListOutput>();
  const [isCancelModal, setIsCancelModal] = useState<boolean>(false);
  const [isCompleteModal, setIsCompleteModal] = useState<boolean>(false);
  const cancelParticipate = useCancelParticipateMutation();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <Layout link="내 선물도 펀딩하고 싶다면?">
      <Styled.Title>참여 중인 펀딩을 확인해보세요</Styled.Title>
      <Styled.Subtitle>펀딩을 터치해 참여를 취소할 수 있어요</Styled.Subtitle>
      {data ? (
        data.slice(0, 5).map((item) => (
          <Styled.ItemContainer
            key={item.merchantId}
            onClick={() => {
              setClickedFunding(item);
              setIsCancelModal(true);
            }}
          >
            <Styled.ImageContainer>
              <Image src={item.fundingItemImg ?? AirpodImg} width={80} height={80} alt="펀딩상품 이미지" priority />
            </Styled.ImageContainer>
            <Styled.TextContainer textdecoration={item.payment_status === 'cancel'}>
              <Styled.ItemName>{item.fundingName}</Styled.ItemName>
              <Styled.ItemPrice>내가 펀딩한 금액: {item.fundingAmount}원</Styled.ItemPrice>
              <Styled.ItemDeadline>{item.fundingDate}</Styled.ItemDeadline>
            </Styled.TextContainer>
          </Styled.ItemContainer>
        ))
      ) : (
        <div>참여 중인 펀딩이 없어요</div>
      )}
      <button>더보기</button>
      {isCancelModal && (
        <CommonModal
          message={`'${clickedFunding?.fundingName}' 펀딩을\n취소하시겠습니까?`}
          buttons={[
            {
              text: '예',
              onClickButton: () => {
                setIsCancelModal(false);
                cancelParticipate.mutate(
                  {
                    fundingMemberId: clickedFunding?.fundingMemberId ?? 0,
                    reason: '사용자 요청 결제 취소',
                  },
                  { onSuccess: () => setIsCompleteModal(true) }
                );
              },
            },
            {
              text: '아니오',
              onClickButton: () => setIsCancelModal(false),
            },
          ]}
        />
      )}
      {isCompleteModal && (
        <CommonModal
          message={`취소가 완료되었습니다.`}
          buttons={[{ text: '확인', onClickButton: () => setIsCompleteModal(false) }]}
        />
      )}
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
    align-items: center;

    width: 30.8rem;
    margin-bottom: 2rem;
    padding-bottom: 1.2rem;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
      transition: 0.3s ease;
    }
    &:last-child {
      border-bottom: 0;
    }
  `,
  ImageContainer: styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
    margin-right: 2rem;
  `,
  TextContainer: styled.div<{ textdecoration: boolean }>`
    display: flex;
    flex-direction: column;

    text-decoration: ${({ textdecoration }) => textdecoration && 'line-through'};
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
