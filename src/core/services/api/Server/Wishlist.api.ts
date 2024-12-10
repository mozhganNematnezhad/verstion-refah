import axios, { AxiosResponse } from "axios";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { authConfig } from "@/configs/auth.cf";

//unInterceptedAxiosInstance
const unInterceptedAxiosInstance = axios.create({
  baseURL: authConfig.base_url,
});

//GetWishlistsForDropDown
export const GetWishlistsForDropDown = async (
  token: string
): Promise<AxiosResponse<IAxiosResult>> => {
  return await unInterceptedAxiosInstance.get(
    `/api/Wishlist/GetWishlistsProductIdForDropDown`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
