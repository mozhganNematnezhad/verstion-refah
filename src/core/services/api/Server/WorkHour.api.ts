import { AxiosResponse } from "axios";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { http } from "../../interceptors/http.interceptors";

//GetWorkHoursByDomain
export const GetWorkHoursByDomain = async (
  businessDomain: string
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(`/api/WorkHour/GetWorkHours?domain=${businessDomain}`);
};
