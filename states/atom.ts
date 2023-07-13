import { atom } from 'recoil';
import { DetailOutput, ParticipateInput } from '../types/responses/fund';
import { AirpodImg } from '../assets';
import { STATUS } from '../util/const';
import { PaymentType } from '../types/responses/pay';

export const fundingIdState = atom<number>({
  key: 'fundingIdState',
  default: 0,
});

export const fundingState = atom<DetailOutput>({
  key: 'fundingState',
  default: {
    fundingItemImg: `${AirpodImg}`,
    fundingName: '',
    fundDetail: '',
    itemPrice: 0,
    totalPrice: 0,
    goalPrice: 0,
    startDate: 'YYYY-MM-DD',
    finishDate: 'YYYY-MM-DD',
    percentage: 0,
    status: 'PROGRESS',
    hostName: '',
    fundingParticipantList: [],
  },
});

export const participantState = atom<ParticipateInput>({
  key: 'participantState',
  default: {
    fundingItemId: -99,
    name: '',
    message: '',
    fundingDate: 'YYYY-MM-DD',
    amount: 0,
    paymentId: -99,
    buyer_name: '',
    buyer_tel: '',
    buyer_email: '',
  },
});

export const paymentListState = atom<PaymentType[]>({
  key: 'paymentListState',
  default: [],
});
