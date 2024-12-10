import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const StrategicContainer: FC = () => {
  return (
    <main>
      <WalletSection
        title="سبد سرمایه‌گذاری راهبردی"
        description="از محل 50 درصد عملکرد شرکت در بخش شتاب دهنده تغدیه می شود.طریقه امتیاز گیری، این سبد از محل تخفیفات حضوری تغذیه میشود.در این صورت عرضه کننده به ازای هر صد هزار تومان واریزی یک امتیاز میگیرد ولی مشتری به ازای هر پنجاه هزار تومان یک امتیاز میگیرد."
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.strategic}
      />
    </main>
  );
};

export { StrategicContainer };
