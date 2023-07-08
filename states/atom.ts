import { atom } from 'recoil';
import { DetailOutput } from '../types/responses/fund';
import { AirpodImg } from '../assets';
import { STATUS } from '../util/const';

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
