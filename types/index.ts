import { DetailOutput, PaymentListOutput } from './responses/fund';

// types
export interface DetailResponse {
  data: DetailOutput;
}

export interface PaymentResponse {
  data: PaymentListOutput;
}
