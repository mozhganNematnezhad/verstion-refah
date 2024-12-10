//base
import { FC } from "react";
import { TopHeader } from "./components/TopHeader/TopHeader";
import { contactUsDataList } from "@/db/contactUs/contactUs.data";

//components

//core

const ContactUsContainer: FC = (): JSX.Element => {
  return (
    <>
      {/* ======= TopHeader ====== */}
      <TopHeader />

      {/* ======= bottom section ====== */}
      <div className="relative z-10 md:bottom-14 bg-slate-100 w-[85%] mx-auto shadow-lg p-4 md:p-6">
        <section className="h-fit bg-white py-10 px-4 rounded-lg">
          <h1 className="text-center text-2xl font-extrabold">
            ارتباط با رفا ۲۴
          </h1>

          <p className="text-center mt-2">
            درصورت تمایل برای همکاری با ما می توانید از طریق راه های ارتباطی زیر
            با ما در ارتباط باشید
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {contactUsDataList.map((item, key) => (
            <section
              key={key}
              className="bg-white shadow-lg flex justify-between items-center
               gap-4 py-6 px-10 rounded-lg"
            >
              <div className="flex justify-start items-start flex-col gap-2">
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
                  {item.label}
                </h2>
                <span className="text-cyan-600 text-center" dir="ltr">
                  {item.value}
                </span>
              </div>

              <div>{item.icon}</div>
            </section>
          ))}
        </section>
      </div>
    </>
  );
};

export { ContactUsContainer };
