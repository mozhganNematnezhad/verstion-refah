import React, { FC } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { TransactionHistory } from "./tab/TransactionHistory/TransactionHistory";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import { HarvestReports } from "./tab/HarvestReports/HarvestReports";
interface IPropTypes {
  InvestmentsPortfolioTypeEnum: InvestmentsPortfolioTypeEnum;
}
const TabSection: FC<IPropTypes> = ({ InvestmentsPortfolioTypeEnum }) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "تاریخچه تراکنش ها",
      children: (
        <TransactionHistory
          InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum}
        />
      ),
    },
    {
      key: "2",
      label: "گزارشات برداشت",
      children: <HarvestReports />,
      closable: true,
    },
  ];
  return (
    <>
      <Tabs
        type="card"
        defaultActiveKey="1"
        // className="!p-0 !m-0"
        items={items}
        size="large"
      />
    </>
  );
};

export { TabSection };
