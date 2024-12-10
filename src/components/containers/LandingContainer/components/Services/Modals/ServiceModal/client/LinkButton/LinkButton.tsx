"use client";

import { FullButton } from "@/components/common/Form/FullButton/FullButton";
//base
import { FC, useState } from "react";

//lib
import { FaSignInAlt } from "react-icons/fa";

//core

interface IPropType {
  btnText: string;
}
const LinkButton: FC<IPropType> = ({ btnText }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <FullButton
        btnText={btnText}
        icon={<FaSignInAlt size={16} />}
        isLoading={isLoading}
        onClick={() => setIsLoading(true)}
      />
    </>
  );
};

export { LinkButton };
