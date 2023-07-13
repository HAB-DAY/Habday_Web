import { client } from '.';
import { DetailResponse } from '../types';
import { ParticipateInput } from '../types/responses/fund';

export const fetchFundDetail = async (itemId: number) => {
  const {
    data: { data },
  } = await client.get<DetailResponse>(`/funding/showFundingContent?itemId=${itemId}`);
  return data;
};

export const postParticipate = async (memberId: number, participateBody: ParticipateInput) => {
  const { data } = await client.post<ParticipateInput>(`/funding/participateFunding/${memberId}`, participateBody);

  return data;
};
