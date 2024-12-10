import { MembershipCardContainer } from "@/components/containers/panel/MembershipCardContainer/MembershipCardContainer";
import { Breadcrumb } from "antd";
import React from "react";
import { FaHome } from "react-icons/fa";

const MembershipCard = () => {
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
            title: "کارت عضویت من",
          },
        ]}
      />
      <section className="flex items-center justify-center">
        <MembershipCardContainer />
      </section>
    </>
  );
};

export default MembershipCard;
