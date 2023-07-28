import { client } from '.';
import { Response } from '../types';
import { DetailOutput } from '../types/responses/fund';

export const fetchFundDetail = async (itemId: number) => {
  const {
    data: { data },
  } = await client.get<Response<DetailOutput>>(`/funding/showFundingContent?itemId=${itemId}`);
  return data;
};
