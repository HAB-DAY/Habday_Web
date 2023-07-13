export interface FundDetailResponse {
  data: DetailOutput;
}

export interface DetailOutput {
  fundingItemImg: string;
  fundingName: string;
  fundDetail: string;
  itemPrice: number;
  totalPrice: number;
  goalPrice: number;
  startDate: string;
  finishDate: string;
  percentage: number;
  status: StatusType;
  hostName: string;
  fundingParticipantList: ParticipantType[];
}

export type ParticipantType = {
  name: string;
  fundingDate: string;
  amount: number;
  message: string;
};

export type StatusType = 'PROGRESS' | 'FAILED' | 'SUCCESS';

export interface ParticipateInput {
  fundingItemId: number;
  name: string;
  message: string;
  fundingDate: string;
  amount: number;
  paymentId: number;
  // buyer_name: string;
  // buyer_tel: string;
  // buyer_email: string;
}
