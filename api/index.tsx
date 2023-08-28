import axios from 'axios';
import { PropsWithChildren, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../states/atom';
import { useRouter } from 'next/router';

// apis
export const BASE_URL = process.env.NEXT_PUBLIC_END;

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

  const responseIntercept = client.interceptors.response.use(
    (config) => config,
    async (error) => {
      const config = error.config;
      console.log(error);
      if (error.response.status === 401) {
        alert('로그인 후 이용해 주세요');
        router.replace('/login');
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      client.interceptors.request.eject(requestIntercept);
      client.interceptors.response.eject(responseIntercept);
    };
  }, [requestIntercept]);

  return <>{children}</>;
}

export { client, AxiosInterceptor };
