import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { participantSelector, participantState, paymentListState } from '../states/atom';
import { useEffect } from 'react';
import { ParticipateInput } from '../types/responses/fund';
import { postParticipate } from '../api/fund';
import { ParticipateErrorResponse } from '../types';

const QUERY_KEY = {
  participate: 'participate',
};

export const useParticipateMutation = (memberId: number, onSuccessMutation: () => void) => {
  const participant = useRecoilValue(participantState);
  const queryClient = useQueryClient();

  return useMutation(() => postParticipate(memberId, participant), {
    onSuccess(data) {
      console.log(data);
      queryClient.invalidateQueries([QUERY_KEY.participate, memberId.toString()]);
      onSuccessMutation();
    },
    onError({ response }: ParticipateErrorResponse) {
      alert(response.data.msg);
    },
  });
};

export const useParticipantForm = (memberId: number, onSuccessMutation: () => void) => {
  const [participant, setParticipant] = useRecoilState(participantSelector);
  const paymendList = useRecoilValue(paymentListState);
  const participantMutation = useParticipateMutation(memberId, onSuccessMutation);

  const setParticipantForm = (input: Partial<ParticipateInput>) => {
    setParticipant({ ...participant, ...input });
  };

  const submitPariticipant = () => {
    participantMutation.mutate();
  };

  useEffect(() => {
    setParticipant({ ...participant, paymentId: paymendList[0].paymentId });
  }, [paymendList]);

  return { participant, setParticipantForm, submitPariticipant };
};
