import { useQuery } from 'react-query';
import { fetchFundDetail } from '../api/fund';
import { useSetRecoilState } from 'recoil';
import { fundingState } from '../states/atom';
import { useEffect } from 'react';
import { QUERY_KEY } from '.';

// 펀딩 아이템 내용 상세보기
export const useFundDetail = (itemId: number) => {
  const setFunding = useSetRecoilState(fundingState);
  const { isLoading, isError, data } = useQuery([QUERY_KEY.fundDetail, itemId, QUERY_KEY.participate], () =>
    fetchFundDetail(itemId)
  );

  useEffect(() => {
    data && setFunding(data);
  }, [data]);

  return { data, isLoading, isError };
};
