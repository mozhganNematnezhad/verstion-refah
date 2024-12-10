//base
import { FC } from "react";

//lib
import { Breadcrumb } from "antd";
import { FaHome } from "react-icons/fa";

//components
import { BankCardsContainer } from "@/components/containers/panel/BankCardsContainer/BankCardsContainer";

const BankCardsPage: FC = () => {
  return (
    <>
      <Breadcrumb
        className="!text-sm"
        items={[
          {
            title: <FaHome size={16} />,
            href: "/",
          },
          {
            title: "کارت بانکی",
          },
        ]}
      />

      <BankCardsContainer />
    </>
  );
};

export default BankCardsPage;
