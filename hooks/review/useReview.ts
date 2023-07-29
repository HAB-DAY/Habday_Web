import { useQuery } from 'react-query';
import { QUERY_KEY } from '..';
import { fetchReview } from '../../api/review';

export const useReview = (confirmationId: number) => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.review], () => fetchReview(confirmationId), {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { review: data, isLoading, isError };
};
