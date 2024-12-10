"use client";
import React, { useState } from "react";
import { Button, Popover } from "antd";
import { IoIosCloseCircle } from "react-icons/io";
import { PopContent } from "./components/PopContent/PopContent";
import { UserSvg } from "@/assets/image/svg";

const PopOver = () => {
  // Pop over
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      zIndex={4000000}
      placement="bottomRight"
      content={
        <>
          <IoIosCloseCircle
            onClick={hide}
            className={"!text-3xl text-red-400 cursor-pointer "}
          />
          <PopContent />
        </>
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button className="!h-full !w-full flex items-center justify-center !p-0 ">
        <div className="py-1 px-2">
          <UserSvg color={"#1A202C"} size={33} />
        </div>
      </Button>
    </Popover>
  );
};

export { PopOver };
