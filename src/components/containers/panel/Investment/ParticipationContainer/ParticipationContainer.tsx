import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const ParticipationContainer: FC = () => {
  return (
    <>
      <WalletSection
        title="سبد سرمایه‌گذاری مشارکت"
        description="از محل پورسانت فروش آنلاین تغذیه می‌شود.طریقه امتیازگیری به ازای خرید وفروش توسط مشتری و عرضه کننده به میزان هر صد هزار تومان یک دهم امتیاز "
        InvestmentsPortfolioTypeEnum={
          InvestmentsPortfolioTypeEnum.participation
        }
      />
    </>
  );
};

export { ParticipationContainer };
