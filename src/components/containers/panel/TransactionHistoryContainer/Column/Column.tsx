import { MembershipStatusStatusColor } from "@/core/data/color/color.data";
import { IGetMyMembershipHistoriesList } from "@/core/types/response/UserMembership.res";

export const Columns = () => [
  {
    align: "center",
    title: "نوع عضویت",
    key: "membershipFeeTitle",
    dataIndex: "membershipFeeTitle",
  },

  {
    align: "center",
    title: "دوره عضویت",
    key: "membershipFeePeriodTitle",
    dataIndex: "membershipFeePeriodTitle",
  },

  {
    align: "center",
    title: "وضعیت عضویت",
    key: "membershipStatusTitle",
    dataIndex: "membershipStatusTitle",
    render: (
      _: IGetMyMembershipHistoriesList,
      original: IGetMyMembershipHistoriesList
    ) => (
      <span
        className={`text-white text-xs px-2 py-0.5 rounded-full ${MembershipStatusStatusColor(
          original?.membershipStatus
        )}`}
      >
        {original?.membershipStatusTitle}
      </span>
    ),
  },
  {
    align: "center",
    title: "زمان تراکنش",
    key: "straceDateShamsi",
    dataIndex: "straceDateShamsi",
  },
];
