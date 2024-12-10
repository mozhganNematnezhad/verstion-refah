import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const HealthContainer: FC = () => {
  return (
    <>
      <WalletSection
        title="سبد سرمایه‌گذاری سلامت"
        description="از محل تخفیفات ویزیت و پذیرش حضوری و آنلاین تغذیه می شود.طریقه امتیاز گیری ، این سبد از محل تخفیفات حضوری تغذیه میشود.در این صورت عرضه کننده به ازای هر صد هزار تومان واریزی یک امتیاز میگیرد ولی مشتری به ازای هر پنجاه هزار تومان یک امتیاز میگیرد. "
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.health}
      />
    </>
  );
};

export { HealthContainer };
