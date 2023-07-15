import React from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import MobileWrapper from '../styles/MobileWrapper';
import '../styles/global.css';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import Head from 'next/head';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        //refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Head>
          <title>HAB-DAY</title>
        </Head>
        <MobileWrapper>
          <div id="modal-root" />
          <Component {...pageProps} />
        </MobileWrapper>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
