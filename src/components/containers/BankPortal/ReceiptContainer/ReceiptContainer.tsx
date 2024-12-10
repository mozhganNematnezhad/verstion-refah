"use client";

//base
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

//core
import { IBankProtalResult } from "@/core/types/formikValues/BankProtal/BankProtal.values";
import { ConvertToSepratorNumber } from "@/core/utils/convertor.utils";
import { FullPageLoading } from "@/components/common/Loading/FullPageLoading/FullPageLoading";
import { useGetUserInfo } from "@/core/services/api/client/User.api";
import { setUserPaymentInfo } from "@/core/services/storageFun/storageFun.service";
import { bankPortalPageType } from "@/core/enums/bank-portal.enum";
import {
  useSetInvestmentsPortfolioHistoryByUser,
  useValidationInvestmentsPortfolioHistoryByUser,
} from "@/core/services/api/client/InvestmentsPortfolioHistory.api";
import { useValidationUserMembershipPayment } from "@/core/services/api/client/UserMembership.api";

interface IPropTypes {
  type: bankPortalPageType;
}

const ReceiptContainer: FC<IPropTypes> = ({ type }) => {
  const [bankResult, setBankResult] = useState<IBankProtalResult | null>(null);
  const [isValidaPayment, setIsValidaPayment] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //var
  const isInvestment = type === bankPortalPageType.Investment;
  //searchParams
  const searchParams = useSearchParams();

  //نتیجه تراکنش بانک
  useEffect(() => {
    const MID = searchParams.get("MID");
    const TerminalId = searchParams.get("TerminalId");
    const RefNum = searchParams.get("RefNum");
    const ResNum = searchParams.get("ResNum");
    const Amount = searchParams.get("Amount");
    const Wage = searchParams.get("Wage");
    const Rrn = searchParams.get("Rrn");
    const SecurePan = searchParams.get("SecurePan");
    const HashedCardNumber = searchParams.get("HashedCardNumber");
    const Status = searchParams.get("Status");
    const State = searchParams.get("State");
    const TraceNo = searchParams.get("TraceNo");

    setIsLoading(true);

    setBankResult({
      MID,
      TerminalId,
      RefNum,
      ResNum,
      Amount,
      Wage,
      Rrn,
      SecurePan,
      HashedCardNumber,
      Status,
      State,
      TraceNo,
    });
  }, []);

  //api
  const getMutation = useGetUserInfo();
  const setMutation: any = isInvestment
    ? useValidationInvestmentsPortfolioHistoryByUser()
    : useValidationUserMembershipPayment();

  //تایید صحت تراکنش توسط بک
  useEffect(() => {
    if (bankResult) {
      setMutation.mutate(
        {
          mid: String(bankResult.RefNum),
          amount: Number(bankResult.Amount || 0),
          hashedCardNumber: String(bankResult.HashedCardNumber),
          rrn: String(bankResult.Rrn),
          securePan: String(bankResult.SecurePan),
          state: String(bankResult.State),
          status: Number(bankResult.Status),
          traceNo: String(bankResult.TraceNo),
          wage: Number(bankResult.Wage || 0),
          refNum: String(bankResult.RefNum),
          resNum: String(bankResult.ResNum),
        },
        {
          onSuccess: () => {
            if (isInvestment) {
              getMutation.mutate();
            }
            setIsValidaPayment(true);
            setIsLoading(false);
          },
          onError: () => {
            setIsValidaPayment(false);
            setIsLoading(false);
          },
        }
      );
    }
  }, [bankResult]);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const result = getMutation.data.data?.result;
      const membershipFee = {
        membershipEndDateShamsi: result?.membershipEndDateShamsi,
        membershipRemainDays: result?.membershipRemainDays,
        membershipStatus: result?.membershipStatus,
        membershipFeeId: result?.membershipFeeId,
        membershipFeeTitle: result?.membershipFeeTitle,
        investmentsPortfolios: result?.investmentsPortfolios,
      };
      setUserPaymentInfo(membershipFee);
    }
  }, [getMutation.isSuccess]);

  return (
    <section className="min-h-screen flex items-start justify-center bg-gray-100 pt-24">
      {isLoading ? (
        <FullPageLoading />
      ) : (
        <section className="bg-white p-8 rounded-lg shadow-md w-full mx-4 md:!w-[40%]">
          <h1
            className={`text-3xl font-semibold mb-4 text-center text-white py-2 rounded-lg ${
              isValidaPayment ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isValidaPayment ? "پرداخت موفقیت‌آمیز" : "خطا در عملیات پرداخت"}
          </h1>
          <section className="bg-gray-200 p-4 rounded-md mb-6">
            <p className="text-gray-700 text-center">
              {isValidaPayment
                ? "با تشکر از پرداخت شما. تراکنش شما با موفقیت انجام شد."
                : "پرداخت شما موفقیت‌آمیز نبود. لطفاً دوباره تلاش کنید."}
            </p>
          </section>
          <section className="mb-6">
            <section className="flex justify-between mb-2">
              <p className="text-gray-600">شماره رهگیری :</p>
              <p className="font-semibold">{bankResult?.TraceNo}</p>
            </section>

            <section className="flex justify-between mb-2">
              <p className="text-gray-600">شماره خرید:</p>
              <p className="font-semibold">{bankResult?.ResNum}</p>
            </section>

            <section className="flex justify-between mb-2">
              <p className="text-gray-600">مبلغ پرداختی :</p>
              <p className="font-semibold text-green-700">
                {ConvertToSepratorNumber(Number(bankResult?.Amount || 0))}{" "}
                ریــــال
              </p>
            </section>

            <section className="flex justify-between mb-2">
              <p className="text-gray-600">شماره مرجع :</p>
              <p className="font-semibold">{bankResult?.Rrn}</p>
            </section>

            <section className="flex justify-between mb-2">
              <p className="text-gray-600">رسید دیجیتالی خرید :</p>
              <p className="font-semibold">{bankResult?.RefNum}</p>
            </section>

            <section className="flex justify-between mb-2">
              <p className="text-gray-600">شماره ترمینال :</p>
              <p className="font-semibold text-blue-700">
                {bankResult?.TerminalId}
              </p>
            </section>
          </section>

          <section className="flex justify-center items-center">
            <a href="/">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white 
              font-semibold py-2 px-4 rounded"
              >
                ادامه دادن
              </button>
            </a>
          </section>
        </section>
      )}
    </section>
  );
};

export { ReceiptContainer };
