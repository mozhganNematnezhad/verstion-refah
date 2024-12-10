import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "core/models/axios-result.model";
import { http } from "core/services/interceptors/http.interceptors";

//GetAllMainLocationForDropDown
const GetAllMainLocationForDropDown = async (): Promise<
  AxiosResponse<IAxiosResult>
> => {
  return await http.get(`/api/Location/GetAllMainLocationForDropDown`);
};
export const useGetAllMainLocationForDropDown = () => {
  return useMutation(GetAllMainLocationForDropDown);
};

//GetAllProvincesForDropDown
const GetAllProvincesForDropDown = async (): Promise<
  AxiosResponse<IAxiosResult>
> => {
  return await http.get(`/api/Location/GetAllProvincesForDropDown`);
};
export const useGetAllProvincesForDropDown = () => {
  return useMutation(GetAllProvincesForDropDown);
};

//GetAllCountiesForDropDown
const GetAllCountiesForDropDown = async (
  provinceId: number | string
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get(
    `/api/Location/GetAllCountiesForDropDown?provinceId=${provinceId}`
  );
};
export const useGetAllCountiesForDropDown = () => {
  return useMutation(GetAllCountiesForDropDown);
};

//GetAllCityOrVillagesForDropDown
const GetAllCityOrVillagesForDropDown = async (
  countyId: number | string
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get(
    `/api/Location/GetAllCityOrVillagesForDropDown?countyId=${countyId}`
  );
};
export const useGetAllCityOrVillagesForDropDown = () => {
  return useMutation(GetAllCityOrVillagesForDropDown);
};
