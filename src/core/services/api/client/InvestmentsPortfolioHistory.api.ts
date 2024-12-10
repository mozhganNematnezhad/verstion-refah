import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";

//core
import { IAxiosResult } from "@/core/models/axios-result.model";
import {
  IGetInvestmentsPortfolioHistoriesByUserPayload,
  ISetInvestmentsPortfolioHistoryByUserPayload,
} from "@/core/types/payload/InvestmentsPortfolioHistory.payload";
import { IValidationUserMembershipPaymentPayload } from "@/core/types/payload/UserMembership.payload";

// SetInvestmentsPortfolioHistoryByUser
const SetInvestmentsPortfolioHistoryByUser = async (
  payload: ISetInvestmentsPortfolioHistoryByUserPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(
    "/api/InvestmentsPortfolioHistory/SetInvestmentsPortfolioHistoryByUser",
    payload
  );
};
export const useSetInvestmentsPortfolioHistoryByUser = () => {
  return useMutation(SetInvestmentsPortfolioHistoryByUser);
};

// ValidationInvestmentsPortfolioHistoryByUser
const ValidationInvestmentsPortfolioHistoryByUser = async (
  payload: IValidationUserMembershipPaymentPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(
    "/api/InvestmentsPortfolioHistory/ValidationInvestmentsPortfolioHistoryByUser",
    payload
  );
};
export const useValidationInvestmentsPortfolioHistoryByUser = () => {
  return useMutation(ValidationInvestmentsPortfolioHistoryByUser);
};

//GetInvestmentsPortfolioHistoriesByUser
const GetInvestmentsPortfolioHistoriesByUser = async (
  payload: IGetInvestmentsPortfolioHistoriesByUserPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(
    "/api/InvestmentsPortfolioHistory/GetInvestmentsPortfolioHistoriesByUser",
    payload
  );
};
export const useGetInvestmentsPortfolioHistoriesByUser = () => {
  return useMutation(GetInvestmentsPortfolioHistoriesByUser);
};
