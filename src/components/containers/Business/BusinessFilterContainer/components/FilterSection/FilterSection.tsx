"use client";

import { Button } from "antd";
import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { AdvanceSearchs } from "./AdvanceSearchs/AdvanceSearchs";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";

interface IPropType {
  paramsPersian: string | undefined;
  title: string[] | undefined;
  resetForm: () => void;
}

const FilterSection: FC<IPropType> = ({ paramsPersian, title, resetForm }) => {
  return (
    <section className="bg-white sticky top-[145px] rounded-lg p-4">
      <span className="flex items-center justify-between gap-1">
        <CiSearch color={"#1777FF"} size={25} cursor={"pointer"} />
        <TextInput
          name="insideTitle"
          placeholder={paramsPersian || (title && title[0])}
          customPlaceHolder
        />
      </span>
      <AdvanceSearchs />
      <div className="flex items-center justify-between   gap-3 mt-7">
        {/* //!component this */}

        <button type="submit" className="!w-1/2 !h-full ">
          <Button
            type="primary"
            className="!h-full !w-full   !py-3 !px-2 !text-sm !bg-sky-600 hover:!bg-sky-500"
            loading={false}
          >
            اعمال فیلتر
          </Button>
        </button>
        {/* //!component this */}
        <div
          className=" cursor-pointer border w-1/2  py-3 px-2 rounded-md text-[#0D90B3] flex items-center justify-center gap-3"
          onClick={() => resetForm()}
        >
          پاک کردن فیلتر
        </div>
      </div>
    </section>
  );
};

export { FilterSection };
