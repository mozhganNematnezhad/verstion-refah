import {
  Fa500Px,
  FaFax,
  FaHome,
  FaMoneyBill,
  FaPhoneSquare,
  FaSearchLocation,
  FaToolbox,
  FaVoicemail,
} from "react-icons/fa";

export const contactUsDataList = [
  {
    label: "ارتباط با رفا ۲۴",
    value: "۰۱۱-۳۳۰۳۳۲۴۳",
    icon: <FaHome size={50} className="text-green-800" />,
  },
  {
    label: "کارشناسان مالی",
    value: "09964788013 / 09113680159",
    icon: <FaMoneyBill size={50} className="text-green-800" />,
  },
  {
    label: "کارشناس پشتیبانی",
    value: "09300863349",
    icon: <FaPhoneSquare size={50} className="text-green-800" />,
  },
  {
    label: "کارشناس فنی",
    value: "09035119830",
    icon: <FaToolbox size={50} className="text-green-800" />,
  },
  {
    label: "آدرس",
    value: "مازندران، ساری، جاده فرح‌آباد،دانشگاه پیام نور",
    icon: <FaSearchLocation size={50} className="text-green-800" />,
  },

  {
    label: "کدپستی",
    value: "۴۸۱۶۱-۱۹۲۴۲",
    icon: <Fa500Px size={50} className="text-green-800" />,
  },

  {
    label: "فکس",
    value: "۰۱۱-۳۳۰۳۳۲۴۳",
    icon: <FaFax size={50} className="text-green-800" />,
  },

  {
    label: "ایمیل",
    value: "info@refa24.ir",
    icon: <FaVoicemail size={50} className="text-green-800" />,
  },
];
