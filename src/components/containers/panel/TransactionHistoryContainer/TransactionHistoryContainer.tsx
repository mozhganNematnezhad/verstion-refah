"use client";

//base
import { FC, useEffect, useState } from "react";

//lib
import { Form, Formik } from "formik";

//components
import { CardWrapper } from "@/components/common/Wrapper/CardWrapper/CardWrapper";
import { SearchSection } from "./SearchSection/SearchSection";
import { ListTable } from "@/components/common/ListTable/ListTable";
import { Columns } from "./Column/Column";

//core
import { useGetMyMembershipHistories } from "@/core/services/api/client/UserMembership.api";
import { ITransactionHistoryValues } from "@/core/types/formikValues/panel/TransactionHistory/TransactionHistory.values";
import { IGetMyMembershipHistoriesPayload } from "@/core/types/payload/UserMembership.payload";
import {
  IGetMyMembershipHistoriesList,
  IGetMyMembershipHistoriesRes,
} from "@/core/types/response/UserMembership.res";

const TransactionHistoryContainer: FC = () => {
  const [initialValues] = useState<ITransactionHistoryValues>({
    membershipFee: null,
    membershipFeePeriod: null,
    membershipStatus: null,
    startDateShamsi: "",
    endDateShamsi: "",
  });
  const [tableData, setTableData] = useState<IGetMyMembershipHistoriesList[]>(
    []
  );
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);
  const [totalNumber, setTotalNumber] = useState<number>(0);
  //api
  const searchMutation = useGetMyMembershipHistories();

  //searchMutation
  useEffect(() => {
    searchMutation.mutate({
      page: tableData.length === 1 && page > 1 ? page - 1 : page,
      pageSize: pageSize,
    });
  }, [pageSize]);

  useEffect(() => {
    if (searchMutation.isSuccess) {
      const result: IGetMyMembershipHistoriesRes =
        searchMutation?.data?.data?.result;

      if (result.items) {
        setTableData(result.items);
        setTotalNumber(result.totalCount);
      }
    }
  }, [searchMutation.isSuccess]);

  const generatePayloadFun = (values: ITransactionHistoryValues) => {
    const generatePayload = {
      ...(values.membershipFee && {
        membershipFeeId: values.membershipFee.value,
      }),
      ...(values.membershipFeePeriod && {
        membershipFeePeriod: values.membershipFeePeriod.value,
      }),
      ...(values.membershipStatus && {
        membershipStatus: values.membershipStatus.value,
      }),

      ...(values.startDateShamsi && {
        startDateShamsi: values.startDateShamsi,
      }),
      ...(values.endDateShamsi && { endDateShamsi: values.endDateShamsi }),
    };

    return generatePayload;
  };
  //onSubmit
  const onSubmit = (values: ITransactionHistoryValues) => {
    const payload: IGetMyMembershipHistoriesPayload = {
      page: 1,
      pageSize: pageSize,

      ...generatePayloadFun(values),
    };
    searchMutation.mutate(payload);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        // validationSchema={{}}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, resetForm }) => (
          <Form>
            <SearchSection
              setFieldValue={setFieldValue}
              resetForm={resetForm}
              isLoading={searchMutation.isLoading}
            />
            <CardWrapper headTitle="لیست تراکنش ها">
              <>
                <ListTable
                  dataSource={tableData}
                  columns={Columns()}
                  isLoading={searchMutation.isLoading}
                  totalNumber={totalNumber}
                  page={page}
                  setPage={setPage}
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                  onPaginationChange={(page: number, pageSize: number) => {
                    searchMutation.mutate({
                      page: page,
                      pageSize: pageSize,

                      ...generatePayloadFun(values),
                    });
                  }}
                />
              </>
            </CardWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { TransactionHistoryContainer };
