import { useQuery } from 'react-query';
import { fetchFundDetail } from '../api/fund';
import { useSetRecoilState } from 'recoil';
import { fundingState } from '../states/atom';
import { useEffect } from 'react';
import { QUERY_KEY } from '.';

// 펀딩 아이템 내용 상세보기
export const useFundDetail = (itemId: number) => {
  const setFunding = useSetRecoilState(fundingState);
  const { isLoading, isError, data } = useQuery([QUERY_KEY.fundDetail], () => fetchFundDetail(itemId), {
    onSuccess: (data) => {
      console.log('리패치', data);
      setFunding(data);
    },
  });

  return { data, isLoading, isError };
};
