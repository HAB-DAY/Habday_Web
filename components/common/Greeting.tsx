import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { ArrowImg } from '../../assets';

interface GreetingProps {
  message: string;
  isPing?: boolean;
  onClickIcon?: () => void;
}

export default function Greeting(props: GreetingProps) {
  const { message, isPing, onClickIcon } = props;
  return (
    <Styled.GeetingContainer>
      {isPing && (
        <Styled.Ping>
          <Styled.Box>click !</Styled.Box>
          {/* <Image
            src={PingArrowImg}
            alt="툴팁화살표 이미지"
            width={10}
            height={6}
            placeholder="blur"
            blurDataURL="assets/arrow.svg"
            priority
          /> */}
          <ArrowImg isWhite />
        </Styled.Ping>
      )}
      <Styled.Emoji onClick={onClickIcon}>🎁</Styled.Emoji>
      <Styled.Message>{message}</Styled.Message>
    </Styled.GeetingContainer>
  );
}

const Styled = {
  GeetingContainer: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding-top: 23.2rem;
  `,
  Emoji: styled.h1`
    text-align: center;
    text-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    font-size: 12rem;
    font-weight: 500;
    margin-top: 3.5rem;
  `,
  Message: styled.h2`
    margin-top: 3.4rem;
    text-align: center;
    font-size: 2.1rem;
    font-weight: 500;
  `,
  Ping: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-width: 5.2rem;
    height: 2.6rem;
  `,
  Box: styled.div`
    width: 5.5rem;

    padding: 0.4rem 0.6rem;
    border-bottom: 0.4rem;
    background: #fff;
    border-radius: 0.4rem;
    border: 0;
    box-shadow: 0.2rem 0.6rem 1.2rem 0rem rgba(0, 0, 0, 0.12), 0rem 0rem 0.4rem 0rem rgba(0, 0, 0, 0.12);

    text-align: center;
    color: #242424;
    font-size: 1.4rem;
    line-height: 3rem;
    font-weight: 700;
  `,
};
