import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
  buttons?: string[];
  link?: string;
  onClickButton: () => void;
}

export default function Layout(props: LayoutProps) {
  const { children, buttons, link, onClickButton } = props;
  return (
    <Styled.Root>
      <Styled.Main>{children}</Styled.Main>
      <Styled.Footer isButtons={buttons?.length === 2}>
        {buttons && buttons?.length == 2 && <Styled.ButtonLeft>{buttons[1]}</Styled.ButtonLeft>}
        {buttons && buttons?.length >= 1 && <Styled.Button onClick={onClickButton}>{buttons[0]}</Styled.Button>}
        {link && <Styled.Link>{link}</Styled.Link>}
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

    min-width: 37.5rem;

    background: white;
  `,
  Main: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 67.2rem;
  `,
  Footer: styled.footer<{ isButtons: boolean }>`
    display: flex;
    flex-direction: ${({ isButtons }) => (isButtons ? 'row' : 'column')};
    justify-content: space-between;
    align-items: center;
    min-width: 32rem;
    margin-bottom: 5.4rem;
  `,
  Button: styled.button`
    width: 100%;
    height: 5.2rem;
    border-radius: 0.6rem;
    background: black;
    text-align: center;
    color: white;
    font-size: 1.3rem;
    font-weight: 900;
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
    font-weight: 900;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
  Link: styled.a`
    margin-top: 1.5rem;
    color: #c4c4c4;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 900;
  `,
};
