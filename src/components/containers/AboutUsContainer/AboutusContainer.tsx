//base
import { FC } from "react";

//lib
import { FaCheckDouble } from "react-icons/fa";

//component
import { MapSection } from "./components/MapSection/MapSection";
import { GallerySection } from "./components/GallerySection/GallerySection";

const AboutusContainer: FC = (): JSX.Element => {
  return (
    <>
      {/* ======= map ======== */}
      <MapSection />

      {/* ======= description ======== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto py-16 dark:bg-[#182030]">
        <div>
          <h1 className="font-bold text-xl pl-6 flex gap-4">
            <FaCheckDouble size={20} className="text-green-500" />
            <span className={"dark:text-white"}>درباره رفا ۲۴</span>
          </h1>

          <p className="text-justify mt-4 dark:text-[#ccc7c7]">
            شهرک ما با افتخار به نام رفا ۲۴، شناخته می‌شود، یک فضای الکترونیکی
            که در تأمین بهترین محصولات و خدمات به مشتریان عزیز متمرکز است.
          </p>

          <h2 className="font-bold text-xl pl-6 flex gap-4 mt-8">
            <FaCheckDouble size={20} className="text-green-500" />
            <span className={"dark:text-white"}>ماموریت رفا ۲۴</span>
          </h2>

          <p className="text-justify mt-4 dark:text-[#ccc7c7]">
            ماموریت ما در رفا ۲۴ به ارتقاء کسب‌وکارهای مشتریان از طریق توسعه
            نرم‌افزارهای اختصاصی و متنوع می‌پردازد. ما بر ایجاد محصولات و خدماتی
            با کیفیت بالا تمرکز داریم که به مشتریان امکان دسترسی به فرصت‌های
            جدید و بهینه‌سازی فرآیندهای کسب‌وکار خود را فراهم می‌کنند.
          </p>

          <h2 className="font-bold text-xl pl-6 flex gap-4 mt-8">
            <FaCheckDouble size={20} className="text-green-500" />
            <span className={"dark:text-white"}>تخصص رفا ۲۴</span>
          </h2>

          <p className="text-justify mt-4 dark:text-[#ccc7c7]">
            تخصص ما در رفا ۲۴ در توسعه نرم‌افزارهای متنوع از جمله نرم‌افزارهای
            موبایل، وب، اپلیکیشن‌های شخصی، اینترنت اشیاء (IoT) و راهکارهای ابری
            است. تیم ما از مهندسان و توسعه‌دهندگان ماهری تشکیل شده است که با
            استفاده از فناوری‌های روز دنیا و روش‌های توسعه مدرن، به مشتریان کمک
            می‌کنند تا در مسیر رشد و توسعه خود بهترین نتایج را بدست آورند.
          </p>

          <h2 className="font-bold text-xl pl-6 flex gap-4 mt-8">
            <FaCheckDouble size={20} className="text-green-500" />
            <span className={"dark:text-white"}>ارزش‌های رفا ۲۴</span>
          </h2>

          <p className="text-justify mt-4 dark:text-[#ccc7c7]">
            در رفا ۲۴، ارزش‌های مشترکی به عنوان ستون‌های اصلی فعالیت‌های ما
            معرفی می‌شوند: کیفیت: تعهد ما به ارائه نرم‌افزارهای با کیفیت بالا و
            عملکرد بی‌نظیر. نوآوری: استفاده از طراحی به‌روز و فناوری‌های نوین
            برای ایجاد محصولات منحصربه‌فرد. مشتری مداری: قرار دادن مشتریان در
            قلب کسب‌وکار و اولویت دادن به نیازها و خواسته‌های آنها.
          </p>

          <h2 className="font-bold text-xl pl-6 flex gap-4 mt-8">
            <FaCheckDouble size={20} className="text-green-500" />
            <span className={"dark:text-white"}>
              تعهد به امنیت و حریم خصوصی
            </span>
          </h2>

          <p className="text-justify mt-4 dark:text-[#ccc7c7]">
            ما در رفا ۲۴ به حفظ امنیت اطلاعات مشتریان و احترام به حریم خصوصی
            آنها تعهد داریم. به‌عنوان یک شرکت نرم‌افزاری، ما تدابیر امنیتی دقیقی
            را در سیستم‌های خود اعمال می‌کنیم تا اطلاعات حساس مشتریان را محافظت
            کنیم.
          </p>
        </div>

        {/* ======= galley ======== */}
        <GallerySection />
      </section>
    </>
  );
};

export { AboutusContainer };
