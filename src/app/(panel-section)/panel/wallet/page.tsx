//base
import { FC } from "react";

//lib
import { Breadcrumb } from "antd";
import { FaHome } from "react-icons/fa";

//components
import { WalletContainer } from "@/components/containers/panel/WalletContainer/WalletContainer";

const WalletPage: FC = () => {
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
            title: "کیف پول",
          },
        ]}
      />

      <WalletContainer />
    </>
  );
};

export default WalletPage;
