import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { participantSelector, participantState } from '../states/atom';
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
  const [participant, setParticipant] = useRecoilState(participantSelector);
  const participantMutation = useParticipateMutation(memberId, onSuccessMutation);

  const setParticipantForm = (input: Partial<ParticipateInput>) => {
    setParticipant({ ...participant, ...input });
  };

  const submitPariticipant = () => {
    setParticipant({ ...participant, fundingDate: new Date().toISOString().split('T')[0] }); // 날짜는 현재 시간으로
    participantMutation.mutate();
  };

  return { participant, setParticipantForm, submitPariticipant };
};
