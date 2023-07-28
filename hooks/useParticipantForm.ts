import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  RecoilState,
  useRecoilCallback,
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { participantSelector, participantState, paymentListState } from '../states/atom';
import { useEffect } from 'react';
import { ParticipateInput } from '../types/responses/fund';
import { postParticipate } from '../api/fund';
import { ParticipateErrorResponse } from '../types';
import { QUERY_KEY } from '.';
import { useFundDetail } from './useFundDetail';

export const useParticipateMutation = (memberId: number, onSuccessMutation: () => void) => {
  const participant = useRecoilValue(participantState);
  const queryClient = useQueryClient();

  return useMutation(() => postParticipate(participant), {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.fundDetail, memberId]); // refetch 안됨
      onSuccessMutation();
    },
    onError({ response }: ParticipateErrorResponse) {
      alert(response.data.msg);
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
    participantMutation.mutate();
  };

  return { participant, setParticipantForm, submitPariticipant };
};
