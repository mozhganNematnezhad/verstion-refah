"use client";
import React, { FC, Suspense, useCallback } from "react";

import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FaAngleLeft, FaJira, FaMobileAlt } from "react-icons/fa";
import { authConfig } from "@/configs/auth.cf";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Style from "./CategoryMenu.module.scss";
import { GetProductCategoriesHierarchical } from "@/core/types/response/Category.res";
import { InavList } from "@/core/data/Tools/header/header.data";
import { FullImage } from "@/components/common/images/FullImage/FullImage";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";

interface IpropTypes {
  submenuDataList: GetProductCategoriesHierarchical[] | undefined;
  navDataList: InavList[];
  isLoading: boolean;
}

const CategoryMenu: FC<IpropTypes> = ({
  submenuDataList,
  navDataList,
  isLoading,
}) => {
  //router
  const pathName = usePathname();
  const searchParams = useSearchParams();

  //createQueryString
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className="flex justify-between items-center  ">
      {/* right  */}
      <div
        className={`${Style.Menu_holder} relative flex gap-2 items-center cursor-pointer `}
      >
        <span className="font-bold ">همه دسته بندی‌ها</span>

        <BiSolidDownArrow size={10} className="text-gray-600 mx-1" />

        {/***** sun menu ******/}
        <div
          className={`hidden ${Style.Menu_items} absolute z-[1000] border overflow-y-scroll h-[39rem] 
            rounded-b-md overflow-hidden top-[1.6rem] right-0 shadow-lg w-[250px] bg-zinc-50 py-3 rounded-lg`}
        >
          {isLoading ? (
            " لطفا صبر کنید "
          ) : (
            <section>
              {submenuDataList &&
                submenuDataList?.map(
                  (subMenu: GetProductCategoriesHierarchical, index) => (
                    <Suspense key={index} fallback={"Loading..."}>
                      <div className="flex items-center gap-[3px]   hover:bg-[#A9D5FE]">
                        <div
                          className={`${Style.subMenu_holder} flex justify-between items-center w-full  `}
                        >
                          <Link
                            href={`/business-filter?${createQueryString(
                              "category",
                              `${subMenu.id}&${subMenu.title}`
                            )}`}
                            className=" w-full"
                          >
                            <span className="w-full py-[9px]  px-2 flex items-center ">
                              {subMenu.picture ? (
                                <div className="mx-2 h-[17px] w-[17px]">
                                  <FullImage
                                    src={`${authConfig.base_url}/api/Files/${serveFileTypeEnum.General}/${subMenu.picture}`}
                                    width="100%"
                                    height="100%"
                                    objectFit="contain"
                                    alt={subMenu.title}
                                  />
                                </div>
                              ) : (
                                <FaJira
                                  size={10}
                                  className="text-gray-600 mx-2"
                                />
                              )}{" "}
                              {subMenu.title}
                            </span>
                          </Link>
                          {subMenu.children.length > 0 && (
                            <FaAngleLeft size={18} className="text-gray-600 " />
                          )}

                          {subMenu.children.length > 0 && (
                            <div
                              className={`${Style.subMenu_item} hidden absolute shadow-md top-0 right-[215px] h-[100%]
                             bg-zinc-50 w-[150%]  py-3 `}
                              //!type rememind
                            >
                              {subMenu.children.map((item: any, index) => (
                                <div
                                  key={index}
                                  className={`${Style.subMenu_item1} flex items-center gap-3  w-full  hover:bg-[#A9D5FE] `}
                                  // onClick={() => {
                                  //   item.children.length > 0 ? [] : onSubmit(item.id);
                                  // }}
                                >
                                  <div
                                    className={` relative flex justify-between items-center w-full`}
                                  >
                                    <Link
                                      href={`/business-filter?${createQueryString(
                                        "category",
                                        `${item.id}&${item.title}`
                                      )}`}
                                    >
                                      <span className="w-full py-2 px-2 flex items-center ">
                                        <FaJira
                                          size={10}
                                          className="text-gray-600 mx-2"
                                        />

                                        {item.title}
                                      </span>
                                    </Link>
                                    {item.children.length > 0 && (
                                      <FaAngleLeft
                                        size={18}
                                        className="text-gray-600 "
                                      />
                                    )}
                                  </div>
                                  {item.children.length > 0 && (
                                    <div
                                      className={`${Style.item_item} hidden absolute shadow-md top-0 right-[325px] 
                             bg-zinc-50 w-[120%] py-3 h-[100%]`}
                                    >
                                      {item.children.map(
                                        //!type rememind
                                        (row: any, index: number) => (
                                          <div
                                            key={index}
                                            className="flex items-center w-full hover:bg-[#A9D5FE]"
                                            // onClick={() => {
                                            //   row.children.length > 0
                                            //     ? []
                                            //     : onSubmit(row.id);
                                            // }}
                                          >
                                            <Link
                                              href={`/business-filter?${createQueryString(
                                                "category",
                                                `${row.id}&${row.title}`
                                              )}`}
                                            >
                                              <span className="w-full py-2 px-2 flex items-center ">
                                                <FaJira
                                                  size={10}
                                                  className="text-gray-600 mx-2"
                                                />

                                                {row.title}
                                              </span>
                                            </Link>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Suspense>
                  )
                )}
            </section>
          )}
        </div>
      </div>
      {/* center */}
      <div>
        <div className="flex !items-center justify-center w-[550px]">
          {navDataList.map((item: InavList, index: number) => (
            <div
              key={index}
              className={`text-xs ${
                (
                  item.exact
                    ? pathName === item.href
                    : pathName.includes(item.href)
                )
                  ? "border-b-2  border-b-[#0077b6] text-[#0077b6] font-bold px-6 z-10"
                  : ""
              }
                border-b-2 border-transparent px-6 py-2 lg:px-4`}
            >
              <Link href={item.href}>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Right div */}
      <div>
        <a
          target="_blank"
          href="/download-app"
          className="flex justify-center items-center gap-2 text-[#0077b6]  cursor-pointer"
        >
          <FaMobileAlt size={20} />
          <span> اپلیکیشن</span>
        </a>
      </div>
    </section>
  );
};

export { CategoryMenu };
