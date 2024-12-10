//base
import { FC } from "react";

//lib
import { Breadcrumb } from "antd";
import { FaHome } from "react-icons/fa";

//components
import { RewardBagContainer } from "@/components/containers/panel/RewardBagContainer/RewardBagContainer";

const RewardBagPage: FC = () => {
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
            title: "کیف پاداش",
          },
        ]}
      />

      <RewardBagContainer />
    </>
  );
};

export default RewardBagPage;
