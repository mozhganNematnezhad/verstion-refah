import { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { IGetMembershipFeesPayload } from "@/core/types/payload/MembershipFee.payload";

//GetMembershipFees
export const GetMembershipFees = async (
  payload: IGetMembershipFeesPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(`/api/MembershipFee/GetMembershipFees`, payload);
};
