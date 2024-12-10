import { IPaginationPayload } from "../common/common.payload";

//SetInvestmentsPortfolioHistoryByUser
export interface ISetInvestmentsPortfolioHistoryByUserPayload {
  amount: number;
  investmentsPortfolioType: number;
  paymentMethodByType: number;
}

//GetInvestmentsPortfolioHistoriesByUser
export interface IGetInvestmentsPortfolioHistoriesByUserPayload
  extends IPaginationPayload {
  minAmount?: number;
  maxAmount?: number;
  investmentsPortfolioType: number;
  paymentMethodByType: number;
  paidByType: number;
  paymentStatus?: number;
  minOriginalAmount?: number;
  maxOriginalAmount?: number;
  minAffectiveAmount?: number;
  maxAffectiveAmount?: number;
  startStraceDateShamsi?: string;
  endStraceDateShamsi?: string;
}
