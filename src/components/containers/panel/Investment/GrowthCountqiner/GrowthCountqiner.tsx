import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React from "react";

const GrowthCountqiner = () => {
  return (
    <div>
      <WalletSection
        title="سبد سرمایه‌گذاری رشد"
        description="از محل تخفیفات آنلاین تغذیه می‌شود، طریقه امتیاز گیری، این سبد از محل تخفیفات حضوری تغذیه میشود.در این صورت عرضه کننده به ازای هر صد هزار تومان واریزی یک امتیاز میگیرد ولی مشتری به ازای هر پنجاه هزار تومان یک امتیاز میگیرد."
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.growth}
      />
    </div>
  );
};

export { GrowthCountqiner };
