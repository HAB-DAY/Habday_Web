import { useQuery } from 'react-query';
import { QUERY_KEY } from '..';
import { fetchParticipateList } from '../../api/participate';

// 펀딩 아이템 내용 상세보기
export const useParticipantList = (lastItemId?: string) => {
  const { data, isLoading, isError } = useQuery([QUERY_KEY.participateList], () => fetchParticipateList(lastItemId));

  return { data, isLoading, isError };
};
