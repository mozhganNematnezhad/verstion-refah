"use client";

import { Form, Input } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { CiSearch } from "react-icons/ci";
import { UserLocation } from "./components/UserLocation/UserLocation";
import { FormValues } from "@/core/types/common/common.props";

const SearchHeder = () => {
  //router
  const searchParams = useSearchParams();
  const router = useRouter();
  const { push } = useRouter();
  //createQueryString
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  // const selectAfter = <UserLocation />;

  const onFinish = (values: FormValues) => {
    push(
      `/business-filter?${
        values.title &&
        values.title.length > 0 &&
        createQueryString("title", values.title)
      }`
    );
  };
  return (
    <>
      {/******************  In Mobile  ******************/}
      <section className="lg:hidden block w-full ">
        <Input
          width={"100%"}
          className="w-full "
          style={{ direction: "rtl" }}
          placeholder="  جستجو کسب و کار ها "
          onClick={() => router.replace("/search-business")}
          addonBefore={
            <CiSearch
              color={"#1777FF"}
              size={25}
              cursor={"pointer"}
              onClick={() => router.replace("/search-business")}
            />
          }
          addonAfter={<UserLocation />}
        />
      </section>

      {/******************  In Desktop  ******************/}
      <section className="lg:block hidden relative  w-[180px] sm:w-[230px] md:w-[260px] lg:w-[550px]">
        <Form onFinish={onFinish}>
          <Form.Item name="title" className="!h-fit !p-0 !m-0">
            <Input
              width={"100%"}
              className="w-full h-full"
              style={{ direction: "rtl" }}
              placeholder="  جستجو کسب و کار ها "
              addonBefore={
                <button
                  type="submit"
                  className=" !border-none  !px-3 !h-full !outline-inherit !bg-[#FAFAFA] !cursor-pointer"
                >
                  <CiSearch color={"#1777FF"} size={25} cursor={"pointer"} />
                </button>
              }
              addonAfter={<UserLocation />}
            />
          </Form.Item>
        </Form>
      </section>
    </>
  );
};
export { SearchHeder };
