"use client";

//base
import { FC, useState } from "react";

//componets
import { Button, Divider } from "antd";
import { FaInfoCircle, FaPlusCircle } from "react-icons/fa";

const MyMembershipContainer: FC = (): JSX.Element => {
  const [status, setStatus] = useState(false);
  const days = 10;

  return (
    <section className="p-2 xl:p-8">
      {/* --- Divider --- */}
      <Divider orientation="center" plain>
        <section className="flex justify-center items-center gap-x-2">
          <FaInfoCircle size={18} className="text-blue-600" />
          <span className="mt-1">وضعیت عضویت شما</span>
        </section>
      </Divider>

      <section className="w-full flex flex-col-reverse md:flex-row mx-auto p-3 rounded-lg text-xs md:text-sm">
        <section className=" w-full flex flex-col my-auto">
          <section className="flex flex-col gap-4 md:gap-0 md:flex-row items-center  justify-between">
            <span
              className={`w-fit rounded-full py-3 px-8 ${
                status === true
                  ? "bg-green-200 text-green-700 text-xs md:text-[13px]"
                  : "bg-red-200 text-red-700 text-xs md:text-[13px] "
              }  `}
            >
              {status === true
                ? " عضویت شما فعال می باشد"
                : " عضویت شما غیرفعال می باشد"}
            </span>
            <section className={`${status === true ? "hidden" : "block"}`}>
              <Button
                type="primary"
                icon={<FaPlusCircle className="icon-pos" size={16} />}
                className="h-auto !text-sm !bg-green-700 hover:!bg-green-500 py-2 px-8"
                // onClick={() => router.push({})}
              >
                <span>پرداخت حق عضویت</span>
              </Button>
            </section>
          </section>

          <section
            className={`flex justify-around mt-6 border-2 border-dotted rounded-lg p-5 ${
              status === true ? " border-green-700" : " border-red-700 mt-8"
            }`}
          >
            <span className="  text-xs md:text-[15px]">
              تعداد روز باقی مانده : {days}
            </span>
            <span className=" text-xs md:text-[15px]">
              تاریخ انقضا : {"12.05.06"}
            </span>
          </section>
        </section>
      </section>
    </section>
  );
};

export { MyMembershipContainer };
