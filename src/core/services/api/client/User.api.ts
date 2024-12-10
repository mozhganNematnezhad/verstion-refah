import axios, { AxiosResponse } from "axios";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { useMutation } from "react-query";
import { authConfig } from "@/configs/auth.cf";
import { http } from "../../interceptors/http.interceptors";
import { ISetUserRealPayload } from "@/core/types/payload/User.payload";

//unInterceptedAxiosInstance
const unInterceptedAxiosInstance = axios.create({
  baseURL: authConfig.base_url,
});

//GetToken
interface IAuthResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    isSuccess: boolean;
  };
}

const GetToken = async (token: string): Promise<IAuthResponse> => {
  return await unInterceptedAxiosInstance.get(`/api/User/GetToken`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useGetToken = () => {
  return useMutation(GetToken);
};

//RegisterUserBase
const RegisterUserBase = async (ssoToken: string): Promise<IAuthResponse> => {
  return await unInterceptedAxiosInstance.post(
    `/api/User/RegisterUserBase`,
    {},
    {
      headers: {
        Authorization: `Bearer ${ssoToken}`,
      },
    }
  );
};
export const useRegisterUserBase = () => {
  return useMutation(RegisterUserBase);
};

//SetUserReal

const SetUserReal = async (
  payload: ISetUserRealPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post("/api/User/SetUserReal", payload);
};

export const useSetUserReal = () => {
  return useMutation(SetUserReal);
};

//GetUserInfo
const GetUserInfo = async (): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get("/api/User/GetUserInfo");
};

export const useGetUserInfo = () => {
  return useMutation(GetUserInfo);
};

//GetMembershipInfo
const GetMembershipInfo = async (
  code: string
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get(`/api/User/GetMembershipInfo?code=${code}`);
};

export const useGetMembershipInfo = () => {
  return useMutation(GetMembershipInfo);
};
