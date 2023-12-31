import React from 'react';
import styled from 'styled-components';
import { NaverImg } from '../../assets';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  buttons?: string[];
  link?: string;
  onClickButton?: () => void;
  onClickLeftButton?: () => void;
  isNaver?: boolean;
  isNoHeader?: boolean;
}

export default function Layout(props: LayoutProps) {
  const { children, buttons, link, onClickButton, onClickLeftButton, isNaver, isNoHeader } = props;
  const router = useRouter();

  return (
    <Styled.Root>
      {!isNoHeader && <Styled.Header onClick={() => router.push('/list')}>참여내역 보러가기 🎁</Styled.Header>}
      <Styled.Main>{children}</Styled.Main>
      <Styled.Footer isButtons={buttons?.length === 2}>
        {buttons && buttons?.length == 2 && (
          <Styled.ButtonLeft onClick={onClickLeftButton}>{buttons[1]}</Styled.ButtonLeft>
        )}
        {buttons && buttons?.length >= 1 && (
          <Styled.Button isNaver={isNaver} onClick={onClickButton}>
            {isNaver && <Image alt="네이버 로고" src={NaverImg} height={42} width={42} />}
            {buttons[0]}
          </Styled.Button>
        )}
        {/* {link && <Styled.Link>{link}</Styled.Link>} */}
      </Styled.Footer>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100vh;

    overflow-y: scroll;
    overflow-x: hidden;

    background: white;
  `,
  Header: styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    margin-top: 1.4rem;
    margin-right: 4rem;

    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: underline;
  `,
  Main: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  `,
  Footer: styled.footer<{ isButtons: boolean }>`
    display: flex;
    flex-direction: ${({ isButtons }) => (isButtons ? 'row' : 'column')};
    justify-content: space-between;
    align-items: center;
    min-width: 32rem;
    margin-bottom: 5.4rem;
  `,
  Button: styled.button<{ isNaver?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5.2rem;
    border-radius: 0.6rem;
    background: ${({ isNaver }) => (isNaver ? '#03c75a' : 'black')};
    text-align: center;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
  ButtonLeft: styled.button`
    width: 100%;
    height: 5.2rem;
    border-radius: 0.6rem;
    background: rgba(218, 218, 218, 1);
    margin-right: 0.9rem;
    text-align: center;
    color: black;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
  Link: styled.a`
    margin-top: 1.5rem;
    color: #c4c4c4;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 900;

    text-decoration: underline;
  `,
};
