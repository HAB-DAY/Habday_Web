import { client } from '.';
import { ParticipateErrorResponse, ParticipateListResponse, Response } from '../types';
import { ParticipateInput, ParticipateListOutput } from '../types/responses/fund';

export const postParticipate = async (participateBody: ParticipateInput) => {
  const { data } = await client.post<ParticipateErrorResponse>(`/funding/participateFunding`, participateBody);

  return data;
};

export const fetchParticipateList = async (lastItemId?: number) => {
  const {
    data: { lists },
  } = await client.get<ParticipateListResponse>(
    lastItemId ? `/funding/itemList/participated?lastItemId=${lastItemId}` : `/funding/itemList/participated`
  );

  return lists;
};
