"use client";
import React, { FC, useEffect } from "react";
import { Drawer } from "antd";
import { FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { navigationBarList } from "@/core/data/Tools/header/header.data";

interface IPropType {
  isOpen: boolean;
  toggleDrawer: () => void;
}
const ResponsiveMenu: FC<IPropType> = ({ isOpen, toggleDrawer }) => {
  //router
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    toggleDrawer();
  }, [pathname]);

  return (
    <>
      <Drawer
        title="شهرک رفا ۲۴"
        placement="right"
        onClose={() => toggleDrawer()}
        open={isOpen}
        closeIcon={<FaTimes size={18} className="text-red-700 mx-2" />}
        zIndex={50000}
      >
        {navigationBarList.map((item, index) => (
          <section
            key={index}
            className="my-[2rem] p-2 flex gap-6 items-center justify-start"
            onClick={() => {
              router.push(item.href);
            }}
          >
            <section
              className={`mr-4   ${
                (
                  item.exact
                    ? pathname === item.href
                    : pathname.includes(item.href)
                )
                  ? "text-blue-800 dark:text-blue-[#182030]"
                  : "dark:text-[#898A8B]"
              }`}
            >
              {item.icons}
            </section>

            <p
              className={`text-base sm:text-lg  dark:text-[#ccc7c8]
                ${
                  (
                    item.exact
                      ? pathname === item.href
                      : pathname.includes(item.href)
                  )
                    ? "border-b-2 border-b-blue-600"
                    : ""
                }`}
            >
              {item.title}
            </p>
          </section>
        ))}
      </Drawer>
    </>
  );
};

export { ResponsiveMenu };
