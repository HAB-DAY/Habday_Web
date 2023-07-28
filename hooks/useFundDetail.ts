import { useQuery } from 'react-query';
import { fetchFundDetail } from '../api/fund';
import { useSetRecoilState } from 'recoil';
import { QUERY_KEY } from '.';

// 펀딩 아이템 내용 상세보기
export const useFundDetail = (itemId: number) => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.fundDetail], () => fetchFundDetail(itemId), {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { detail: data, isLoading, isError };
};
