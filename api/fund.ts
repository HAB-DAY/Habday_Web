import { useRecoilValue } from 'recoil';
import { client } from '.';
import { DetailResponse, ParticipateResponse } from '../types';
import { ParticipateInput } from '../types/responses/fund';

export const fetchFundDetail = async (itemId: number) => {
  const accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3aktnajVlVVhBSXpmNWItZmxoTHBldEZNOVcxSGMwWXA2XzZSbXhhbm40Iiwibmlja25hbWUiOiJ3aktnajVlVVhBSXpmNWItZmxoTHBldEZNOVcxSGMwWXA2XzZSbXhhbm40IiwiaWQiOjcsImV4cCI6MTY5MDAyNTc5Nn0.TfBnepc1uYQlckB4-EA_CxtVQi8Qiy296kVTlDnC-XEr3RiM7uFpt69l2V5bGP-2OQfO64x-S8OHPP1zm3XXsw';
  const {
    data: { data },
  } = await client.get<DetailResponse>(`/funding/showFundingContent?itemId=${itemId}`);
  return data;
};

export const postParticipate = async (memberId: number, participateBody: ParticipateInput) => {
  const {
    data: { data },
  } = await client.post<ParticipateResponse>(`/funding/participateFunding/${memberId}`, participateBody);

  return data;
};
