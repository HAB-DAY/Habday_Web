import React from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import MobileWrapper from '../styles/MobileWrapper';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MobileWrapper>
        <div id="modal-root" />
        <Component {...pageProps} />
      </MobileWrapper>
    </RecoilRoot>
  );
}
