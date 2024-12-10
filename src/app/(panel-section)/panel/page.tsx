//base
import { FC } from "react";

//lib
import { Breadcrumb } from "antd";
import { FaHome } from "react-icons/fa";

//components
import { ProfileContainer } from "@/components/containers/panel/ProfileContainer/ProfileContainer";

const ProfilePage: FC = () => {
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
            title: "پروفایل کاربری",
          },
        ]}
      />

      <ProfileContainer />
    </>
  );
};

export default ProfilePage;
