"use client";
//app
import { FC, useState } from "react";

// lib
import { Button, InputNumber } from "antd";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";

//components
import { FullModal } from "@/components/common/FullModal/FullModal";

//core
import { InvestmentsPortfolioTypeEnum } from "@/core/enums/InvestmentsPortfolioType.enum";

interface IPropType {
  title: string;
  InvestmentsPortfolioTypeEnum: InvestmentsPortfolioTypeEnum;
}

const ModalPaymentList: FC<IPropType> = ({
  title,
  InvestmentsPortfolioTypeEnum,
}) => {
  const [showModalPaymentList, setShowModalPaymentList] = useState<boolean>();
  const [amount, setAmount] = useState<number>(10000);

  const handleAddAmount = (increment: number) => {
    setAmount((prev) => Math.min(prev + increment));
  };

  return (
    <>
      {showModalPaymentList && (
        <FullModal
          title={`افزایش موجودی در${title}`}
          isOpen={showModalPaymentList}
          toggleModal={() => setShowModalPaymentList(false)}
          centered
        >
          <div className="p-4 text-center">
            <p className="text-gray-400 text-sm">امتیاز بیشتر = موجودی بیشتر</p>
            <InputNumber
              value={amount}
              onChange={(value: number | null) => setAmount(value ?? 0)}
              className="my-4 text-center text-xl w-full"
              min={0}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              step={5000}
              addonAfter={"تومان"}
            />
            {amount >= 10000 ? (
              <p className="text-gray-400 text-sm mb-4">
                {amount / 100000}: امتیاز شما 🎉
              </p>
            ) : (
              <p className="text-red-500 mb-4">
                حداقل مبلغ وارد شده ۱۰ هزار تومان می باشد
              </p>
            )}
            <div className=" flex flex-col sm:flex-row gap-4 sm:gap-0 justify-around mb-4">
              <Button
                className=" sm:w-1/3 mx-1"
                onClick={() => handleAddAmount(10000)}
              >
                +10,000 تومان
              </Button>
              <Button
                className=" sm:w-1/3 mx-1"
                onClick={() => handleAddAmount(50000)}
              >
                +50,000 تومان
              </Button>
              <Button
                className=" sm:w-1/3 mx-1"
                onClick={() => handleAddAmount(100000)}
              >
                +100,000 تومان
              </Button>
            </div>
            <Link
              href={{
                pathname: "/bank-portal/investments/transfer",
                search: `amount=${amount}&investmentsPortfolioType=${InvestmentsPortfolioTypeEnum}`,
              }}
            >
              <Button
                type="primary"
                className="!bg-yellow-500 hover:!bg-[#f4c63d] !text-white w-full"
                disabled={Boolean(amount < 10000)}
              >
                تایید
              </Button>
            </Link>
          </div>
        </FullModal>
      )}

      <Button
        type="primary"
        icon={<FaPlusCircle className="icon-pos" size={16} />}
        className="!flex !items-center !justify-center  !text-sm !bg-sky-700 hover:!bg-sky-500  animate-pulse"
        onClick={() => setShowModalPaymentList(true)}
      >
        <span>افزایش موجودی</span>
      </Button>
    </>
  );
};

export { ModalPaymentList };
