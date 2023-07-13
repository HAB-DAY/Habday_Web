import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';

type ButtonObjectType = {
  text: string;
  onClickButton: () => void;
};
export interface CommonModalProps {
  message: string;
  buttons: ButtonObjectType[];
}

export default function CommonModal(props: CommonModalProps) {
  const { message, buttons } = props;
  const buttonCount = buttons.length;

  const disableScroll = () => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
  };
  const enableScroll = () => {
    const scrollY = document.body.style.top;
    document.body.style.cssText = '';
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  };
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  }, []);

  return (
    <ModalPortal>
      <Styled.Backdrop>
        <Styled.ModalContainer>
          <Styled.Message>{message}</Styled.Message>
          <Styled.Buttons buttonCount={buttonCount}>
            {buttons.map(({ text, onClickButton }, index) => (
              <Styled.Button key={index} onClick={onClickButton}>
                {text}
              </Styled.Button>
            ))}
          </Styled.Buttons>
        </Styled.ModalContainer>
      </Styled.Backdrop>
    </ModalPortal>
  );
}

const Styled = {
  ModalContainer: styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 34.8rem;
    height: 17rem;
    background: white;
    z-index: 10;
  `,
  Message: styled.pre`
    min-height: 3.4rem;
    margin-top: 3rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;
  `,
  Buttons: styled.div<{ buttonCount: number }>`
    display: flex;
    justify-content: ${({ buttonCount }) => (buttonCount == 2 ? 'space-between' : 'center')};
    width: 22.6rem;
    margin-top: 2.3rem;
  `,
  Button: styled.button`
    width: 10.8rem;
    height: 3.6rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.052rem;
  `,
  Backdrop: styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 37.5rem;
    height: 100%;
    z-index: 9;
    background: rgba(3, 11, 13, 0.39);
  `,
};
