import { client } from '.';
import { ErrorResponse, ParticipateErrorResponse, ParticipateListResponse, Response } from '../types';
import { ParticipateCancelInput, ParticipateCancelOutput, ParticipateInput } from '../types/responses/fund';

export const postParticipate = async (participateBody: ParticipateInput) => {
  const { data } = await client.post<ParticipateErrorResponse>(`/funding/participateFunding`, participateBody);

  return data;
};

export const fetchParticipateList = async (lastItemId?: string) => {
  const {
    data: {
      data: { lists },
    },
  } = await client.get<Response<ParticipateListResponse>>(
    lastItemId ? `/funding/itemList/participated?lastItemId=${lastItemId}` : `/funding/itemList/participated`
  );

  return lists;
};

export const postCancelParticipate = async (cancelBody: ParticipateCancelInput) => {
  const { data } = await client.post<ErrorResponse<ParticipateCancelOutput>>(`/funding/cancel`, cancelBody);

  return data;
};
