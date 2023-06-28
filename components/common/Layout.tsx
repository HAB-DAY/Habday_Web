import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
  buttons?: string[];
  link?: string;
}

export default function Layout(props: LayoutProps) {
  const { children, buttons, link } = props;
  return (
    <Styled.Root>
      <Styled.Main>{children}</Styled.Main>
      <Styled.Footer>
        {buttons && <Styled.Button>{buttons[0]}</Styled.Button>}
        {link && <Styled.Link>{link}</Styled.Link>}
      </Styled.Footer>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
  `,
  Main: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 61.3rem;
  `,
  Footer: styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    bottom: 5.4rem;
  `,
  Button: styled.button`
    width: 32rem;
    height: 5.2rem;
    border-radius: 1rem;
    background: black;
    text-align: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 700;
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
