//base
import React, { FC } from "react";

//components
import { BasicInfo } from "./components/BasicInfo/BasicInfo";
import { TabSection } from "./components/TabSection/TabSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";

interface IPropType {
  title: string;
  description: string;
  InvestmentsPortfolioTypeEnum: InvestmentsPortfolioTypeEnum;
}

const WalletSection: FC<IPropType> = ({
  title,
  description,
  InvestmentsPortfolioTypeEnum,
}) => {
  return (
    <>
      <BasicInfo
        title={title}
        description={description}
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum}
      />
      <TabSection InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum} />
    </>
  );
};

export { WalletSection };
