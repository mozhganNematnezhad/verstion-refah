//base
import React, { FC } from "react";

//lib
import { Anchor, Breadcrumb } from "antd";
import { FaHome, FaMapMarkerAlt, FaStar } from "react-icons/fa";

//componets
import { FullImage } from "@/components/common/images/FullImage/FullImage";

//core
import { authConfig } from "@/configs/auth.cf";

//assets
import {
  SupplyByInternetSvg,
  SupplyByPhoneSvg,
  SupplyInPersonSvg,
} from "assets/image/svg";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";

interface IpropTypes {
  titleBusiness: string;
  totalOrder: number;
  maxDiscount: number;
  county: string;
  profileBusiness: string;
  supplyInPerson: boolean;
  supplyByPhone: boolean;
  supplyByInternet: boolean;
}
const Introduction: FC<IpropTypes> = ({
  titleBusiness,
  totalOrder,
  maxDiscount,
  county,
  profileBusiness,
  supplyInPerson,
  supplyByPhone,
  supplyByInternet,
}) => {
  //anchoreItemClassName
  const anchoreItemClassName = "text-sm text-center font-bold";

  return (
    <>
      <Breadcrumb
        className="!text-sm px-1"
        items={[
          {
            title: <FaHome size={20} />,
            href: "/",
            className: "!text-white",
          },
          {
            title: "لیست کسب و کارها",
            href: "/business",
            className: "!text-white ",
          },
          { title: titleBusiness, className: "!text-white " },
        ]}
      />

      <section className="bg-white rounded-md shadow-lg px-4 pt-6 pb-4 mt-3">
        {/*  --- business des ---- */}
        <section className="lg:flex justify-between items-center pb-8">
          {/* right */}
          <section className="flex gap-2">
            <section className="w-[80px] h-[80px]">
              <FullImage
                src={`${authConfig.base_url}/api/Files/${serveFileTypeEnum.Business}/${profileBusiness}`}
                alt="شهرک رفا ۲۴"
                width="80px"
                height="80px"
                className="rounded-md border border-dashed shadow-lg"
                objectFit="contain"
              />
            </section>

            <section>
              <p className="font-bold text-lg">
                {titleBusiness ? titleBusiness : "!"}
              </p>

              <section className="flex items-center gap-2 mt-2">
                <FaMapMarkerAlt size={14} className="text-sm" />
                <p className="text-slate-600 text-sm">
                  {county ? county : " "}
                </p>

                <p className="pr-1 border-r text-green-500 text-sm">
                  الان باز است
                </p>
              </section>

              {/* Type Of Service  */}
              <div className="flex items-center gap-4 text-sky-500 mt-3 mx-1">
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
            </section>
          </section>

          {/* left */}
          <section className="h-full flex justify-center items-center mt-5 sm:gap-3 lg:mt-0">
            <section className="flex flex-col justify-center items-center border-dashed border rounded p-4">
              <p className="text-xl font-bold text-sky-700">
                {totalOrder ? totalOrder : 0}
              </p>
              <p className="text-center"> فروش روزانه</p>
            </section>

            <section className="flex flex-col justify-center items-center border-dashed border rounded p-4">
              <div className="flex justify-center items-center gap-2">
                <FaStar size={17} className="text-orange-400" />
                <span className="text-xl font-bold text-sky-700">4.8</span>
              </div>
              <p className="text-center">امتیاز کاربران</p>
            </section>

            <section className="flex flex-col justify-center items-center border-dashed border rounded p-4">
              <p className="text-xl font-bold text-sky-700">
                <span className="min-[400px]:hidden"> تا </span>
                {maxDiscount ? maxDiscount : 0} %
              </p>

              <p className="text-center hidden min-[400px]:block">
                بیشترین تخفیف
              </p>
              <p className="text-center block min-[400px]:hidden"> تخفیف</p>
            </section>
          </section>
        </section>

        {/* --- navigation bar --- */}
        <Anchor
          className="bg-white rounded-b-lg !pt-2 z-[500000] px-2"
          direction="horizontal"
          affix
          targetOffset={130}
          showInkInFixed
          items={[
            {
              title: "گالری تصاویر",
              key: "gallery",
              href: "#gallery",
              className: anchoreItemClassName,
            },
            {
              title: "محصولات",
              key: "products",
              href: "#products",
              className: anchoreItemClassName,
            },
            {
              title: "درباره ما",
              key: "about-us",
              href: "#about-us",
              className: anchoreItemClassName,
            },
            {
              title: "تماس با ما",
              key: "contact-us",
              href: "#contact-us",
              className: anchoreItemClassName,
            },
          ]}
        />
      </section>
    </>
  );
};

export { Introduction };
