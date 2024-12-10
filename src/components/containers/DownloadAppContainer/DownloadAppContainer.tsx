//base
import { FC } from "react";
import Link from "next/link";

//lib
import { FaAndroid } from "react-icons/fa";

//components

import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { FullImage } from "@/components/common/images/FullImage/FullImage";

//assets
import backGround from "@/assets/image/pages/download-app/backDownload.svg";
import mobileImage from "@/assets/image/pages/download-app/mobile.svg";

const DownloadAppContainer: FC = () => {
  return (
    <section
      className="bg-no-repeat bg-center bg-cover w-full h-screen"
      style={{ background: `url(${backGround.src})` }}
    >
      <section className="flex flex-col justify-center items-center gap-4 pt-16">
        <h2 className="text-3xl text-center font-bold">
          بیشترین تخفیف ها و بهترین خدمات را در شهرک رفا ۲۴ پیدا کنید
        </h2>

        <p>
          از طریق لینک زیر می‌توانید اپلیکشن اندرویدی رفا ۲۴ را دانلود کنید.
        </p>

        <Link href="/vrp.apk">
          <FullButton
            btnText="دانلود اپ اندروید"
            icon={<FaAndroid size={16} />}
          />
        </Link>

        <FullImage
          src={mobileImage.src}
          alt="رفا ۲۴"
          width="500px"
          height="500px"
          className="mt-4"
        />
      </section>
    </section>
  );
};

export { DownloadAppContainer };
