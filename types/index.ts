import { DetailOutput } from './responses/fund';
import { PaymentListOutput } from './responses/pay';

// types
export interface DetailResponse {
  data: DetailOutput;
}

export interface PaymentResponse {
  data: PaymentListOutput;
}
