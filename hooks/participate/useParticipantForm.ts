import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { participantSelector, participantState, paymentListState } from '../../states/atom';
import { ParticipateInput } from '../../types/responses/fund';
import { ParticipateErrorResponse } from '../../types';
import { QUERY_KEY } from '..';
import { postParticipate } from '../../api/participate';
import { useEffect, useState } from 'react';

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
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const participantMutation = useParticipateMutation(onSuccessMutation);

  const setParticipantForm = (input: Partial<ParticipateInput>) => {
    setParticipant({ ...participant, ...input });
  };

  const submitPariticipant = () => {
    if (participant.paymentId === -99) alert('결제수단을 선택해주세요');
    else if (participant.amount < 101) alert('최소 금액은 101원입니다');
    else if (!participant.name.length) alert('성함을 입력해주세요');
    else if (!isAgree) alert('약관에 동의해주세요');
    else participantMutation.mutate();
  };

  const toggleAgree = () => setIsAgree((prev) => !prev);

  return { participant, setParticipantForm, submitPariticipant, toggleAgree };
};
