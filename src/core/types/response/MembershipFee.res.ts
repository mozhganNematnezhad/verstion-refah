//GetMembershipFees
export interface IGetMembershipFeesRessponse {
  id: number;
  title: string;
  amount: number;
  amountSeparated: string;
  description: string;
  membershipFeePeriod: number;
  membershipFeePeriodTitle: string;
  membershipFeeType: number;
  membershipFeeTypeTitle: string;
  discount: number;
}
