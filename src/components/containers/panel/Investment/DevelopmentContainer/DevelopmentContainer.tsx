import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const DevelopmentContainer: FC = () => {
  return (
    <main>
      <WalletSection
        title="سبد سرمایه‌گذاری توسعه"
        description="این سبد از محل تخفیفات حضوری تغذیه می‌شود.در این صورت عرضه کننده به ازای هر صد هزار تومان واریزی یک امتیاز می‌گیرد ولی مشتری به ازای هر پنجاه هزار تومان یک امتیاز می‌گیرد.  باید توجه داشت به گونه ای عرضه کننده و مشتری شناسایی شوند چرا که در موقعیتی ممکن است عرضه کننده مشتری باشد."
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.development}
      />
    </main>
  );
};

export { DevelopmentContainer };
