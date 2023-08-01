import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../states/atom';

// apis
export const BASE_URL = process.env.NEXT_PUBLIC_END ?? '';

const client = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

function AxiosInterceptor({ children }: PropsWithChildren) {
  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenState);

  const requestIntercept = client.interceptors.request.use((config) => {
    if (config.headers && !config.headers['accessToken']) {
      config.headers['accessToken'] = accessToken ? `${accessToken}` : '';

      return config;
    }

    return config;
  });

  const responseIntercept = client.interceptors.response.use();

  useEffect(() => {
    return () => {
      client.interceptors.request.eject(requestIntercept);
      client.interceptors.response.eject(responseIntercept);
    };
  }, [requestIntercept]);

  return <>{children}</>;
}

export { client, AxiosInterceptor };
