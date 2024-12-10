//base
import React, { FC } from "react";

//componets
import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";

const RewardBagContainer: FC = () => {
  return (
    <>
      <WalletSection
        title="کیف پاداش"
        description="منابع این کیف از محل رسوب پورسانت حاصل از فروش آنلاین است. برای امتیازگیری در این کیف برای عرضه کننده به ازای هر یک میلیون تخفیفی که واریز می‌کند یک امتیاز و برای مشتری به ازای هر صد هزار تومان تخفیفی را که واریز می‌کند."
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.RewardBag}
      />
    </>
  );
};

export { RewardBagContainer };
