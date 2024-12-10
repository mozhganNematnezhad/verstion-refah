import React, { FC } from "react";
import { Drawer } from "antd";
import { SideBar } from "../SideBar";
import { FaTimes } from "react-icons/fa";

interface IPropType {
  showDrawer: boolean;
  toggleDrawer: () => void;
}
const ResponsiveSideBar: FC<IPropType> = ({ showDrawer, toggleDrawer }) => {
  return (
    <>
      <Drawer
        title="شهرک رفا ۲۴"
        placement="right"
        onClose={() => toggleDrawer()}
        open={showDrawer}
        closeIcon={<FaTimes size={18} className="text-red-700 mx-2" />}
        zIndex={50000}
      >
        <SideBar toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

export { ResponsiveSideBar };
