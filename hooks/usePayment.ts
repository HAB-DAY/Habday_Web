import { useQuery } from 'react-query';
import { fetchFundDetail } from '../api/fund';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { fundingState, paymentListState } from '../states/atom';
import { useEffect } from 'react';
import { fetchPaymentList } from '../api/pay';
import { QUERY_KEY } from '.';

// 펀딩 아이템 내용 상세보기
export const usePaymentList = (memberId: number) => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.paymentList, memberId], () => fetchPaymentList(memberId));
  const [paymentList, setPaymentList] = useRecoilState(paymentListState);

  useEffect(() => {
    data && setPaymentList(data.payments);
  }, [data]);

  return { paymentList, isLoading, isError };
};
