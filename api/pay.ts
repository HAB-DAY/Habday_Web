import { client } from '.';
import { PaymentResponse } from '../types';
import { NewPayInput } from '../types/responses/pay';

export const fetchPaymentList = async (memberId: number) => {
  const {
    data: { data },
  } = await client.get<PaymentResponse>(`/verifyIamport/noneauthpay/getPaymentLists/${memberId}`);
  return data;
};

export const postNewPay = async (memberId: number, newPay: NewPayInput) => {
  const {
    data: { data },
  } = await client.post(`/verifyIamport/noneauthpay/getBillingKey/${memberId}`);
  return data;
};
