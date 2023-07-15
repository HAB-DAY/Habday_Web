import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  RecoilState,
  useRecoilCallback,
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {
  fundingIdState,
  fundingSelector,
  fundingState,
  participantSelector,
  participantState,
  paymentListState,
} from '../states/atom';
import { useEffect } from 'react';
import { ParticipateInput } from '../types/responses/fund';
import { postParticipate } from '../api/fund';
import { ParticipateErrorResponse } from '../types';
import { QUERY_KEY } from '.';
import { useFundDetail } from './useFundDetail';

export const useParticipateMutation = (memberId: number, onSuccessMutation: () => void) => {
  const participant = useRecoilValue(participantState);
  const queryClient = useQueryClient();
  // const fundingId = useRecoilValue(fundingIdState);
  // const refresh = useRecoilRefresher_UNSTABLE(fundingSelector);

  return useMutation(() => postParticipate(memberId, participant), {
    onSuccess(data) {
      console.log(data);
      queryClient.invalidateQueries([QUERY_KEY.fundDetail], { refetchInactive: true }); // refetch 안됨
      (async () => {
        await queryClient.refetchQueries({ queryKey: QUERY_KEY.fundDetail });
      })().then(() => console.log('리패치됨'));
      //onSuccessMutation();
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
    console.log(participant);
    //setParticipant({ ...participant, paymentId: paymendList[0].paymentId });
  }, [participant]);

  return { participant, setParticipantForm, submitPariticipant };
};
