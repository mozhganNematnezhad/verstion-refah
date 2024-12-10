//base
import React, { FC } from "react";

//lib
import { Breadcrumb } from "antd";
import { FaHome } from "react-icons/fa";

//componets
import { FavoritesContainer } from "@/components/containers/panel/FavoritesContainer/FavoritesContainer";

const FavoritesPage: FC = () => {
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
            title: "علاقه مندی ها",
          },
        ]}
      />

      <FavoritesContainer />
    </>
  );
};

export default FavoritesPage;
