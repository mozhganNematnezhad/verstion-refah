import { useMutation } from "react-query";
import { http } from "../../interceptors/http.interceptors";
import { AxiosResponse } from "axios";
import { IAxiosResult } from "@/core/models/axios-result.model";

//GetMyBusinessMembership
const GetMyBusinessMembership = async (): Promise<
  AxiosResponse<IAxiosResult>
> => {
  return await http.get(`/api/User/GetMyBusinessMembership`);
};

export const useGetMyBusinessMembership = () => {
  return useMutation(GetMyBusinessMembership);
};
