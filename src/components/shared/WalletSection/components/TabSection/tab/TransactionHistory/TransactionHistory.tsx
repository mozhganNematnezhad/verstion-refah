"use client";
import { ListTable } from "@/components/common/ListTable/ListTable";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import { PaidByTypeEnum } from "@/core/enums/PaidByType.enum";
import { PaymentMethodByTypeEnum } from "@/core/enums/PaymentMethodByType.enum";
import { useGetInvestmentsPortfolioHistoriesByUser } from "@/core/services/api/client/InvestmentsPortfolioHistory.api";
import { FC, useEffect, useState } from "react";
import { Columns } from "./Columns/Columns";

interface IPropType {
  InvestmentsPortfolioTypeEnum: InvestmentsPortfolioTypeEnum;
}

const TransactionHistory: FC<IPropType> = ({
  InvestmentsPortfolioTypeEnum,
}) => {
  const [page, setpage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const [totalNumber, setTotalNumber] = useState<number>(0);

  const [tableData, setTableData] = useState<any[]>([]);
  //api
  const getMutation = useGetInvestmentsPortfolioHistoriesByUser();

  //first auto call Api
  useEffect(() => {
    getMutation.mutate({
      page: tableData.length === 1 && page > 1 ? page - 1 : page,
      pageSize: pageSize,
      investmentsPortfolioType: InvestmentsPortfolioTypeEnum,
      paidByType: PaidByTypeEnum.User,
      paymentMethodByType: PaymentMethodByTypeEnum.Refa24,
    });
  }, []);
  useEffect(() => {
    if (getMutation.isSuccess) {
      const result: any = getMutation.data.data.result;

      if (result.items) {
        setTableData(result.items);
        setTotalNumber(result.totalCount);
      }
    }
  }, [getMutation.isSuccess]);

  return (
    <section>
      <section
        className="bg-gradient-to-tr from-slate-50 to-slate-100 
          rounded-lg font-bold text-lg p-1 px-2"
      >
        تاریخچه تراکنش ها
      </section>
      <ListTable
        dataSource={tableData}
        columns={Columns()}
        isLoading={getMutation.isLoading}
        totalNumber={totalNumber}
        // scrollSize={1300}
        page={page}
        setPage={setpage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        onPaginationChange={(page: number, pageSize: number) => {
          getMutation.mutate({
            page: page,
            pageSize: pageSize,
            investmentsPortfolioType: InvestmentsPortfolioTypeEnum,
            paidByType: PaidByTypeEnum.User,
            paymentMethodByType: PaymentMethodByTypeEnum.Refa24,
          });
        }}
      />
    </section>
  );
};

export { TransactionHistory };
