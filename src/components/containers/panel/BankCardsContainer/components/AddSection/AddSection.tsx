//base
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import React, { FC } from "react";

//lib
import { FaPlusCircle } from "react-icons/fa";

//componets

const AddSection: FC = () => {
  return (
    <>
      <FullButton
        btnText="افزودن کارت بانکی جدید"
        icon={<FaPlusCircle size={16} />}
        className="!w-1/4 mt-8"
      />
    </>
  );
};

export { AddSection };
