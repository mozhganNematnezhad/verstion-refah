import React from "react";

// interface IPropType {
//   setRefetch?: React.Dispatch<React.SetStateAction<boolean>>;
// }
export const Columns = (): any[] => [
  //   {
  //     title: "عملیات",
  //     hiddenInExcle: true,
  // hiddenInPdf: true,
  //     align: "center",
  //     width: 100,
  //     render: (
  //       _: IListFacilitiesAccountInstallableRess,
  //       original: IListFacilitiesAccountInstallableRess,
  //       index: number
  //     ) => <Actions original={original} setRefetch={setRefetch} />,
  //   },
  {
    title: "مبلغ",
    align: "center",
    width: 250,
    dataIndex: "amountSeparated",
  },
  {
    title: "وضعیت تراکنش",
    align: "center",
    dataIndex: "paymentStatusTitle",
  },
  {
    title: "رسید دیجیتالی خرید",
    align: "center",
    dataIndex: "refNum",
  },

  {
    title: "شماره مرجع ",
    align: "center",
    dataIndex: "rrn",
  },
  {
    title: "تاریخ",
    align: "center",
    dataIndex: "straceDateShamsi",
  },
];
