import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const InnovationContainer: FC = () => {
  return (
    <main>
      <WalletSection
        title="سبد سرمایه‌گذاری نوآوری"
        description="از محل فروش 50 درصد از نرم افزارهای تولیدی شرکت تغذیه می شود.طریقه امتیاز گیری، این سبد از محل تخفیفات حضوری تغذیه میشود.در این صورت عرضه کننده به ازای هر صد هزار تومان واریزی یک امتیاز میگیرد ولی مشتری به ازای هر پنجاه هزار تومان یک امتیاز میگیرد."
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.innovation}
      />
    </main>
  );
};

export { InnovationContainer };
