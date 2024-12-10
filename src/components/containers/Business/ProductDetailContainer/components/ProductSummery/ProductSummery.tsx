//base
import { FC } from "react";

//assets
import { TomanIconSvg } from "assets/image/svg";

//core

import { Alert } from "antd";
import { IBusinessProductDeatils } from "@/core/types/response/Product.res";
import { ConvertToSepratorNumber } from "@/core/utils/convertor.utils";

interface IpropTypes {
  productDetails: IBusinessProductDeatils | null;
}

const ProductSummery: FC<IpropTypes> = ({ productDetails }) => {
  if (!productDetails) return;

  const cost = productDetails.cost || 0;
  const discount = productDetails.discount || 0;

  const discountAmount = (cost * discount) / 100;
  const discountedPrice = cost - discountAmount;

  return (
    <section className="bg-white rounded-lg p-4">
      <section className="flex justify-start items-center gap-2 border-dashed border-b pt-2 pb-4">
        <h1 className="text-lg font-bold">
          {productDetails.title ? productDetails.title : "!"}
        </h1>

        <section className="bg-sky-700 text-white shadow shadow-sky-400 text-sm rounded-full p-2 animate-bounce">
          <span>{discount ? `${discount}%` : "تخفیفی ندارد!"} </span>
          <span>تخفیف</span>
        </section>
      </section>

      <section className="py-3">
        <section className="flex items-center gap-2 text-xs text-gray-600">
          <span>قیمت با تخفیف:</span>
          <span className="text-lg font-bold text-sky-700">
            {discount
              ? ConvertToSepratorNumber(discountedPrice)
              : ConvertToSepratorNumber(cost)}
          </span>
          <span>
            <TomanIconSvg />
          </span>
        </section>

        <section className="text-xs text-gray-600">
          <span>قیمت اصلی :</span>
          <span className="line-through ml-1">
            {ConvertToSepratorNumber(Math.ceil(cost))}
          </span>
          <span></span>
        </section>
      </section>

      {/* --- توضیحات --- */}
      <p className="font-bold border-dashed border-y py-2 mt-2">توضیحات</p>

      <div className="list-inside list-disc px-2 py-4 text-sm">
        <span>
          {productDetails.description ? (
            productDetails.description
          ) : (
            <Alert
              type="warning"
              message="توضیحاتی ثبت نشده‌است!"
              className="lg:w-1/2"
            />
          )}
        </span>
      </div>
    </section>
  );
};

export { ProductSummery };
