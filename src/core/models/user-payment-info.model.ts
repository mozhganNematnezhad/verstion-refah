export interface IUserPaymentInfoType {
  // بخش عضویت
  membershipEndDateShamsi: string;
  membershipRemainDays: number;
  membershipStatus: boolean;
  membershipFeeId: number;
  membershipFeeTitle: string;

  // بخش سبد ها
  investmentsPortfolios: IUserPaymentnvestmentsPortfolio[];
}
export interface IUserPaymentnvestmentsPortfolio {
  amountSeparated: string;
  paidByType: number;
  investmentsPortfolioTypeTitle: string;
  paidByTypeTitle: string;
  id: number;
  businessId?: any;
  userId: number;
  amount: number;
  score: number;
  investmentsPortfolioType: number;
}
