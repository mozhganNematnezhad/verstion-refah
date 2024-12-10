//lib
import {
  FaUser,
  FaEdit,
  FaCreditCard,
  FaWallet,
  FaGift,
  FaBeer,
  FaCircle,
  FaHeart,
  FaUsers,
  FaShare,
  FaList,
  FaMoneyBill,
  FaIdCard,
} from "react-icons/fa";

//types
// type MenuItem = Required<MenuProps>["items"][number];

export const sideBarNav = [
  {
    key: "/panel",
    title: "پروفایل کاربری",
    icon: <FaUser size={16} className="!text-sky-700" />,
  },
  {
    key: "/panel/edit-info",
    title: "ویرایش اطلاعات کاربری",
    icon: <FaEdit size={16} className="!text-sky-700" />,
  },
  {
    key: "/panel/membership-card",
    title: "کارت عضویت",
    icon: <FaIdCard size={16} className="!text-sky-700" />,
  },
  {
    key: "/panel/bank-cards",
    title: "کارت بانکی",
    icon: <FaCreditCard size={16} className="!text-sky-700" />,
  },
  {
    key: "/panel/wallet",
    title: "کیف پول",
    icon: <FaWallet size={16} className="!text-sky-700" />,
  },
  {
    key: "/plans-list",
    title: "پرداخت حق اشتراک",
    icon: <FaMoneyBill size={18} className="!text-sky-700" />,
  },
  {
    key: "/panel/transaction-history",
    title: "مشاهده لیست تراکنش ها",
    icon: <FaList size={16} className="!text-sky-700" />,
  },
  {
    key: "/panel/reward-bag",
    title: "کیف پاداش",
    icon: <FaGift size={16} className="!text-sky-700" />,
  },
  {
    key: "investment",
    title: "سبد سرمایه گذاری ها",
    icon: <FaBeer size={16} className="!text-sky-700" />,
    children: [
      {
        key: "/panel/investment/insurance",
        title: "سبد سرمایه گذاری بیمه",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/development",
        title: "سبد سرمایه گذاری توسعه",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/growth",
        title: "سبد سرمایه گذاری رشد",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/progress",
        title: "سبد سرمایه گذاری پیشرفت",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/participation",
        title: "سبد سرمایه گذاری مشارکت",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/justice",
        title: "سبد سرمایه گذاری عدالت",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/guide",
        title: "سبد سرمایه گذاری راهنما",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/beautiful",
        title: "سبد سرمایه گذاری زیبا",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/health",
        title: "سبد سرمایه گذاری سلامت",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/strategic",
        title: "سبد سرمایه گذاری راهبردی",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
      {
        key: "/panel/investment/innovation",
        title: "سبد سرمایه گذاری نوآوری",
        icon: <FaCircle size={10} className="!text-sky-700" />,
      },
    ],
  },
  {
    key: "/panel/favorites",
    title: "علاقه مندی ها",
    icon: <FaHeart size={16} className="!text-sky-700" />,
  },
  {
    key: "/panel/my-membership",
    title: "عضویت من",
    icon: <FaUsers size={16} className="!text-sky-700" />,
  },
];

//sideBarNavDetail
export const sideBarNavDetail = [];
