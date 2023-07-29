import { client } from '.';
import { Response } from '../types';

export const fetchReview = async (confirmationId: number) => {
  const {
    data: { data },
  } = await client.get<Response<ReviewOutput>>(`/funding/showConfirmation/${confirmationId}`);
  return data;
};
