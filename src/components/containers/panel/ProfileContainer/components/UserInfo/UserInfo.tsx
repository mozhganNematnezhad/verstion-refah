//base
import React, { FC } from "react";

//lib
import { Divider, Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { FaInfoCircle } from "react-icons/fa";
import { useUserAuth } from "@/core/context/AuthenticationContext";

const UserInfo: FC = () => {
  //auth context
  const { userInfo } = useUserAuth();

  //description obj
  const items: DescriptionsProps["items"] = [
    {
      key: "نام",
      label: "نام :",
      children: userInfo.name,
      span: 2,
    },
    {
      key: "نام خانوادگی",
      label: "نام خانوادگی :",
      children: userInfo.lastName,
      span: 2,
    },
    {
      key: "کدملی",
      label: "کدملی :",
      children: userInfo.Username,
      span: 2,
    },
    {
      key: "شماره تماس",
      label: "شماره همراه :",
      children: userInfo.phone_number,
      span: 2,
    },
  ];

  return (
    <section className="mb-6">
      {/* --- Divider --- */}
      <Divider orientation="center" plain>
        <section className="flex justify-center items-center gap-x-2">
          <FaInfoCircle size={18} className="text-blue-600" />
          <span className="mt-1">اطلاعات پایه من</span>
        </section>
      </Divider>

      <Descriptions layout="vertical" bordered size="small" items={items} />
    </section>
  );
};

export { UserInfo };
