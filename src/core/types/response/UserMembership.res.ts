import { IPageinateListRes } from "../common/common.res";

// GetMyMembershipHistories
export interface IGetMyMembershipHistoriesRes extends IPageinateListRes {
  items: IGetMyMembershipHistoriesList[];
}
export interface IGetMyMembershipHistoriesList {
  id: number;
  userId: number;
  amount: number;
  membershipFeeTitle: string;
  membershipFeePeriod: number;
  membershipFeePeriodTitle: string;
  membershipStatus: number;
  membershipStatusTitle: string;
  startDateShamsi: string;
  endDateShamsi: string;
  resNum: string;
  refNum: string;
  rrn: string;
  maskedPan: string;
  hashedPan: string;
  originalAmount: number;
  affectiveAmount: number;
  straceDateShamsi: string;
  straceNo: string;
}
