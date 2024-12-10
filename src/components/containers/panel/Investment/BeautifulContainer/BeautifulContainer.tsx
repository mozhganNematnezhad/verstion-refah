import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const BeautifulContainer: FC = () => {
  return (
    <>
      {" "}
      <WalletSection
        title="سبد سرمایه‌گذاری زیبا"
        description="از محل تخفیفیات حاصل از آرایش و زیبایی زنانه ومردانه تغذیه می‌شود.طریقه امتیاز گیری، این سبد از محل تخفیفات حضوری تغذیه میشود.در این صورت عرضه کننده به ازای هر صد هزار تومان واریزی یک امتیاز میگیرد ولی مشتری به ازای هر پنجاه هزار تومان یک امتیاز میگیرد"
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.beautiful}
      />
    </>
  );
};

export { BeautifulContainer };
