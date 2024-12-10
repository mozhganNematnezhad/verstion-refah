"use client";

import { FullButton } from "@/components/common/Form/FullButton/FullButton";
//base
import React, { FC } from "react";

//lib
import { FaExclamationCircle, FaSync } from "react-icons/fa";

//components

interface IPropType {
  refreshOnClick?: () => void;
}
const ErrorPageContainer: FC<IPropType> = ({ refreshOnClick }) => {
  return (
    <>
      <section className="flex items-center justify-center h-screen dark:bg-gray-900 dark:text-white">
        <div className="text-center px-8">
          <div className="flex justify-center items-center text-yellow-500 mb-4">
            <FaExclamationCircle size={100} />
          </div>
          <h1 className="text-4xl text-center font-bold mb-4">
            مشکلی پیش آمده است!
          </h1>
          <p className="text-lg text-center mb-8">
            در حال حاضر مشکلی در سامانه به وجود آمده است. لطفاً صبر کنید یا با
            پشتیبانی تماس بگیرید.
          </p>

          <section className="flex justify-center items-center">
            <FullButton
              btnText="تلاش مجدد"
              icon={<FaSync size={16} />}
              onClick={() => {
                refreshOnClick
                  ? refreshOnClick()
                  : (window.location.href = "/");
              }}
            />
          </section>
        </div>
      </section>
    </>
  );
};

export { ErrorPageContainer };
