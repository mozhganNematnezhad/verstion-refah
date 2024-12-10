import { MembershipStatusEnum } from "@/core/enums/membership-status.enum";

//MembershipStatusStatusColor
export const MembershipStatusStatusColor = (status: MembershipStatusEnum) => {
  let color = "";

  switch (status) {
    case MembershipStatusEnum.WaitingForPayment:
      color = "bg-orange-600";
      break;
    case MembershipStatusEnum.Payed:
      color = "bg-green-500";
      break;
    case MembershipStatusEnum.Error:
      color = "bg-red-500";
      break;

    default:
      break;
  }

  return color;
};
