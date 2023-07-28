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
      config.headers['accessToken'] = accessToken
        ? `${accessToken}`
        : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjWVJsWTJzRDdoYjZXZlhMVzJTVG9MZlg2QWtHa08xZUFKTlQ0cXhjdnNZIiwibmlja25hbWUiOiJjWVJsWTJzRDdoYjZXZlhMVzJTVG9MZlg2QWtHa08xZUFKTlQ0cXhjdnNZIiwiaWQiOjUsImV4cCI6MTY4OTgzNjcxOX0.cZkOxE60rPg9k0L4lkmE0VKrKwHMH1_3YnhhQ8yraSd0cMOPIuPDulx2945ziJt9UEwudFLoD1VLShzd3qc2tA';

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
