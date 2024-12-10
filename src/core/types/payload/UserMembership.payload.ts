import { IPaginationPayload } from "../common/common.payload";

//SetUserMembership
export interface ISetUserMembershipPayload {
  membershipFeeId: number;
}

//ValidationUserMembership
export interface IValidationUserMembershipPaymentPayload {
  mid: string;
  state: string;
  status: number;
  rrn: string;
  resNum: string;
  refNum: string;
  traceNo: string;
  amount: number;
  wage: number;
  securePan: string;
  hashedCardNumber: string;
}
//GetMyMembershipHistories
export interface IGetMyMembershipHistoriesPayload extends IPaginationPayload {
  membershipFeeId?: number;
  membershipFeePeriod?: number;
  membershipStatus?: number;
  startDateShamsi?: string;
  endDateShamsi?: string;
}
