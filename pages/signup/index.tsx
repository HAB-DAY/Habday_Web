import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';

export default function Signup() {
  return (
    <Layout buttons={['가입하고 펀딩참여하기']}>
      <Styled.Title>추가정보를 입력해주세요</Styled.Title>
      <Styled.Form>
        <Styled.InputContainer>
          <Styled.Label>닉네임</Styled.Label>
          <Styled.Input placeholder="최대 12글자까지 입력가능합니다." />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>생년월일</Styled.Label>
          <Styled.Input placeholder="6자리" />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>은행정보</Styled.Label>
          <Styled.Select>
            <option>국민</option>
            <option>하나</option>
            <option>신한</option>
          </Styled.Select>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>계좌번호</Styled.Label>
          <Styled.Input placeholder="000-000-000-000" />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>계좌별칭</Styled.Label>
          <Styled.Input placeholder="최대 8글자까지 입력가능합니다." />
        </Styled.InputContainer>
        <Styled.Message>* 펀딩금액 입금을 위해 계좌정보를 정확히 입력해주세요</Styled.Message>
      </Styled.Form>
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
