import React, { FC } from "react";
import contactUs_image from "assets/image/pages/cooperation-us/contactUs.jpg";

const TopHeader: FC = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-[22rem] md:min-h-[25rem]">
      <div className="absolute top-0 right-0 z-10 w-full h-full bg-gray-800 opacity-80"></div>
      <img
        src={contactUs_image.src}
        alt="رفا ۲۴  -حسابداری - صدور فاکتور "
        className="absolute top-0 right-0 object-cover w-full h-full"
      />

      <div className="relative z-[15] top-14 right-0 flex justify-center items-center flex-col px-4">
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">
          ارتباط با رفا ۲۴
        </h3>

        <p className="text-lg md:text-xl text-white text-center mt-12">
          رفا ۲۴، آماده همکاری با شما می باشد
        </p>

        <p className="text-lg md:text-xl text-white text-center mt-2">
          درصورت تمایل برای همکاری با ما می توانید از طریق راه های ارتباطی زیر
          با ما در ارتباط باشید.
        </p>
      </div>
    </div>
  );
};

export { TopHeader };
