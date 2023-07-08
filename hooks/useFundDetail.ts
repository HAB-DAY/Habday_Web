import { useQuery } from 'react-query';
import { fetchFundDetail } from '../api/fund';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { fundingState } from '../states/atom';
import { useEffect } from 'react';

const QUERY_KEY = {
  fundDetail: 'fundDetail',
};

// 펀딩 아이템 내용 상세보기
export const useFundDetail = (itemId: number) => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.fundDetail, itemId], () => fetchFundDetail(itemId));
  const setFunding = useSetRecoilState(fundingState);

  useEffect(() => {
    data && setFunding(data);
  }, [data]);

  return { data, isLoading, isError };
};
