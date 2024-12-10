"use client";

import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { buttonStyleType } from "@/core/enums/button.enum";
//base
import { FC, useState } from "react";

//lib
import { FaExclamationTriangle } from "react-icons/fa";

//components

//core

const Violation: FC = () => {
  const [showSendViolation, setShowSendViolation] = useState<boolean>(false);

  return (
    <>
      {/* 
    {showSendViolation && (

    )} */}

      <section className="lg:flex justify-between items-center py-4">
        <p className="text-sm">
          در صورتی که تخلفی از فروشندگان مشاهده کردید لطفا با ما در میان بگذارید
        </p>

        <section className="flex items-center justify-center mt-5 lg:block lg:mt-0">
          <FullButton
            btnText="گزارش تخلف"
            styleType={buttonStyleType.dashed}
            className="!border-orange-600 !text-orange-500 hover:!border-orange-300 "
            icon={<FaExclamationTriangle size={14} />}
            onClick={() => setShowSendViolation(true)}
          />
        </section>
      </section>
    </>
  );
};

export { Violation };
