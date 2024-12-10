//base
import React, { FC } from "react";

//lib
import { Breadcrumb } from "antd";
import { FaHome } from "react-icons/fa";

//components
import { EditInfoContainer } from "@/components/containers/panel/EditInfoContainer/EditInfoContainer";

const EditInfoPage: FC = () => {
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
            title: "ویرایش اطلاعات کاربری",
          },
        ]}
      />

      <EditInfoContainer />
    </>
  );
};

export default EditInfoPage;
