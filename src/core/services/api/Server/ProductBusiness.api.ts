import axios, { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { authConfig } from "@/configs/auth.cf";

//unInterceptedAxiosInstance
const unInterceptedAxiosInstance = axios.create({
  baseURL: authConfig.base_url,
});

//GetProductByLogin
export const GetProductByLogin = async (
  productId: number,
  token: string
): Promise<AxiosResponse<IAxiosResult>> => {
  return await unInterceptedAxiosInstance.get(
    `/api/Product/GetProductByLoginCustome?id=${productId}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

//GetProductByCustomer
export const GetProductByCustomer = async (
  productId: number
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get(`/api/Product/GetProductByCustome?id=${productId}`);
};
