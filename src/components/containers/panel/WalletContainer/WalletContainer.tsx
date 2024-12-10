//base
import React, { FC } from "react";

//components
import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";

const WalletContainer: FC = () => {
  return (
    <>
      <WalletSection
        title="کیف پول"
        description="مبالغ کیف پول قابل استفاده برای تمامی پرداختی های شما می‌باشد!"
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.Wallet}
      />
    </>
  );
};

export { WalletContainer };
