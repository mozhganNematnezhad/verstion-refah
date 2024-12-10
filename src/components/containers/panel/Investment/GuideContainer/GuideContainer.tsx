import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const GuideContainer: FC = () => {
  return (
    <>
      <WalletSection
        title="سبد سرمایه‌گذاری راهنما"
        description="از محل مشاوره حضوری وآنلاین تغذیه می شود. طریقه امتیاز گیری مانند سبد عدالت است"
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.guide}
      />
    </>
  );
};

export { GuideContainer };
