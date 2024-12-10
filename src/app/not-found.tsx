//base
import { FC } from "react";
import Link from "next/link";

//componets
import { FullImage } from "@/components/common/images/FullImage/FullImage";

//assets
import notFoundImage from "assets/image/general/not-found.webp";

const NotFoundPage: FC = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <section className="text-center">
        <FullImage
          src={notFoundImage.src}
          alt="Not Found"
          className="rounded-lg"
          height="300px"
        />

        <p className="text-4xl text-sky-700 mb-10">
          404 - صفحه مورد نظر شما یافت نشد
        </p>

        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full p-3"
        >
          بازگشت به صفحه اصلی
        </Link>
      </section>
    </section>
  );
};

export default NotFoundPage;
