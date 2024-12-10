//base
import { ReactNode } from "react";
import type { Metadata } from "next";

//components
import { CoreProvider } from "@/components/provider/CoreProvider/CoreProvider";

//metadata
export const metadata: Metadata = {
  icons: "/logo.png",
  title: "شهرک رفا ۲۴ | بهترین تخفیف برای هر خرید",
  description: "شهرک رفا ۲۴ | بهترین تخفیف برای هر خرید",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  );
}
