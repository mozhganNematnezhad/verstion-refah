//base
import { FC } from "react";

//lib
import { Alert } from "antd";

const TipSection: FC = () => {
  return (
    <section className="bg-white rounded-lg p-9 mt-6">
      <Alert
        type="info"
        message="در صورت بروز هر گونه مشکل یا سوال، خوشحال می‌شویم که با آن را درمیان بگذارید."
        className="text-center"
      />

      <ul className="list-disc list-inside pl-4 mt-8 space-y-8">
        <li>
          لطفاً اطمینان حاصل کنید که اطلاعات وارد شده صحیح و کامل باشند تا
          بتوانیم به سوال یا مشکل شما پاسخ دهیم.
        </li>
        <li>
          پیشنهاد می‌شود صفحه را مجدداً بارگذاری کنید و یا از مرورگر دیگری
          استفاده کنید.
        </li>
        <li>
          در صورت ادامه مشکل، لطفاً از طریق پشتیبانی فنی با ما تماس بگیرید.
          اطلاعات تماس در صفحه ارتباط با ما قابل دسترسی است.
        </li>
        <li>
          از قسمت "سوالات متداول" نیز می‌توانید به پاسخ‌های بسیاری از سوالات خود
          دست پیدا کنید.
        </li>
      </ul>
    </section>
  );
};

export { TipSection };
