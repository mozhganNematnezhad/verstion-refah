"use client";
import React, { useState } from "react";
import { ResponsiveMenu } from "./components/ResponsiveMenu/ResponsiveMenu";
import { FaBars } from "react-icons/fa";

const ResponsiveMenuClicker = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <>
      <ResponsiveMenu
        isOpen={showDrawer}
        toggleDrawer={() => setShowDrawer(false)}
      />

      <FaBars
        size={35}
        color={"#707070"}
        className="py-1 px-2 lg:hidden"
        onClick={() => setShowDrawer(true)}
      />
    </>
  );
};

export { ResponsiveMenuClicker };
