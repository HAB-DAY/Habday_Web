import { useQuery } from 'react-query';
import { fetchFundDetail } from '../../api/fund';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { paymentListState } from '../../states/atom';
import { useEffect } from 'react';
import { fetchPaymentList } from '../../api/pay';
import { QUERY_KEY } from '..';

export const usePaymentList = () => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.paymentList], fetchPaymentList);
  const [paymentList, setPaymentList] = useRecoilState(paymentListState);

  useEffect(() => {
    data && setPaymentList(data.payments);
  }, [data]);

  return { paymentList, isLoading, isError };
};
