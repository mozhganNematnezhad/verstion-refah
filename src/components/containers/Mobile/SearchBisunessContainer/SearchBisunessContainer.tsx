"use client";
import { Button } from "antd";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";
import { NormalSearch } from "./components/NormalSearch/NormalSearch";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";

interface IpropTypes {
  setSerchView?: (value: boolean) => void;
}

const SearchBisunessContainer: FC<IpropTypes> = ({ setSerchView }) => {
  const [initialValues, setinitialValues] = useState({
    title: "",
  });
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
  //!type rememind

  const onSubmit: any = (values: any) => {
    // const payload: any = {

    //   ...(value.title && { title: value.title }),

    //   ...(value.Call && { Call: value.Call }),
    //   ...(value.InPerson && { InPerson: value.InPerson }),
    //   ...(value.Online && { Online: value.Online }),
    //   ...(value.RangeDiscount && { RangeDiscount: value.RangeDiscount }),
    // };

    push(
      `/business-filter?${
        values.title && createQueryString("title", values.title)
      } 
      `
    );
    setSerchView && setSerchView(false);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ setFieldValue, resetForm }) => (
          <Form>
            <button
              className="p-0 bg-none border-none"
              onClick={
                setSerchView ? () => setSerchView(false) : () => router.back()
              }
            >
              <IoClose size={30} className="cursor-pointer" color={"#B91C1B"} />
            </button>

            <NormalSearch />
            {/* <AdvanceSearchs /> */}

            <div className="flex items-center justify-center   gap-3 mt-7">
              <FullButton
                btnText="جستجو"
                isLoading={false}
                isClearAble
                clearOnClick={() => resetForm()}
                className="!w-full !h-full !px-[4rem]"
              />

              {/* <div
                className="cursor-pointer border w-1/2 py-3 px-2 rounded-md text-[#0D90B3] flex items-center justify-center gap-3"
                onClick={() => resetForm()}
              >
                پاک کردن جستجو
              </div> */}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { SearchBisunessContainer };
