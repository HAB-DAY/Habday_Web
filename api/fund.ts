import { client } from '.';
import { FundDetailResponse } from '../types/responses/fund';

export const fetchFundDetail = async (itemId: number) => {
  const {
    data: { data },
  } = await client.get<FundDetailResponse>(`/funding/showFundingContent?itemId=${itemId}`);
  return data;
};
