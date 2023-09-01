import { atom, selector } from 'recoil';
import { ParticipateInput, ParticipateListOutput } from '../types/responses/fund';
import { NewPayInput, PaymentType } from '../types/responses/pay';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const memberIdState = atom<number>({
  key: 'memberIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const accessTokenState = atom<string>({
  key: 'accessTokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const signupLogState = atom<boolean>({
  key: 'signupLogState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const fundingIdState = atom<number>({
  key: 'fundingIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const participantState = atom<ParticipateInput>({
  key: 'participantState',
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
  key: 'newPayState',
  default: {
    payment_name: '',
    card_number: '',
    expiry: '',
    birth: '',
    pwd_2digit: '',
  },
});

export const clickedFundingState = atom<ParticipateListOutput>({
  key: 'clickedFundingState',
  default: {
    creatorName: '',
    fundingAmount: 0,
    fundingStatus: 'PROGRESS',
    fundingMemberId: 0,
    fundingName: '',
    merchantId: '',
    fundingItemImg: '',
    fundingDate: '',
    payment_status: 'ready',
    fundingItemId: 0,
    startDate: '',
    finishDate: '',
    fundDetail: '',
  },
});
