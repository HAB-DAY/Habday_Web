import { client } from '.';
import { PaymentResponse } from '../types';
import { NewPayInput } from '../types/responses/pay';

export const fetchPaymentList = async () => {
  const {
    data: { data },
  } = await client.get<PaymentResponse>(`/verifyIamport/noneauthpay/getPaymentLists`);
  return data;
};

export const postNewPay = async (newPay: NewPayInput) => {
  const {
    data: { data },
  } = await client.post<PaymentResponse>(`/verifyIamport/noneauthpay/getBillingKey`, newPay);
  return data;
};
