import { client } from '.';
import { ErrorResponse, Response } from '../types';
import { NewPayInput, NewPayOutput, PaymentListOutput } from '../types/responses/pay';

export const fetchPaymentList = async () => {
  const {
    data: { data },
  } = await client.get<Response<PaymentListOutput>>(`/verifyIamport/noneauthpay/getPaymentLists`);
  return data;
};

export const postNewPay = async (newPay: NewPayInput) => {
  const {
    data: { data },
  } = await client.post<ErrorResponse<NewPayOutput>>(`/verifyIamport/noneauthpay/getBillingKey`, newPay);
  return data;
};
