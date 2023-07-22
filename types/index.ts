import { DetailOutput, ParticipateInput } from './responses/fund';
import { PaymentListOutput } from './responses/pay';

// types
export interface DetailResponse {
  data: DetailOutput;
}

export interface PaymentResponse {
  data: PaymentListOutput;
}

export interface ParticipateResponse {
  data: ParticipateInput;
}

export interface ParticipateErrorResponse {
  response: {
    data: {
      code: number;
      msg: string;
    };
  };
}

export interface AccessTokenResponse {
  accessToken: string;
}

export interface SignupResponse {
  success: boolean;
  msg: string;
}
