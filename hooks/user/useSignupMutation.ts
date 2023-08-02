import { useMutation, useQuery, useQueryClient } from 'react-query';
import { SignupInput } from '../../types/responses/user';
import { QUERY_KEY } from '..';
import { updateUserProfile } from '../../api/user';
import { SignupResponse } from '../../types';

export const useSignupMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUserProfile, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.cancel]);
    },
    onError({ msg }: SignupResponse) {
      alert(msg);
    },
  });
};
