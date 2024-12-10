import { WalletSection } from "@/components/shared/WalletSection/WalletSection";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import React, { FC } from "react";

const InsuranceContainer: FC = () => {
  return (
    <main>
      <WalletSection
        title="سبد سرمایه‌گذاری بیمه"
        description="طریقه امتیازگیری در این سبد،به ازای هر صد هزار تومان کارمزدی که چه توسط بیمه‌گذار که کارمزد به شرکت می‌دهد و چه مشتری که بیمه شده کارمزد ایجاد کرد هر کدام یک امتیاز در این سبد می‌گیرند،ناگفته نماند شماره حساب این سبدها هم جداگانه باید باشد."
        InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum.insurance}
      />
    </main>
  );
};

export { InsuranceContainer };
