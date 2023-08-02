import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { participantSelector, participantState, paymentListState } from '../../states/atom';
import { ParticipateInput } from '../../types/responses/fund';
import { ParticipateErrorResponse } from '../../types';
import { QUERY_KEY } from '..';
import { postParticipate } from '../../api/participate';

export const useParticipateMutation = (onSuccessMutation: () => void) => {
  const participant = useRecoilValue(participantState);
  const queryClient = useQueryClient();

  return useMutation(() => postParticipate(participant), {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.fundDetail]);
      onSuccessMutation();
    },
    onError({ response }: ParticipateErrorResponse) {
      alert(response.data.msg);
    },
  });
};

export const useParticipantForm = (onSuccessMutation: () => void) => {
  const [participant, setParticipant] = useRecoilState(participantSelector);
  const participantMutation = useParticipateMutation(onSuccessMutation);

  const setParticipantForm = (input: Partial<ParticipateInput>) => {
    setParticipant({ ...participant, ...input });
  };

  const submitPariticipant = () => {
    participantMutation.mutate();
  };

  return { participant, setParticipantForm, submitPariticipant };
};
