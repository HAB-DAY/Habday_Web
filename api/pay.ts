import { client } from '.';
import { PaymentResponse } from '../types';

export const fetchPaymentList = async (memberId: number) => {
  const {
    data: { data },
  } = await client.get<PaymentResponse>(`/verifyIamport/noneauthpay/getPaymentLists/${memberId}`);
  return data;
};
