import { useMutation, useQueryClient } from 'react-query';
import { postCancelParticipate } from '../../api/participate';
import { ErrorResponse } from '../../types';
import { ParticipateCancelInput, ParticipateCancelOutput, ParticipateListOutput } from '../../types/responses/fund';
import { QUERY_KEY } from '..';

export const useCancelParticipateMutation = (onSuccessMutation: () => void) => {
  const queryClient = useQueryClient();

  return (cancelBody: ParticipateCancelInput) =>
    useMutation(() => postCancelParticipate(cancelBody), {
      onSuccess() {
        queryClient.invalidateQueries([QUERY_KEY.cancel]);
        onSuccessMutation();
      },
      onError({ msg }: ErrorResponse<ParticipateCancelOutput>) {
        alert(msg);
      },
    });
};
