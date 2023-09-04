import { useQuery } from 'react-query';
import { QUERY_KEY } from '..';
import { fetchIsRegister } from '../../api/user';

export const useIsRegister = () => {
  const { isLoading, isError, data } = useQuery([QUERY_KEY.register], fetchIsRegister);

  return { isRegister: data?.data, isLoading, isError };
};
