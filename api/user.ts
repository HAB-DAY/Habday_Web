// user
import { client } from '.';
import { AccessTokenResponse, Response, SignupResponse } from '../types';
import { SignupInput } from '../types/responses/user';

export const fetchAccessToken = async (code: string) => {
  const { data: accessToken } = await client.get<AccessTokenResponse>(`/api/oauth/token/naver?code=${code}`);
  return accessToken;
};

export const updateUserProfile = async (input: SignupInput) => {
  const data = await client.put<SignupResponse>(`/save/memberProfile`, input);
  return data;
};

export const fetchIsRegister = async () => {
  const { data: isRegister } = await client.get<Response<boolean>>(`/check/memberProfile`);
  return isRegister;
};
