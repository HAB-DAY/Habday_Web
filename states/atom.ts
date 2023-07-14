import { atom, selector } from 'recoil';
import { DetailOutput, ParticipateInput } from '../types/responses/fund';
import { AirpodImg } from '../assets';
import { STATUS } from '../util/constant';
import { NewPayInput, PaymentType } from '../types/responses/pay';
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
    paymentId: 0,
    buyer_name: '',
    buyer_tel: '',
    buyer_email: '',
  },
});

export const participantSelector = selector({
  key: 'participantSelector',
  get: ({ get }) => ({
    ...get(participantState),
    fundingDate: new Date().toISOString().split('T')[0],
    fundingItemId: get(fundingIdState),
  }),
  set: ({ set }, newValue) => {
    set(participantState, newValue);
  },
});

export const paymentListState = atom<PaymentType[]>({
  key: 'paymentListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const newPayState = atom<NewPayInput>({
  key: 'newPay',
  default: {
    payment_name: '',
    card_number: '',
    expiry: '',
    birth: '',
    pwd_2digit: '',
  },
});
