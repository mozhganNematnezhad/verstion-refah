import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const JusticeContainer: FC = () => {
  return (
    <>
      <WalletSection
        title="سبد سرمایه‌گذاری عدالت"
        description="از محل برگزاری دوره ها توسط آموزشگاه ها تغذیه می شود. طریقه امتیازگیری به ازای هر صد هزار تومان تخفیف که آموزشگاه ها واریز نمایند یک امتیاز برای آموزشگاه داران و یک امتیاز برای دانش پذیر "
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.justice}
      />
    </>
  );
};

export { JusticeContainer };
