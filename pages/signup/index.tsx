import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import { useRouter } from 'next/router';
import { useAccessToken } from '../../hooks/user/useAccessToken';
import { GetServerSidePropsContext } from 'next';
import { useSignupForm } from '../../hooks/user/useSignupForm';

interface codeProps {
  code: string;
}

export default function Signup({ code }: codeProps) {
  const router = useRouter();
  const { isLoading, isError } = useAccessToken(code);
  const { form, setSignupForm, submitForm } = useSignupForm(() => router.push('/detail'));

  if (isLoading) {
    return <div>로그인중..</div>;
  }

  if (isError) {
    return <div>로그인 실패</div>;
  }

  return (
    <Layout buttons={['가입하고 펀딩참여하기']} onClickButton={submitForm}>
      <Styled.Title>추가정보를 입력해주세요</Styled.Title>
      <Styled.Form>
        <Styled.InputContainer>
          <Styled.Label>생년월일</Styled.Label>
          <Styled.Input placeholder="6자리" onChange={(e) => setSignupForm({ birthday: e.target.value })} />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>은행정보</Styled.Label>
          <Styled.Select name="bankname" onChange={(e) => setSignupForm({ bankName: e.target.value })}>
            <option value="국민">국민</option>
            <option value="하나">하나</option>
            <option value="신한">신한</option>
          </Styled.Select>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>계좌번호</Styled.Label>
          <Styled.Input onChange={(e) => setSignupForm({ accountNumber: e.target.value })} />
        </Styled.InputContainer>
        <Styled.Message>* 펀딩금액 입금을 위해 계좌정보를 정확히 입력해주세요</Styled.Message>
      </Styled.Form>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return { props: { code: context.query.code } };
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
  Select: styled.select`
    width: 20.3rem;
    height: 3rem;
    border: 0;
    font-size: 1.2rem;
    line-height: 3rem;
  `,
  Message: styled.p`
    color: #c4c4c4;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.1rem;
  `,
};
