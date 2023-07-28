import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../states/atom';
import { fetchAccessToken } from '../../api/user';
import { useQuery } from 'react-query';
import { QUERY_KEY } from '..';
import { useEffect } from 'react';

// 펀딩 아이템 내용 상세보기
export const useAccessToken = (code: string) => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.accessToken, code], () => fetchAccessToken(code));
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    console.log(accessToken);
  }, [accessToken]);

  useEffect(() => {
    data && setAccessToken(data.accessToken);
  }, []);

  return { isLoading, isError };
};
