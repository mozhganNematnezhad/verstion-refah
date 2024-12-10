//base
import React, { FC, Suspense } from "react";
import Link from "next/link";

//lib
import { FaAngleLeft } from "react-icons/fa";

//compoenets

//assets
import bgImage from "assets/db/business/vip-suggest/bg.webp";

//core
import { authConfig } from "@/configs/auth.cf";
import { IBusinessProduct } from "@/core/types/response/Business.res";
import { FullImage } from "@/components/common/images/FullImage/FullImage";
import { BusinessCart } from "@/components/common/FullCards/BusinessCart/BusinessCart";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";

interface IPropType {
  businessList: IBusinessProduct[];
}

const VipSuggest: FC<IPropType> = ({ businessList }) => {
  return (
    <section className="bg-sky-700 mb-6">
      <section className="container mx-auto px-4 py-6">
        <section className="flex items-center justify-stretch gap-3 overflow-x-auto overflow-y-hidden">
          {/* --- adv bg --- */}
          <Link
            href="/business-filter"
            className="flex flex-col justify-center items-center gap-3 border py-3 rounded-lg cursor-pointer"
          >
            <div className="w-[100px] sm:w-[150px]">
              <div className="text-white text-center">
                <p>پشنهــــاد</p>
                <p>شگفــــت</p>
                <p>انگیــــز</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3  py-3">
                <FullImage
                  src={bgImage.src}
                  alt="شهرک زنوا"
                  height="110px"
                  objectFit="contain"
                />
                <div className="flex justify-between items-center gap-1">
                  <p className="text-sm text-white">مشاهده همه</p>
                  <FaAngleLeft size={15} className="text-white" />
                </div>
              </div>
            </div>
          </Link>

          {/* --- vip product suggestion list --- */}
          <section className="h-full flex flex-nowrap gap-3 pl-4">
            {businessList?.map((item, key) => (
              <Suspense fallback={"Loading..."} key={key}>
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
              </Suspense>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export { VipSuggest };
