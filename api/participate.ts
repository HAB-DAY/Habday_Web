import { client } from '.';
import { ParticipateErrorResponse, Response } from '../types';
import { ParticipateInput, ParticipateListOutput } from '../types/responses/fund';

export const postParticipate = async (participateBody: ParticipateInput) => {
  const { data } = await client.post<ParticipateErrorResponse>(`/funding/participateFunding`, participateBody);

  return data;
};

export const fetchParticipateList = async (lastItemId?: number) => {
  const {
    data: { data },
  } = await client.get<Response<ParticipateListOutput[]>>(
    lastItemId ? `/funding/itemList/participated?lastItemId=${lastItemId}` : `/funding/itemList/participated`
  );
  return data;
};
