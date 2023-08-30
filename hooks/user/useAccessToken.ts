import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../states/atom';
import { fetchAccessToken } from '../../api/user';
import { useQuery } from 'react-query';
import { QUERY_KEY } from '..';
import { useEffect } from 'react';

export const useAccessToken = (code: string) => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.accessToken, code], () => fetchAccessToken(code));
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    data && setAccessToken(data.accessToken);
  }, []);

  return { accessToken, isLoading, isError };
};
