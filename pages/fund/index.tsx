import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import Progress from '../../components/common/Progress';
import priceFormatter from '../../util/priceFormatter';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { fundingIdState } from '../../states/atom';
import { useParticipantForm } from '../../hooks/participate/useParticipantForm';
import { usePaymentList } from '../../hooks/pay/usePayment';
import { useFundDetail } from '../../hooks/fund/useFundDetail';

export default function Fund() {
  const router = useRouter();

  const itemId = useRecoilValue(fundingIdState);
  const { detail } = useFundDetail(itemId);

  const { participant, setParticipantForm, submitPariticipant } = useParticipantForm(async () => {
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
          <input type="checkbox" />
        </Styled.Check>
      </Styled.Form>
    </Layout>
  );
}

const Styled = {
  Title: styled.h1`
    margin-top: 5rem;
    text-align: center;
    font-size: 2.1rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
  Form: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 31.3rem;
    margin-top: 3rem;
  `,
  Label: styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    font-size: 1.4rem;
    font-weight: 600;
  `,
  Input: styled.input`
    display: flex;
    width: 100%;
    height: 3.9rem;
    padding: 1rem 1.4rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    font-size: 1.4rem;
    color: #444;
  `,
  Textarea: styled.textarea`
    width: 100%;
    height: 17.5rem;
    padding: 1rem 1.4rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    font-size: 1.4rem;
    line-height: 3rem;
    color: #444;
    resize: none;
  `,
  Maxline: styled.p`
    color: #c4c4c4;
    font-size: 1.4rem;
    line-height: 3rem;
    align-self: flex-end;
  `,
  AddCardButton: styled.button`
    width: 6rem;
    height: 2rem;
    border-radius: 0.2rem;
    border: 0.1rem solid #8e8e8e;
    color: #444;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
  `,
  Select: styled.select`
    display: flex;
    width: 100%;
    height: 3.9rem;
    margin-top: 1.15rem;
    padding: 0.45rem 1.4rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    color: #444;
  `,
  SelectDisabled: styled.select`
    display: flex;
    width: 100%;
    height: 3.9rem;
    margin-top: 1.15rem;
    margin-bottom: 6.4rem;
    padding: 0.45rem 1.4rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    background: #ececec;
    color: #444;
    pointer-events: none;
  `,
  Message: styled.div`
    margin-top: 0.8rem;
    margin-bottom: 4rem;
    color: #ff0000;
  `,
  Check: styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #000;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6rem;
    letter-spacing: 0.048rem;
    margin-top: 2rem;
    margin-bottom: 5.1rem;
  `,
};
