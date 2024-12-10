"use client";

import { toastTypes } from "@/core/enums/toast-types.enum";
import { showToast } from "@/core/utils/show-toast.utils";
import { FC } from "react";
import { FaFileDownload } from "react-icons/fa";

interface IPropType {
  text: string;
  color?: string;
  fileUrl: string;
  fileName: string;
}

const DownloadBtn: FC<IPropType> = ({ text, color, fileUrl, fileName }) => {
  //handelDownloadFile
  const handelDownloadFile = () => {
    try {
      window.open(fileUrl, "_blank");
      showToast(["با موفقیت دانلود شد"], toastTypes.success);
    } catch (error) {
      showToast(["مشکلی پیش آمده است"], toastTypes.error);
    }
  };

  return (
    <section
      onClick={handelDownloadFile}
      className={`flex justify-center items-center gap-2 border border-dashed border-sky-700
        rounded text-sky-700 font-bold cursor-pointer p-4 my-2 w-full`}
    >
      <FaFileDownload size={25} color={"#8fc2fd"} />
      <span className="">{text}</span>
    </section>
  );
};

export { DownloadBtn };
