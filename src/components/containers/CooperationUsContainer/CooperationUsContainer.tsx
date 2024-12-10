//base
import { FC } from "react";

//components

import { HeadTitle } from "@/components/common/HeadTitle/HeadTitle";
import { DownloadBtn } from "./DownloadBtn/DownloadBtn";
import { FullImage } from "@/components/common/images/FullImage/FullImage";

//assets
import cooperationUs from "@/assets/image/pages/cooperation-us/contactUs.jpg";

const CooperationUsContainer: FC = () => {
  return (
    <section className="container w-[85%] mx-auto py-9 ">
      <section className="flex justify-center items-center">
        <HeadTitle text="همکاری با رفا ۲۴" />
      </section>

      <FullImage
        src={cooperationUs.src}
        alt="شهرک رفا ۲۴"
        height="300px"
        className="rounded-xl mt-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 my-7">
        <DownloadBtn
          text="دانلود شیوه نامه"
          fileUrl={"https://zenova.ir/LetterMethod.pdf"}
          fileName="LetterMethod.pdf"
        />

        <DownloadBtn
          text="دانلود قراراد صاحب مشاغل"
          fileUrl={"https://zenova.ir/business-owner.pdf"}
          fileName="business-owner.pdf"
        />
      </div>
    </section>
  );
};

export { CooperationUsContainer };
