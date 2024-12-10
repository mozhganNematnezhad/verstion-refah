import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const ProgressContainer: FC = () => {
  return (
    <>
      <WalletSection
        title="سبد سرمایه‌گذاری پیشرفت"
        description="از محل رسوب پول حاصل از تخفیفات آنلاین، تغذیه می‌شود. طریقه امتیازگیری در این سبد ، عرضه کننده به ازای هر صد هزار تومان واریزی یک امتیاز میگیرد ولی مشتری به ازای هر پنجاه هزار تومان یک امتیاز میگیرد."
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.progress}
      />
    </>
  );
};

export { ProgressContainer };
