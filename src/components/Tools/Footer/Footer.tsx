//base
import { FC } from "react";
import Link from "next/link";

//lib
import { FaCircle } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="z-2000 bg-sky-950 text-white">
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <h1 className="text-lg  my-4">شهرک رفا ۲۴</h1>
            <p className="lg:w-[80%]">
              شهرک ما با افتخار به نام رفا ۲۴، شناخته می‌شود، یک فضای الکترونیکی
              که در تأمین بهترین محصولات و خدمات به مشتریان عزیز متمرکز است.
            </p>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold my-4">خدمات ما</h3>
            <section className="space-y-2">
              <Link href="/cooperation-us" className="flex gap-2">
                <FaCircle size={10} />
                <span>همکاری با ما</span>
              </Link>

              <Link href="/news" className="flex gap-2">
                <FaCircle size={10} />
                <span>اخبار و اطلاعیه ها</span>
              </Link>

              <Link href="/contact-us" className="flex gap-2">
                <FaCircle size={10} />
                <span>تماس با ما</span>
              </Link>
            </section>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold my-4">تماس با ما</h3>
            <section className="text-gray-400">
              <div className="flex">
                <span>کارشناسان مالی : </span>
                <span>09964788013 / 09113680159</span>
              </div>

              <div className="flex">
                <span>کارشناس پشتیبانی : </span>
                <span>09300863349</span>
              </div>

              <div className="flex">
                <span>کارشناس فنی : </span>
                <span>09035119830</span>
              </div>

              <div className="mb-4 lg:m-0">
                <span>مازندران، ساری، جاده فرح‌آباد،دانشگاه پیام نور</span>
              </div>
            </section>
          </div>

          <a
            referrerPolicy="origin"
            target="_blank"
            href="https://trustseal.enamad.ir/?id=457160&Code=Ua8gWmh6S4ArTjKAfmIT60rX1z1lLJNz"
          >
            <img
              className="border-white w-[100px] h-[100px]"
              referrerPolicy="origin"
              src="https://trustseal.enamad.ir/logo.aspx?id=457160&Code=Ua8gWmh6S4ArTjKAfmIT60rX1z1lLJNz"
              alt=""
              style={{ cursor: "pointer" }}
              data-code="Ua8gWmh6S4ArTjKAfmIT60rX1z1lLJNz"
            />
          </a>
        </div>
      </div>
      <div className=" bg-sky-900 py-4">
        <div className="container mx-auto text-center">
          <a href="https://zenova.ir" target="_blank" className="text-gray-400">
            <span>
              &copy; {new Date().getFullYear()} | تمامی حقوق محفوظ رفا ۲۴ است.
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
