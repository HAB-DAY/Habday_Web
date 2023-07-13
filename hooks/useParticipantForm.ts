import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { participantState } from '../states/atom';
import { useEffect } from 'react';
import { ParticipateInput } from '../types/responses/fund';

const QUERY_KEY = {
  fundForm: 'fundForm',
};

// 펀딩 참여정보 입력하기
export const useParticipantForm = () => {
  const [participant, setParticipant] = useRecoilState(participantState);

  const setParticipantForm = (input: Partial<ParticipateInput>) => {
    setParticipant({ ...participant, ...input });
  };

  return { participant, setParticipantForm };
};
