import { useQuery } from 'react-query';
import { fetchFundDetail } from '../../../api/fund';

const QUERY_KEY = {
  fundDetail: 'fundDetail',
};

// 펀딩 아이템 내용 상세보기
export const useFundDetail = () => {
  const itemId = 1;
  const { data } = useQuery([QUERY_KEY.fundDetail, itemId], () => fetchFundDetail(itemId));

  return data;
};
