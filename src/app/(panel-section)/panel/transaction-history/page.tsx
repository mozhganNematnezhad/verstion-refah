//base
import { FC } from "react";

//lib
import { Breadcrumb } from "antd";
import { FaHome } from "react-icons/fa";

//components
import { TransactionHistoryContainer } from "@/components/containers/panel/TransactionHistoryContainer/TransactionHistoryContainer";

const TransactionHistory: FC = () => {
  return (
    <>
      <Breadcrumb
        className="!text-sm"
        items={[
          {
            title: <FaHome size={16} />,
            href: "/",
          },
          {
            title: "لیست تراکنش ها",
          },
        ]}
      />

      <TransactionHistoryContainer />
    </>
  );
};

export default TransactionHistory;
