import { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";
import { useMutation } from "react-query";
import { IAxiosResult } from "@/core/models/axios-result.model";

//GetBusinessCategoriesHierarchical
const GetBusinessCategoriesHierarchical = async (): Promise<
  AxiosResponse<IAxiosResult>
> => {
  return await http.get(`/api/Category/GetBusinessCategoriesHierarchical`);
};
export const useGetBusinessCategoriesHierarchical = () => {
  return useMutation(GetBusinessCategoriesHierarchical);
};
