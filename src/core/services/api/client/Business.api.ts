import { useMutation } from "react-query";
import { http } from "../../interceptors/http.interceptors";
import { AxiosResponse } from "axios";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { ISetBusinessByUserPayload } from "@/core/types/payload/SetBusinessByUser.payload";
import {
  IGetBusinessesByFilterPayload,
  IGetMyBusinessesPayload,
} from "@/core/types/payload/GetBusinesses.payload";

//SetBusinessByUser
const SetBusinessByUser = async (
  payload: ISetBusinessByUserPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(`/api/Business/SetBusinessByUser`, payload);
};
export const useSetBusinessByUser = () => {
  return useMutation(SetBusinessByUser);
};

//GetMyBusiness
const GetMyBusiness = async (
  payload: IGetMyBusinessesPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(`/api/Business/GetMyBusinesses`, payload);
};
export const useGetMyBusiness = () => {
  return useMutation(GetMyBusiness);
};

//GetBusinessesByFilter
const GetBusinessesByFilter = async (
  payload: IGetBusinessesByFilterPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(`/api/Business/GetBusinessesByFilter`, payload);
};
export const useGetBusinessesByFilter = () => {
  return useMutation(GetBusinessesByFilter);
};
