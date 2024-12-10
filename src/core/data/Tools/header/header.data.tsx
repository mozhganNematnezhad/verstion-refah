import { ReactNode } from "react";
import {
  FaHome,
  FaPhone,
  FaBusinessTime,
  FaRegNewspaper,
  FaTeamspeak,
  FaPhoneAlt,
} from "react-icons/fa";

export interface InavList {
  title: string;
  href: string;
  exact?: boolean;
  icons: ReactNode;
  MobileNav?: boolean;
}

export const navigationBarList: InavList[] = [
  {
    title: "صفحه اصلی",
    href: "/",
    exact: true,
    icons: <FaHome size={25} className="text-sky-700" />,
  },
  {
    title: "شهرک",
    href: "/business",
    exact: false,
    icons: <FaBusinessTime size={25} className="text-sky-700" />,
  },
  {
    title: "همکاری با ما",
    href: "/cooperation-us",
    exact: true,
    icons: <FaPhone size={25} className="text-sky-700" />,
  },
  {
    title: "اخبار و اطلاعیه ها",
    href: "/news",
    icons: <FaRegNewspaper size={25} className="text-sky-700" />,
  },
  {
    title: "درباره ما",
    href: "/about-us",
    exact: true,
    icons: <FaTeamspeak size={25} className="text-sky-700" />,
  },
  {
    title: "تماس با ما",
    href: "/contact-us",
    exact: true,
    icons: <FaPhoneAlt size={25} className="text-sky-700" />,
  },
  // {
  //   title: "دانلود اپلیکشن",
  //   href: "/download-app",
  //   exact: true,
  //   icons: <FaAndroid size={25} className="text-sky-700" />,
  //   MobileNav: true,
  // },
];
