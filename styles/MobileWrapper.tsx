import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function MobileWrapper({ children }: PropsWithChildren) {
  return <Styled.Root>{children}</Styled.Root>;
}

const Styled = {
  Root: styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    margin: 0 auto;
  `,
};
