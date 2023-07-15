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
  const fundingId = useRecoilValue(fundingIdState);
  //const refresh = useRecoilRefresher_UNSTABLE(fundingSelector);
  const [funding, setFunding] = useRecoilState(fundingSelector);

  // const refreshFunding = useRecoilCallback(({ snapshot }) => async () => {
  //   const refreshedData = await snapshot.getPromise(fundingState);
  //   console.log(refreshedData);
  //   refresh;
  // });

  return useMutation(() => postParticipate(memberId, participant), {
    async onSuccess(data) {
      console.log(data);
      await queryClient.invalidateQueries([QUERY_KEY.participate, memberId.toString(), QUERY_KEY.fundDetail]); // refetch 안됨
      //await refreshFunding();
      setFunding((prev) => ({ ...prev }));
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
    console.log(paymendList);
    //setParticipant({ ...participant, paymentId: paymendList[0].paymentId });
  }, [paymendList]);

  return { participant, setParticipantForm, submitPariticipant };
};
