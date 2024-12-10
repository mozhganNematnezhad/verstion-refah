"use client";

//base
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

//components
import { FullImage } from "@/components/common/images/FullImage/FullImage";
import { BankUtils } from "./BankUtils/BankUtils";

//core
import { bankPortalPageType } from "@/core/enums/bank-portal.enum";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { useSetUserMembership } from "@/core/services/api/client/UserMembership.api";
import { AxiosResponse } from "axios";

//assets
import TransfreLogo from "@/assets/image/pages/bank-portal/logo.png";
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import { PaymentMethodByTypeEnum } from "@/core/enums/PaymentMethodByType.enum";
import { useSetInvestmentsPortfolioHistoryByUser } from "@/core/services/api/client/InvestmentsPortfolioHistory.api";

interface IPropTypes {
  type: bankPortalPageType;
}
const TransferContainer: FC<IPropTypes> = ({ type }) => {
  const [bankToken, setBankToken] = useState<string | null>(null);

  //router
  const router = useRouter();

  //searchParams
  const searchParams = useSearchParams();

  const searchParamsId = Number(searchParams.get("id"));
  const amount = Number(searchParams.get("amount"));
  const investmentsPortfolioType = Number(
    searchParams.get("investmentsPortfolioType")
  );
  //api
  const SetUserMembership = useSetUserMembership();
  const SetInvestmentsPortfolioHistory =
    useSetInvestmentsPortfolioHistoryByUser();

  const handleOnSuccess = (apiRes: AxiosResponse<IAxiosResult>) => {
    const result: string = apiRes.data.result;
    setBankToken(result);
  };
  const handleOnError = () => {
    setTimeout(() => {
      router.push(
        type === bankPortalPageType.Investment
          ? `/panel/investment/${InvestmentsPortfolioTypeEnum[investmentsPortfolioType]}`
          : type === bankPortalPageType.memberShip
          ? "/plans-list"
          : type === bankPortalPageType.cart
          ? "/cart"
          : "/"
      );
    }, 500);
  };

  useEffect(() => {
    if (searchParamsId) {
      SetUserMembership.mutate(
        { membershipFeeId: searchParamsId },
        {
          onSuccess: handleOnSuccess,
          onError: handleOnError,
        }
      );
    }
    if (amount && investmentsPortfolioType) {
      SetInvestmentsPortfolioHistory.mutate(
        {
          amount: amount,
          investmentsPortfolioType: investmentsPortfolioType,
          paymentMethodByType: PaymentMethodByTypeEnum.Refa24,
        },
        {
          onSuccess: handleOnSuccess,
          onError: handleOnError,
        }
      );
    }
  }, []);

  return bankToken ? (
    <BankUtils bankToken={bankToken} />
  ) : (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <section
        className="flex flex-col justify-center items-center
         bg-white shadow-md rounded-lg p-8 w-1/2"
      >
        <FullImage
          src={TransfreLogo.src}
          alt="رفا 24"
          width="150px"
          height="150px"
          className="rounded-full border border-dashed"
          objectFit="contain"
        />

        <h2 className="!text-2xl font-semibold my-6 text-center text-gray-800">
          در حال انتقال به درگاه بانک
        </h2>
        <section className="flex items-center justify-center">
          <svg
            className="animate-spin h-8 w-8 mr-3 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.732v3.155c-2.356.523-4.434 1.927-6 3.864zm14-3.864v-3.155a8.001 8.001 0 01-5.292 7.559c1.566-1.937 3.644-3.341 6-3.864z"
            ></path>
          </svg>
          <p className="text-xl mx-1 text-gray-700">لطفاً منتظر بمانید ...</p>
        </section>
      </section>
    </section>
  );
};

export { TransferContainer };
