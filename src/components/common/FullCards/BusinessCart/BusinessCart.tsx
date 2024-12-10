//base
import React, { FC } from "react";
import Link from "next/link";

//lib
import { FaAngleLeft, FaStar } from "react-icons/fa";

//componets
import { FullImage } from "../../images/FullImage/FullImage";

//core
import { IBusinessCartProp } from "@/core/types/props/business/product.props";

//assets
import {
  SupplyByInternetSvg,
  SupplyByPhoneSvg,
  SupplyInPersonSvg,
} from "assets/image/svg";

const BusinessCart: FC<IBusinessCartProp> = ({
  href,
  image,
  title,
  discount,
  location,
  rate,
  category,
  width,
  btnTitle,
  supplyInPerson,
  supplyByPhone,
  supplyByInternet,
}) => {
  return (
    <section
      className={`border rounded-lg cursor-pointer hover:shadow transition-all duration-300`}
      style={{ width: width ? width : "100%" }}
    >
      <Link
        href={{
          pathname: href,
        }}
      >
        {/* ---- hmage --- */}
        <section className="bg-slate-50 rounded-t-lg">
          <FullImage
            src={image}
            alt={title}
            height="110px"
            className="rounded-t-lg"
            objectFit="contain"
          />
        </section>
        {/* ---- content --- */}
        <section className="bg-white flex justify-between border-dashed border-b pt-2 px-2">
          <section className="flex flex-col gap-3">
            <p className="text-[14px] h-[25px] font-bold">
              {title.length > 26 ? `${title.substring(0, 26)}...` : title}
            </p>

            {/* ---Type Of Service---  */}
            <div className="flex items-center gap-4 text-sky-500">
              {supplyInPerson && (
                <div className="flex items-center justify-center gap-1">
                  <SupplyInPersonSvg size={14} />
                  <div className="text-sm">حضوری</div>
                </div>
              )}

              {supplyByInternet && (
                <div className="flex items-center justify-center gap-1">
                  <SupplyByInternetSvg size={14} />
                  <div className="text-sm">آنلاین</div>
                </div>
              )}

              {supplyByPhone && (
                <div className="flex items-center justify-center gap-1">
                  <SupplyByPhoneSvg size={14} />
                  <div className="text-sm">تلفنی</div>
                </div>
              )}
            </div>

            <section className="flex items-center pt-2 pb-1">
              <p className="text-xs text-gray-500 px-2 border-l">{location}</p>

              <section className="flex justify-center items-center gap-1 pr-2">
                <span className="text-xs">{rate}</span>
                <FaStar size={12} className="text-orange-400" />
              </section>

              {category && (
                <p className="text-[9px] bg-sky-400 text-white rounded-full py-0.5 px-2 mx-1">
                  {category}
                </p>
              )}
            </section>
          </section>

          <section className="border-dashed border-r pr-2">
            <div className="text-sky-700">
              <span className="text-sm ml-1 ">تا</span>
              <span className="text-xl font-bold">{discount}%</span>
            </div>
            <p className="text-sm text-center">تخفیف</p>
          </section>
        </section>
        {/* ---- redirect --- */}
        <section className="bg-white flex justify-end p-3 rounded-b-lg">
          <section className="flex justify-center items-center gap-1">
            <p className="text-sm text-sky-700">
              {btnTitle ? btnTitle : "مشاهده کسب و کار"}
            </p>
            <FaAngleLeft size={15} className="text-sky-600" />
          </section>
        </section>{" "}
      </Link>
    </section>
  );
};

export { BusinessCart };
