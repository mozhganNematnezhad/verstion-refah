"use client";

import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import { Menu } from "antd";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { FaPhone, FaSignOutAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { panelConfig } from "@/configs/panel.cf";
import userDefaultLogo from "assets/image/user/02.png";
import { sideBarNav, sideBarNavDetail } from "@/navigations/SideBarNav";
import { FullImage } from "@/components/common/images/FullImage/FullImage";

//ToDo refactore this
interface IPropType {
  toggleDrawer: () => void;
}

const SideBar: FC<IPropType> = ({ toggleDrawer }) => {
  const [openKeysState, setOpenKeysState] = useState<any>();

  // auth context
  const { role, userInfo } = useUserAuth();

  //pathname
  const pathname = usePathname();

  //openKeys
  useEffect(() => {
    const openKeys: string[] = getOpens();
    setOpenKeysState(openKeys);
  }, [pathname]);

  // activeItem
  const activeItem = () => {
    let activePath: string = pathname;

    sideBarNavDetail.map((item: any) => {
      if (
        item.for.some((p: any) =>
          activePath.toLowerCase().includes(p.toLowerCase())
        )
      ) {
        activePath = item.active;
      }
    });
    return [pathname];
  };

  //getOpens
  const getOpens = () => {
    let activePath: string[] = activeItem();

    let result: any = [];

    sideBarNav.map((parent: any) => {
      let helpResult: any = [];

      if (parent.children) {
        helpResult = [...helpResult, parent.key];

        parent.children.map((item1: any) => {
          helpResult = [parent.key];

          if (item1.children) {
            helpResult = [...helpResult, item1.key];

            item1.children.map((item2: any) => {
              helpResult = [...helpResult, item1.key, item2.key];

              if (activePath[0] === item2.path) {
                result = [...helpResult];
              }

              if (item2.children) {
                helpResult = [...helpResult, item1.key, item2.key];

                item2.children.map((item3: any) => {
                  helpResult = [...helpResult, item1.key, item2.key, item3.key];

                  if (activePath[0] === item3.path) {
                    result = [...helpResult];
                  }
                });
              }
            });
          } else {
            if (activePath[0] === item1.key) {
              result = [...helpResult];
            }
          }
        });
      }
    });

    return result;
  };

  //active
  const active: string[] = activeItem();

  // checks if user can accss to a item
  const hasAccess = (value: any) => {
    if (value.permissions) {
      try {
        return value.permissions.some((p: any) => role.includes(p));
      } catch (error) {
        return false;
      }
    } else {
      return true;
    }
  };

  //close menu
  //TODO refacoter
  useEffect(() => {
    toggleDrawer();
  }, [pathname]);

  return (
    <section className="w-full lg:w-[270px] h-screen">
      <Menu
        selectedKeys={active}
        openKeys={openKeysState}
        onOpenChange={(value) => {
          setOpenKeysState(value);
        }}
        mode="inline"
        theme={panelConfig.theme}
        className={`w-full h-screen font-extrabold overflow-y-auto rounded-l-lg 
          xs:!border-none lg:!border `}
      >
        <section
          className="bg-white flex flex-col justify-center items-center gap-4 
          font-bold text-sm py-6 border-dashed border-b"
        >
          <section className="border rounded-full w-[100px] h-[100px]">
            <FullImage src={userDefaultLogo.src} alt="شهرک رفا ۲۴" />
          </section>

          <section className="flex flex-col justify-center items-center gap-2 text-center">
            <p className="font-extrabold text-lg border border-dashed rounded-full py-1 px-8 shadow">
              {`${userInfo?.name} ${userInfo?.lastName}`}
            </p>
            <section className="flex justify-center items-center gap-1">
              <FaPhone size={12} />
              <p>{userInfo?.phone_number}</p>
            </section>

            <Link
              href="/signout-oidc"
              className="flex justify-center items-center gap-1 text-red-700 hover:text-red-500 mt-3"
            >
              <FaSignOutAlt size={16} />
              <span>خروج از حساب کاربری</span>
            </Link>
          </section>
        </section>

        {sideBarNav.map((parent: any) => {
          return parent.children
            ? hasAccess(parent) && (
                <Menu.SubMenu
                  key={parent.key}
                  icon={parent.icon}
                  title={parent.title}
                >
                  {parent.children.map((item: any) => {
                    return item.children
                      ? hasAccess(item) && (
                          <Menu.SubMenu
                            key={item.key}
                            icon={item.icon}
                            title={item.title}
                          >
                            {item.children.map((item2: any) => {
                              return item2.children
                                ? hasAccess(item2) && (
                                    <Menu.SubMenu
                                      key={item2.key}
                                      icon={item2.icon}
                                      title={item2.title}
                                    >
                                      {item2.children.map(
                                        (item3: any) =>
                                          hasAccess(item3) && (
                                            <Menu.Item
                                              key={item3.key}
                                              title={item3.title}
                                              icon={item3.icon}
                                            >
                                              {item3.newTab ? (
                                                <a
                                                  href={item3.key}
                                                  target="_blank"
                                                >
                                                  {item3.title}
                                                </a>
                                              ) : (
                                                <Link href={item3.key}>
                                                  {item3.title}
                                                </Link>
                                              )}
                                            </Menu.Item>
                                          )
                                      )}
                                    </Menu.SubMenu>
                                  )
                                : hasAccess(item2) && (
                                    <Menu.Item
                                      key={item2.key}
                                      title={item2.title}
                                      icon={item2.icon}
                                    >
                                      {item2.newTab ? (
                                        <a href={item2.key} target="_blank">
                                          {item2.title}
                                        </a>
                                      ) : (
                                        <Link href={item2.key}>
                                          {item2.title}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  );
                            })}
                          </Menu.SubMenu>
                        )
                      : hasAccess(item) && (
                          <Menu.Item
                            key={item.key}
                            title={item.title}
                            icon={item.icon}
                          >
                            {item.newTab ? (
                              <a href={item.key} target="_blank">
                                {item.title}
                              </a>
                            ) : (
                              <Link href={item.key}>{item.title}</Link>
                            )}
                          </Menu.Item>
                        );
                  })}
                </Menu.SubMenu>
              )
            : hasAccess(parent) && (
                <Menu.Item
                  key={parent.key}
                  title={parent.title}
                  icon={parent.icon}
                >
                  {parent.newTab ? (
                    <a href={parent.key} target="_blank">
                      {parent.title}
                    </a>
                  ) : (
                    <Link href={parent.key}>{parent.title}</Link>
                  )}
                </Menu.Item>
              );
        })}
      </Menu>
    </section>
  );
};

export { SideBar };
