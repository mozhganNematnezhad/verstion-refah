import React, { FC } from "react";
import { Button } from "antd";
import { FaCreditCard, FaPlusCircle, FaTimesCircle } from "react-icons/fa";

const BasicInfo: FC = () => {
  return (
    <>
      <section className="p-2 xl:p-8">
        {/* --- top section --- */}
        <section className="pb-5">
          <p className="w-fit rounded-full text-xs md:text-xl font-bold p-2 mb-3">
            منابع این کیف از محل رسوب پورسانت حاصل از فروش آنلاین است. برای
            امتیازگیری در این کیف برای عرضه کننده به ازای هر یک میلیون تخفیفی که
            واریز می‌کند یک امتیاز و برای مشتری به ازای هر صد هزار تومان تخفیفی
            را که واریز می‌کند.
          </p>

          <p className="w-fit rounded-full text-xs md:text-[13px] py-4 px-6 bg-green-200 text-green-700 ">
            میتوانید کیف پاداش خود را در قسمت زیر مدیریت کنید!
          </p>
        </section>

        {/* --- bottom section --- */}
        <section className="flex flex-col mb-10 lg:grid grid-cols-12 gap-8 lg:mb-20 mt-12">
          <div className="lg:col-span-8 col-span-12 xl:p-4 border-2 border-dashed border-orange-600 rounded-lg">
            <div className="flex flex-col  sm:flex-row justify-between items-center pb-3 px-2">
              <p className="p-5 text-gray-400 text-sm">
                موجودی کیف پاداش :
                <span className="text-black mr-1">0تومان</span>
              </p>

              <Button
                type="primary"
                icon={<FaPlusCircle className="icon-pos" size={16} />}
                className="h-auto !text-sm !bg-sky-700 hover:!bg-sky-500 py-2 px-8 animate-pulse"
                // onClick={() => router.push({})}
              >
                <span>افزایش موجودی</span>
              </Button>
            </div>

            <hr />

            <section className="flex flex-col items-start justify-between lg:flex-row lg:p-2 lg:items-center xl:p-4 m-2 ">
              <div className="flex  mb-2 items-center justify-center lg:mb-0">
                <FaTimesCircle className="text-sky-700" />
                <p className="mr-2 text-gray-400 text-sm">
                  مبلغ قابل برداشت:
                  <span className="text-black mr-1">0تومان</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCreditCard className="text-sky-700" />

                <p className="mr-2 text-gray-400 text-sm">
                  کل برداشتی ها (تا امروز):
                  <span className="text-black mr-1">0تومان</span>
                </p>
              </div>
            </section>
          </div>

          <section
            className="lg:col-span-4 col-span-12  flex flex-col items-center justify-center p-4 
            border-2 border-dashed border-green-600 rounded-lg"
          >
            <p className="mb-5 text-black text-sm">
              مبلغ قابل برداشت:<span className="text-[#49c668]">0تومان</span>
            </p>

            <Button
              type="primary"
              icon={<FaPlusCircle className="icon-pos" size={16} />}
              className="h-auto !text-sm !bg-green-700 hover:!bg-green-500 py-2 px-8"
              // onClick={() => router.push({})}
            >
              <span>برداشت وجه</span>
            </Button>
          </section>
        </section>
      </section>
    </>
  );
};

export { BasicInfo };
