import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";
import { IAxiosResult } from "@/core/models/axios-result.model";
import {
  IGetMyMembershipHistoriesPayload,
  ISetUserMembershipPayload,
  IValidationUserMembershipPaymentPayload,
} from "@/core/types/payload/UserMembership.payload";
import { IGetMembershipFeesPayload } from "@/core/types/payload/MembershipFee.payload";

//SetUserMembership
const SetUserMembership = async (
  payload: ISetUserMembershipPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post("/api/UserMembership/SetUserMembership", payload);
};
export const useSetUserMembership = () => {
  return useMutation(SetUserMembership);
};

//ValidationUserMembershipPayment
const ValidationUserMembershipPayment = async (
  payload: IValidationUserMembershipPaymentPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(
    "/api/UserMembership/ValidationUserMembershipPayment",
    payload
  );
};
export const useValidationUserMembershipPayment = () => {
  return useMutation(ValidationUserMembershipPayment);
};
// GetMyMembershipHistories
const GetMyMembershipHistories = async (
  payload: IGetMyMembershipHistoriesPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(
    "/api/UserMembership/GetMyMembershipHistories",
    payload
  );
};
export const useGetMyMembershipHistories = () => {
  return useMutation(GetMyMembershipHistories);
};
// GetMembershipFees
const GetMembershipFees = async (
  payload: IGetMembershipFeesPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post("/api/MembershipFee/GetMembershipFees", payload);
};
export const useGetMembershipFees = () => {
  return useMutation(GetMembershipFees);
};
