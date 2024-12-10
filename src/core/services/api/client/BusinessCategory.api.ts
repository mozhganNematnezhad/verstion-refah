import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "core/models/axios-result.model";
import { http } from "../../interceptors/http.interceptors";

const GetBusinessCategoriesForDropDown = async (): Promise<
  AxiosResponse<IAxiosResult>
> => {
  return await http.get(`/api/Category/GetBusinessCategoriesForDropDown`);
};
export const useGetBusinessCategoriesForDropDown = () => {
  return useMutation(GetBusinessCategoriesForDropDown);
};
