import { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";
import { IAxiosResult } from "@/core/models/axios-result.model";

//GetUserInfo
export const GetUserInfo = async (): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get(`/api/User/GetUserInfo`);
};
