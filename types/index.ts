import { ParticipateListOutput } from './responses/fund';

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

export interface Response<T> {
  data: T;
}

export interface ErrorResponse<T> {
  success: boolean;
  msg: string;
  data?: T;
}

export interface ParticipateListResponse {
  lists: ParticipateListOutput[];
}
