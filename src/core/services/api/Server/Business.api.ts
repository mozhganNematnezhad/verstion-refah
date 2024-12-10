import { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { IGetBusinessesForLandingPayload } from "@/core/types/payload/GetBusinesses.payload";

//GetBusinessesForLanding
export const GetBusinessesForLanding = async (
  payload: IGetBusinessesForLandingPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(`/api/Business/GetBusinessesForLanding`, payload);
};

//GetBusinessByDomainName
export const GetBusinessByDomainName = async (
  bussinesDomain: string
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get(
    `/api/Business/GetBusinessByDomainName?domain=${bussinesDomain}`
  );
};
