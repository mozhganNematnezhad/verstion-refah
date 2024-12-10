"use client";
import { authConfig } from "@/configs/auth.cf";

import React, { FC, useCallback } from "react";
import logo from "@/assets/image/logo/zenova.png";
import { FaAngleLeft } from "react-icons/fa";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { GetProductCategoriesHierarchical } from "@/core/types/response/Category.res";
import { FullImage } from "@/components/common/images/FullImage/FullImage";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";
interface Iproptypes {
  categoryList: GetProductCategoriesHierarchical[];
}
const CategorysItems: FC<Iproptypes> = ({ categoryList }) => {
  //router
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
    <section className="container mx-auto px-4 py-2 ">
      <div className="w-full">
        {categoryList &&
          categoryList.map((item, index) => (
            <Link
              href={`/business-filter?${createQueryString(
                "category",
                `${item.id}&${item.title}`
              )}`}
            >
              <div
                key={index}
                className="flex items-center justify-between rounded-[13px] bg-white cursor-pointer 
                  my-2 h-[50px] md:h-[60px] p-2 border mx-auto"
                style={{ border: "2px solid rgba(41, 68, 155, 0.22)" }}
              >
                <div className="gap-3 flex justify-start h-full items-center">
                  {item.picture ? (
                    <div className={"w-7 h-full"}>
                      <FullImage
                        src={`${authConfig.base_url}/api/Files/${serveFileTypeEnum.General}/${item.picture}`}
                        objectFit="contain"
                        alt={item.title}
                      />
                    </div>
                  ) : (
                    <div className="w-7 h-full ">
                      <FullImage
                        src={logo.src}
                        alt="اخبار رفا ۲۴"
                        objectFit="contain"
                      />
                    </div>
                  )}
                  <p className="text-[#3F3F3F] text-center">{item.title}</p>
                </div>
                <FaAngleLeft color="rgba(30, 30, 30, 0.50)" />
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export { CategorysItems };
