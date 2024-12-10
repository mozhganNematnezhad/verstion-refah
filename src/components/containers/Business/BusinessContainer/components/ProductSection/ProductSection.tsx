"use client";

//base
import React, { FC, Suspense, useCallback } from "react";

//lib
import { FaAngleLeft } from "react-icons/fa";

//components

//assets

import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";
import { authConfig } from "@/configs/auth.cf";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  IBusinessProduct,
  IbusinessCategory,
} from "@/core/types/response/Business.res";
import { BusinessCart } from "@/components/common/FullCards/BusinessCart/BusinessCart";

interface IPropType {
  sectionCategory: IbusinessCategory;
  productList: IBusinessProduct[];
}

const ProductSection: FC<IPropType> = ({ sectionCategory, productList }) => {
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
    <main className="bg-white">
      <section className="xl:container mx-auto px-4 py-6">
        {/* ---- top nav --- */}

        <section className="flex justify-between items-center">
          <p className="font-bold text-xl">{sectionCategory.title}</p>

          <div className="flex justify-center items-center gap-1 font-bold text-2xl">
            <Link
              href={`/business-filter?${createQueryString(
                "category",
                `${sectionCategory.id}&${sectionCategory.title}`
              )}`}
            >
              مشاهده همه
            </Link>

            <FaAngleLeft size={15} className="text-slate-800" />
          </div>
        </section>

        {/* ---- product list --- */}
        <section className="h-full flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden justify-stretch mt-7">
          {productList?.map((item, key) => (
            <Suspense key={key} fallback={"Loading..."}>
              <div className="w-[260px] mx-[6px]">
                <BusinessCart
                  width="270px"
                  href={`/business/${item.domainName}`}
                  image={`${authConfig.base_url}/api/Files/${serveFileTypeEnum.Business}/${item.charterImage}`}
                  title={
                    item.title
                      ? item.title.length > 20
                        ? `${item.title.slice(0, 20)}...`
                        : item.title
                      : "!"
                  }
                  discount={item.maxDiscount ? item.maxDiscount : 0}
                  location={item.cityOrVillage.title}
                  rate={item.rating ? item.rating : 0}
                  supplyInPerson={item.supplyInPerson}
                  supplyByPhone={item.supplyByPhone}
                  supplyByInternet={item.supplyByInternet}
                />
              </div>
            </Suspense>
          ))}
        </section>
      </section>
    </main>
  );
};

export { ProductSection };
