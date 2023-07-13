import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import CommonModal from '../../components/common/modal/CommonModal';
import { useNewPayForm } from '../../hooks/useNewPayForm';
import { useRouter } from 'next/router';

export default function Card() {
  const router = useRouter();
  const [isModal, setIsModal] = useState<boolean>(false);

  const { newPay, setNewPayForm, submitNewPay } = useNewPayForm(
    1,
    () => router.push('/fund'),
    () => setIsModal(true)
  );

  return (
    <Layout
      buttons={['다음에 입력', '카드 추가하기']}
      onClickButton={() => router.push('/fund')}
      onClickLeftButton={submitNewPay}
    >
      <Styled.Title>결제정보를 입력해주세요</Styled.Title>
      <Styled.Form name="new-pay">
        <Styled.InputContainer>
          <Styled.Label htmlFor="card-number">카드번호</Styled.Label>
          <Styled.Input
            id="card-number"
            placeholder="0000 - 0000 - 0000 - 0000"
            onChange={(e) => setNewPayForm({ card_number: e.target.value })}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="card-expiry">카드 유효기간</Styled.Label>
          <Styled.Input
            id="card-expiry"
            placeholder="YYYY - MM"
            onChange={(e) => setNewPayForm({ expiry: e.target.value })}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="birth">생년월일</Styled.Label>
          <Styled.Input id="birth" placeholder="6자리" onChange={(e) => setNewPayForm({ birth: e.target.value })} />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="card-pwd">비밀번호</Styled.Label>
          <Styled.Input
            id="card-pwd"
            placeholder="앞 2자리"
            onChange={(e) => setNewPayForm({ pwd_2digit: e.target.value })}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="card-name">카드별칭</Styled.Label>
          <Styled.Input
            id="card-name"
            placeholder="최대 6자리"
            onChange={(e) => setNewPayForm({ payment_name: e.target.value })}
          />
        </Styled.InputContainer>
        <Styled.Message>* 본인 명의의 카드만 입력 가능합니다.</Styled.Message>
      </Styled.Form>
      {isModal && (
        <CommonModal
          message={`카드 정보가 올바르지 않습니다.\n다시 입력해주세요.`}
          buttons={[{ text: '확인', onClickButton: () => setIsModal(false) }]}
        />
      )}
    </Layout>
  );
}

const Styled = {
  Title: styled.h1`
    margin-top: 10.5rem;
    text-align: center;
    font-size: 2.1rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    width: 31.2rem;
    margin-top: 6.1rem;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4.7rem;
    padding: 0 1.2rem;
    border: 0.1rem solid #ededed;
    border-top: 0;
    &:first-child {
      border-top: 0.1rem solid #ededed;
    }
  `,
  Label: styled.label`
    color: #444;
    font-size: 1.2rem;
    line-height: 3rem;
  `,
  Input: styled.input`
    width: 20.3rem;
    height: 3rem;
    border: 0;
    font-size: 1.2rem;
    line-height: 3rem;
    &::placeholder {
      color: #c4c4c4;
    }
  `,
  Message: styled.p`
    color: #c4c4c4;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.1rem;
  `,
};
