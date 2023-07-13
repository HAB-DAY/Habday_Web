import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { participantState } from '../states/atom';
import { useEffect } from 'react';
import { ParticipateInput } from '../types/responses/fund';
import { postParticipate } from '../api/fund';

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
      //onSuccessMutation();
    },
  });
};

export const useParticipantForm = (memberId: number, onSuccessMutation: () => void) => {
  const [participant, setParticipant] = useRecoilState(participantState);
  const participantMutation = useParticipateMutation(memberId, onSuccessMutation);

  const setParticipantForm = (input: Partial<ParticipateInput>) => {
    setParticipant({ ...participant, ...input });
  };

  const submitPariticipant = () => {
    participantMutation.mutate();
  };

  return { participant, setParticipantForm, submitPariticipant };
};
