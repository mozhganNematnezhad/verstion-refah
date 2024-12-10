import { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";
import { IAxiosResult } from "@/core/models/axios-result.model";

// Provinces
export const Provinces = async (): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(`/api/Location/GetAllProvincesForDropDown`);
};
