//base
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import React, { FC } from "react";

//lib
import { FaPlusCircle } from "react-icons/fa";

//components

const AddSection: FC = () => {
  return (
    <>
      <FullButton btnText="افزودن محصول" icon={<FaPlusCircle size={16} />} />
    </>
  );
};

export { AddSection };
