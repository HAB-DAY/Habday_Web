import React, { useState } from 'react';
import Layout from '../../../components/common/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { clickedFundingState } from '../../../states/atom';
import { AirpodImg } from '../../../assets';
import priceFormatter from '../../../util/priceFormatter';
import CommonModal from '../../../components/common/modal/CommonModal';
import { useCancelParticipateMutation } from '../../../hooks/participate/useCancelParticipate';
import { useFundDetail } from '../../../hooks/fund/useFundDetail';
import { useRouter } from 'next/router';

export default function Merchant() {
  const router = useRouter();
  const { fundingName, fundingItemImg, fundingAmount, fundingMemberId, fundingDate, fundingStatus } =
    useRecoilValue(clickedFundingState);

  const cancelParticipate = useCancelParticipateMutation();

  const [isCancelModal, setIsCancelModal] = useState<boolean>(false);
  const [isCompleteModal, setIsCompleteModal] = useState<boolean>(false);

  return (
    <Layout buttons={['참여 취소하기']} onClickButton={() => setIsCancelModal(true)}>
      <Styled.Images>
        <Styled.ImageContainer>
          <Image
            src={fundingItemImg ?? AirpodImg}
            alt="펀딩아이템 이미지"
            width={375}
            height={375}
            placeholder="blur"
            blurDataURL="asstes/default.svg"
            priority
          />
        </Styled.ImageContainer>
      </Styled.Images>
      <Styled.Titles>
        <Styled.BoldTitle>{fundingName} </Styled.BoldTitle>
        <Styled.StatusMark status={fundingStatus}>
          {fundingStatus === 'FAILED' ? '실패' : fundingStatus === 'SUCCESS' ? '성공' : '진행중'}
        </Styled.StatusMark>
      </Styled.Titles>
      <Styled.ProgressContainer>
        <Styled.ProgressTitle>내가 펀딩한 금액</Styled.ProgressTitle>
        <Styled.ProgressAmount>￦ {priceFormatter(fundingAmount ?? 0)}</Styled.ProgressAmount>
        <Styled.Date>{fundingDate} 에 참여했어요</Styled.Date>
      </Styled.ProgressContainer>

      {isCancelModal && (
        <CommonModal
          message={`'${fundingName}' 펀딩을\n취소하시겠습니까?`}
          buttons={[
            {
              text: '예',
              onClickButton: () => {
                setIsCancelModal(false);
                cancelParticipate.mutate(
                  {
                    fundingMemberId: fundingMemberId ?? 0,
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
          buttons={[
            {
              text: '확인',
              onClickButton: () => {
                setIsCompleteModal(false);
                router.push('/list');
              },
            },
          ]}
        />
      )}
    </Layout>
  );
}
const Styled = {
  Titles: styled.header`
    display: flex;
    flex-direction: row;

    width: 32.7rem;
    padding-left: 0.2rem;
    margin-top: 2.5rem;

    text-align: center;
    gap: 1rem;

    border-bottom: 0.1rem solid;
    border-color: '#d9d9d9';
    padding-bottom: 1.4rem;
  `,
  BoldTitle: styled.h1`
    font-size: 2rem;
    font-family: 'Roboto';
    font-weight: 900;
    letter-spacing: -0.08rem;
  `,
  StatusMark: styled.p<{ status: 'PROGRESS' | 'SUCCESS' | 'FAILED' }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0.5rem;

    color: ${({ status }) => (status === 'PROGRESS' ? '#4B3EDF' : status === 'FAILED' ? '#DF483E' : '#66ADCB')};
    border: 0.1rem solid
      ${({ status }) => (status === 'PROGRESS' ? '#4B3EDF' : status === 'FAILED' ? '#DF483E' : '#66ADCB')};
    border-radius: 10rem;

    text-align: center;
    font-family: 'Lato';
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.03rem;
  `,
  Date: styled.p`
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.048rem;
  `,
  Images: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  ImageContainer: styled.div`
    width: 100%;
    height: 37.5rem;
    border-radius: 1rem;
  `,
  ProgressContainer: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 31.1rem;

    text-align: center;
    margin-top: 2rem;
  `,
  ProgressTitle: styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
  ProgressAmount: styled.h3`
    margin-top: 0.9rem;
    margin-bottom: 1.4rem;
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
  Status: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    gap: 1.2rem;

    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: -0.03rem;
  `,
};
