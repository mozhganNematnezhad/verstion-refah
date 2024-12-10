//assets
import { IServiceProps } from "@/core/types/props/landing/services.props";
import {
  FaShoppingBasket,
  FaMoneyBill,
  FaFileInvoice,
  FaWarehouse,
  FaGraduationCap,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

// servicesList
export const servicesList: IServiceProps[] = [
  {
    title: "شهرک",
    icon: <FaShoppingBasket size={35} className="text-white" />,
    text: (
      <>
        <p className="mb-4 text-justify">
          سکوی شهرک VRP کالا و خدمات سیستمی است که با رویکرد وارسازی از نوع
          سرمایه گذاری سهامی عمل می‌کند. این سیستم توسعه فروش کالا و خدمات با
          اکانت مشتری را پیگیری می‌کند. مشتری با کمک یک واسط، زیرساخت‌های لازم
          برای عرضه‌کننده کالا و خدمات را تامین می‌کند. به جای انتظار مطلوبیت
          نهایی با ویژگی‌های زیر:
        </p>

        <ul className="list-inside list-decimal text-justify">
          <li>
            کمیت داشتن که شامل فراهم بودن، در دسترس بودن، و جامع بودن است.
          </li>
          <li>کیفیت داشتن</li>
          <li>ارزان بودن</li>
          <li>سرعت دست‌یابی به خدمات</li>
        </ul>
      </>
    ),
    link: "/business",
    backGround: "#0ea5e9",
  },
  {
    title: "حسابداری",
    icon: <FaMoneyBill size={35} className="text-white" />,
    text: (
      <>
        <h1 className="mb-4">
          افزایش عملکرد سازمانی با نرم افزار حسابداری (رفا ۲۴)
        </h1>

        <p className="mb-4 text-justify">
          زمانی که شما یک شرکت بازرگانی را راه اندازی نموده، تمام تمرکز خود را
          بر روی پیشرفت و گسترش آن قرار می‌دهید و سعی در پرهیز از اموری دارید که
          همچون ثبت موارد مالی ذهن شما را مشغول نموده و زمان زیادی را به خود
          اختصاص می‌دهد. در صورتی که مجموعه شما دارای تعدادی پرسنل باشد،
          می‌بایست محاسبه حقوق و دستمزد آنان را نیز به امور مالی خود اضافه
          نمایید. محاسبات مربوط به حقوق و دستمزد پرسنل با توجه به ارتباطاتی که
          با مالیات و بیمه دارد از زمان برترین امور مالی محسوب می‌شود. نرم افزار
          حسابداری جامع رفا ۲۴، شامل بسته بازرگانی بعلاوه سیستم حقوق و دستمزد
          می‌باشد.
        </p>

        <ol className="list-inside list-decimal mb-4">
          <li>دارای تفصیل شناوری</li>
          <li>صدور احکام و فیش های حقوقی</li>
          <li>گزارش لیست بیمه</li>
          <li>صدور اسناد مرجع حسابداری برای تحریر دفاتر قانونی</li>
          <li>
            اولین نرم افزار مالی یکپارچه با قابلیت استفاده هم زمان در محیط
            ویندوز، وب و موبایل
          </li>
          <li>سرعت و امنیت بالای نرم افزار</li>
          <li>
            سادگی در استفاده و نیاز به آموزش کمتر – پشتیبانی آنلاین – (رعایت
            قواعد کاربرد پذیری UX)
          </li>
          <li>دارای قفل نرم افزاری با قابلیت پارک قفل و نصب مجدد توسط مشتری</li>
        </ol>
      </>
    ),
    link: "https://zenova.ir/product/3",
    backGround: "#0d9488",
  },

  {
    title: "آموزش",
    icon: <FaGraduationCap size={35} className="text-white" />,
    text: (
      <>
        <p className="text-justify">
          با توجه به فلسفه خدمات دهی و خدمات گیری در شهرک، بخش آموزش به منظور
          توانمند سازی اعضای شهرک، بخصوص عرضه کنندگان کالا و خدمات فعال گردید.
          با توجه به تنوع آموزشگاههای فنی و حرفه‌ای آزاد، همه نوع سرفصل آموزش و
          مهارت لازم در این شهرک با تخفیف ۲۰ درصد نسبت به تعرفه سازمان فنی و
          حرفه‌ای به تفکیک شهرستانهای محل سکونت با بهره‌مندی از آموزشگاههای
          منتخب و با صلاحیت و همچنین اساتید برجسته و صاحب‌نام مهیا شده است.
        </p>
      </>
    ),
    link: "https://er.devzenova.ir/",
    backGround: "#22c55e",
  },

  {
    title: "انبارداری",
    icon: <FaWarehouse size={35} className="text-white" />,
    text: (
      <section className="text-justify">
        <p>
          حداکثری کردن کارایی انبار با حسابدار جامع زنجیره نوگرایی آینده (رفا
          ۲۴) زمانی که شما یک شرکت بازرگانی را راه اندازی نموده تمام تمرکز خود
          را بر روی پیشرفت و گسترش آن قرار می‌دهید و سعی در پرهیز از اموری دارید
          که همچون ثبت موارد مالی ذهن شما را مشغول نموده و زمان زیادی را به خود
          اختصاص می‌دهد. در صورتی که مجموعه شما دارای تعدادی پرسنل باشد می‌بایست
          محاسبه حقوق و دستمزد آنان را نیز به امور مالی خود اضافه نمایید.
          محاسبات مربوط به حقوق و دستمزد پرسنل با توجه به ارتباطاتی که با مالیات
          و بیمه دارد از زمان برترین امور مالی محسوب می‌شود.
        </p>
        <p className="mt-4">
          نرم افزار حسابداری جامع قیاس، شامل بسته بازرگانی بعلاوه سیستم حقوق و
          دستمزد می‌باشد.
        </p>
      </section>
    ),
    link: "https://zenova.ir/product/2",
    backGround: "#0077b6",
  },

  {
    title: "صدور فاکتور",
    icon: <FaFileInvoice size={35} className="text-white" />,
    text: (
      <>
        <p className="text-justify">
          صدور فاکتور رفا۲۴، نرم افزار صدور فاکتور به عنوان یک ابزار کاربردی
          برای کسب و کارها و کسانی که نیاز به صدور فاکتورها و رسیدهای مالی
          دارند، دارای مجموعه‌ای از ویژگی‌ها و قابلیت‌هاست که برای اداره مالی و
          حسابداری کمک کننده و کارآمد هستند. در زیر ویژگی‌های اصلی نرم‌افزار
          صدور فاکتور خلاصه آورده شده است:
        </p>

        <ul className="list-inside list-disc mb-4">
          <li>نرم افزار واسط سامانه مودیان زنـوا</li>
          <li>ایجاد اتومات کلید های عمومی خصوصی و CSR</li>
          <li>سادگی سیستم</li>
          <li>تعریف مشتری به تعداد نامحدود</li>
          <li>تعریف کالا به تعداد نامحدود</li>
          <li>صدور فاکتور های بی نهایت</li>
          <li>صدور فاکتور های شخصی سازی شده</li>
          <li>ارسال صورت حساب به سامانه مودیان درلحظه</li>
          <li>انتقال سوابق و فاکتور از دیگر سیستم ها به سامانه واسط</li>
          <li>قابلیت رویت مشتری از هر نوع فاکتور در بی نهایت شرکت</li>
        </ul>
      </>
    ),
    link: "https://zenova.ir/product/1",
    backGround: "#f09242",
  },

  {
    title: "راهبردی",
    icon: <FaCogs size={35} className="text-white" />,
    text: (
      <>
        <p className="text-justify">
          بدون شک موفقیت هر سازمانی در گروه برنامه و برنامه ریزی است. این برنامه
          با سه سناریوی دلخواه هم مدل SWOT، هم مدل IPOCC و هم مدل سناریو نویسی
          توسعه داده شده هست. برنامه راهبردی نه تنها در قالب تئوری بلکه در قالب
          برنامه عملیاتی و حتی پایش و ارزشیابی طراحی و تدوین شده هست. ما جهت
          توانمند سازی از مرحله تئوری تا عمل در کنار شما هستیم.
        </p>
      </>
    ),
    link: "https://zenova.ir/product/11",
    backGround: "#808F87",
  },

  {
    title: "بهره‌وری ",
    icon: <FaChartLine size={35} className="text-white" />,
    text: (
      <>
        <p className="text-justify">
          پیتر سنگه معتقد هست سازمانی که بهره‌ور نیست توانایی رقابت ندارد و باید
          بمیرد چرا که بزودی حذف می‌گردد. با توجه به این اهمیت، جهت ایجاد
          بهره‌وری در سازمان مدل ایرانی شهامت طراحی و تدوین شده است. این مدل
          بسیار ساده و قابل فهم برای کلیه سطوح سازمانی حتی در سطح فردی و گروهی
          است.
        </p>
      </>
    ),
    link: "https://zenova.ir/product/12",
    backGround: "#F87060",
  },

  {
    title: "امور بیمه",
    icon: <FaShieldAlt size={35} className="text-white" />,
    text: (
      <>
        <div className="container mx-auto p-4">
          <h2 className="font-bold mb-4">کارگزاری بیمه برخط</h2>

          <p className="text-right text-lg mb-4">
            الف. چرا دفاتر نمایندگی شرکت های مختلف بیمه در پلتفرم رفا۲۴ عضو شوند
            و بیمه نامه صادر کنند؟ به عبارت دیگر چه فایده ای برای آنها دارد؟
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              پلتفرم رفاه ۲۴ در طرح توسعه شامل ۳۰ برنامه هست که به مرور توسعه
              داده می‌شود تا سبک زندگی در قالب شهرک تکمیل گردد.
              <ul className="list-disc list-inside">
                <li>
                  اولین برنامه از این ۳۰ برنامه طرح اتوماسیون سازی کسب و کارها
                  هست که خود به ۵ صورت ارائه و انجام می‌شود.
                  <ol className="list-lower-alpha list-inside mx-4">
                    <li>در قالب شهرک</li>
                    <li>در قالب باشگاه</li>
                    <li>در قالب بازار</li>
                    <li>در قالب کمپین</li>
                    <li>در قالب پایگاه</li>
                  </ol>
                </li>
              </ul>
            </li>
          </ol>
          <p className="text-right text-lg mb-4">
            حالا در مرحله استقرار شهرک اولین فاز و اولین صنفی که دعوت می‌شوند تا
            در شهرک عضو شوند و خدمت ارائه دهند و درآمدشان افزایش پیدا کنه طرح
            کارگزاری بیمه برخط هست. در اینخصوص بر می‌گردیم به پاسخ سوال.
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              اولین چرا اینکه تعداد مشتریانش افزایش پیدا می‌کند و در نتیجه مشتری
              بیشتر فروش بیشتر پس دریافت حق صدور بیمه نامه بیشتر
            </li>
            <li>
              بیمه گر به ازای هر ۵۰۰ هزار تومان بیمه بفروشند یک امتیاز کسب
              می‌کنند در نتیجه در ۱۲ صندوق سرمایه گذاری شهرک ۱۲ امتیاز کسب
              می‌کند
            </li>
            <li>
              از ۲۵ نوع امکانات شهرک از جمله ۱۲ نوع نرم افزار مالی بازرگانی
              رایگان استفاده می‌کنند ولی در عوضش فقط هفته ۱۷۵ هزار تومان به شرکت
              پرداخت می‌کنند
            </li>
          </ol>
          <p className="text-right text-lg mb-4">
            ب. مشتریان یا همان بیمه گذار چرا از این پلتفرم بیمه بخرد برایش چه
            فاید یا سودی دارد؟
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              به ازای هر ۱۰۰ هزارتومان بیمه ای که می‌خرد یک امتیاز پس در مجموع
              ۱۲ امتیاز به ۱۰۰ هزار تومان در ۱۲ صندوق سرمایه گذاری بهره‌مند
              می‌گردد
            </li>
            <li>می‌تواند بیمه را در قالب گروهی در شهرک ارزانتر بخرد</li>
            <li>
              از مجموع درآمد شهرک در شکل توسعه یافته اش یک درصد به بیمه گذار
              پورسانت بیمه پرداخت می‌گردد
            </li>
            <li>
              در دو نوبت در سال شانس بهره‌مندی از قرعه کشی های شگفت انگیز پیدا
              می‌کند
            </li>
          </ol>
          <p className="text-right text-lg mb-4">ج. فایده برای سازمانها</p>
          <ol className="list-decimal list-inside mb-4">
            <li>قراردادهای گروهی و تخیفات ویژه در قبال گروه در هر نوع بیمه</li>
            <li>بهره‌مندی نیروهایشان از ۱۲ سود صندوق سرمایه گذاری</li>
            <li>بهره‌مندی نیروها از یارانه بیمه مخصوص عضویت در شهرک</li>
          </ol>
        </div>
      </>
    ),
    link: " https://bimhgozar.ir/",
    btnText: "ورود به بیمه برخط",
    backGround: "#c405f1",
  },
];