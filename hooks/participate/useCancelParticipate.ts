import { useMutation, useQueryClient } from 'react-query';
import { postCancelParticipate } from '../../api/participate';
import { ErrorResponse } from '../../types';
import { ParticipateCancelInput, ParticipateCancelOutput, ParticipateListOutput } from '../../types/responses/fund';
import { QUERY_KEY } from '..';

export const useCancelParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postCancelParticipate, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.participateList]);
    },
    onError() {
      alert('이미 취소된 펀딩입니다.');
    },
  });
};
