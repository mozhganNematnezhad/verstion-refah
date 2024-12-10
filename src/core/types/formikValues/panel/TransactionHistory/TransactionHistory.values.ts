import { ISingleSelectOption } from "@/core/models/general.model";

export interface ITransactionHistoryValues {
  membershipFee: ISingleSelectOption;
  membershipFeePeriod: ISingleSelectOption;
  membershipStatus: ISingleSelectOption;
  startDateShamsi: string;
  endDateShamsi: string;
}
