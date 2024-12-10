import {
  MembershipStatusEnum,
  MembershipStatusPersianEnum,
} from "@/core/enums/membership-status.enum";
import {
  MembershipFeePeriodEnum,
  MembershipFeePeriodPersianEnum,
} from "@/core/enums/membershipfee-period.enum";
import { IFullSelectOption } from "@/core/models/fullSelectOption.model";

// MembershipFeePeriod
export const MembershipFeePeriodData: IFullSelectOption[] = [
  {
    value: MembershipFeePeriodEnum.Weekly,
    label: MembershipFeePeriodPersianEnum.Weekly,
  },
  {
    value: MembershipFeePeriodEnum.Monthly,
    label: MembershipFeePeriodPersianEnum.Monthly,
  },
  {
    value: MembershipFeePeriodEnum.Yearly,
    label: MembershipFeePeriodPersianEnum.Yearly,
  },
];
// MembershipStatus
export const MembershipStatusData: IFullSelectOption[] = [
  {
    value: MembershipStatusEnum.WaitingForPayment,
    label: MembershipStatusPersianEnum.WaitingForPayment,
  },
  {
    value: MembershipStatusEnum.Payed,
    label: MembershipStatusPersianEnum.Payed,
  },
  {
    value: MembershipStatusEnum.Error,
    label: MembershipStatusPersianEnum.Error,
  },
];
