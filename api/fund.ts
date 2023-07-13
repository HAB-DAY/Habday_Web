import { client } from '.';
import { DetailResponse } from '../types';

export const fetchFundDetail = async (itemId: number) => {
  const {
    data: { data },
  } = await client.get<DetailResponse>(`/funding/showFundingContent?itemId=${itemId}`);
  return data;
};
