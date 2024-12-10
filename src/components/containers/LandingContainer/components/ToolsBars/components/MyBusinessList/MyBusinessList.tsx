"use client";

//base
import { FC, useEffect, useState } from "react";

//lib
import { Spin } from "antd";
import { FaBuilding } from "react-icons/fa";
import {
  IGetBusinessesRes,
  IGetMyBusinessResult,
} from "@/core/types/response/Business.res";
import { useGetMyBusiness } from "@/core/services/api/client/Business.api";
import { projectSetting } from "@/configs/setting.cf";

//core

interface IPropType {
  refetch: boolean;
}

const MyBusinessList: FC<IPropType> = ({ refetch }) => {
  const [result, setResult] = useState<IGetBusinessesRes[]>([]);

  //api
  const getMutation = useGetMyBusiness();

  //getMyBusiness
  useEffect(() => {
    getMutation.mutate({
      page: 1,
      pageSize: 3,
    });
  }, [refetch]);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const result: IGetMyBusinessResult = getMutation.data.data.result;
      setResult(result.items);
    }
  }, [getMutation.isSuccess]);

  return (
    <>
      <section
        className="w-full bg-teal-600 text-white text-center gap-2 rounded-lg 
          shadow shadow-bg-teal-500 px-2 py-2 hover:scale-105 transition-all duration-300"
      >
        {getMutation.isLoading ? (
          <section className="flex justify-center items-center w-full py-12">
            <Spin size="default" />
          </section>
        ) : (
          <section className="grid grid-cols-3 gap-2">
            {result.map((item, key) => (
              <a
                key={key}
                href={projectSetting.link.seller}
                target={window.innerWidth > 500 ? "_blank" : "_parent"}
                className="bg-teal-500 text-white text-center flex flex-col 
                  justify-center items-center gap-2 rounded-lg shadow shadow-bg-teal-500 px-4 py-5
                  hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <FaBuilding size={20} className="text-white" />

                <p className="font-bold">
                  {item?.title?.length > 20
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </p>

                <span className="border-dashed border bg-sky-400 text-white text-[9px] rounded-lg py-1 px-2">
                  {item.statusTitle}
                </span>
              </a>
            ))}
          </section>
        )}
      </section>
    </>
  );
};

export { MyBusinessList };
