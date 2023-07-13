import { atom, selector } from 'recoil';
import { DetailOutput, ParticipateInput } from '../types/responses/fund';
import { AirpodImg } from '../assets';
import { STATUS } from '../util/const';
import { PaymentType } from '../types/responses/pay';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const fundingIdState = atom<number>({
  key: 'fundingId',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const fundingState = atom<DetailOutput>({
  key: 'funding',
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
  effects_UNSTABLE: [persistAtom],
});

export const participantState = atom<ParticipateInput>({
  key: 'participant',
  default: {
    fundingItemId: 0,
    name: '',
    message: '',
    fundingDate: 'YYYY-MM-DD',
    amount: 0,
    paymentId: -99,
    buyer_name: '',
    buyer_tel: '',
    buyer_email: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const participantSelector = selector({
  key: 'participantSelector',
  get: ({ get }) => ({ ...get(participantState), fundingItemId: get(fundingIdState) }),
  set: ({ set }, newValue) => {
    set(participantState, newValue);
  },
});

export const paymentListState = atom<PaymentType[]>({
  key: 'paymentListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
