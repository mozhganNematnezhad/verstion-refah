"use client";
//base
import React, { FC, useEffect } from "react";

//lib
import { Button } from "antd";
import { FaCreditCard, FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

//components
import { ModalPaymentList } from "./components/ModalPaymentList/ModalPaymentList";

//core
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";
import { getUserPaymentInfo } from "@/core/services/storageFun/storageFun.service";
import { IUserPaymentnvestmentsPortfolio } from "@/core/models/user-payment-info.model";

interface IPropType {
  title: string;
  description: string;
  InvestmentsPortfolioTypeEnum: InvestmentsPortfolioTypeEnum;
}

const BasicInfo: FC<IPropType> = ({
  title,
  description,
  InvestmentsPortfolioTypeEnum,
}) => {
  const { investmentsPortfolios } = getUserPaymentInfo();

  // score and amount
  const investmentsPortfoliosList = investmentsPortfolios?.filter(
    ({ investmentsPortfolioType }) =>
      investmentsPortfolioType === InvestmentsPortfolioTypeEnum
  ) as Partial<IUserPaymentnvestmentsPortfolio>;

  return (
    <>
      <section className="p-2 xl:p-8">
        {/* --- top section --- */}
        <section className="pb-5">
          <p className="w-fit rounded-full text-xs md:text-[13px] py-4 px-6 bg-green-200 text-green-700 ">
            میتوانید {title} خود را در قسمت زیر مدیریت کنید!
          </p>

          <p className="w-fit rounded-full text-xs md:text-lg font-bold p-2 mt-3">
            {description}
          </p>
        </section>

        {/* --- bottom section --- */}
        <section className="flex flex-col mb-10 lg:grid grid-cols-12 gap-8 lg:mb-20 mt-12">
          <div className="lg:col-span-8 col-span-12 xl:p-4 border-2 border-dashed border-orange-600 rounded-lg">
            <div className="flex flex-col  sm:flex-row justify-between items-center pb-3 px-2">
              <section className="flex flex-col ">
                <p className="p-5 text-gray-400 text-sm flex gap-2 items-start justify-start">
                  <FaStar size={16} color="gold" /> امتیاز {title} :
                  <span className="text-black mr-1">
                    {investmentsPortfoliosList?.score || 0}
                  </span>
                </p>{" "}
                <p className="p-5  text-gray-400 flex   text-sm  gap-2 items-center justify-start">
                  <FaWallet size={16} color="#5a5858" /> موجودی {title} :
                  <span className="text-black mr-1">
                    {investmentsPortfoliosList?.amountSeparated || 0}
                    تومان
                  </span>
                </p>
              </section>
              <ModalPaymentList
                title={title}
                InvestmentsPortfolioTypeEnum={InvestmentsPortfolioTypeEnum}
              />
            </div>

            <hr />

            <section className="flex flex-col items-start justify-between lg:flex-row lg:p-2 lg:items-center xl:p-4 m-2 ">
              <div className="flex  mb-2 items-center justify-center lg:mb-0">
                <FaTimesCircle className="text-sky-700" />
                <p className="mr-2 text-gray-400 text-sm">
                  مبلغ قابل برداشت:
                  <span className="text-black mr-1">0تومان</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCreditCard className="text-sky-700" />

                <p className="mr-2 text-gray-400 text-sm">
                  کل برداشتی ها (تا امروز):
                  <span className="text-black mr-1">0تومان</span>
                </p>
              </div>
            </section>
          </div>

          <section
            className="lg:col-span-4 col-span-12  flex flex-col items-center justify-center p-4 
            border-2 border-dashed border-green-600 rounded-lg"
          >
            <p className="mb-5 text-black text-sm">
              مبلغ قابل برداشت:<span className="text-[#49c668]">0تومان</span>
            </p>

            <Button
              type="primary"
              icon={<FaPlusCircle className="icon-pos" size={16} />}
              className="!flex !items-center !justify-center !text-sm !bg-green-700 hover:!bg-green-500 "
              // onClick={() => router.push({})}
            >
              <span>برداشت وجه</span>
            </Button>
          </section>
        </section>
      </section>
    </>
  );
};

export { BasicInfo };
