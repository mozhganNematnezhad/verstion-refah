"use client";

//base
import React, { FC, useEffect, useState } from "react";

//components

import { Button, Spin } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Form, Formik } from "formik";

import { IBusinessFilterPayload } from "@/core/types/payload/BusinessFilter";
import { useGlobalContext } from "@/core/context/GlobalContext";
import { IGetBusinessesByFilterResult } from "@/core/types/response/Business.res";
import { useGetBusinessesByFilter } from "@/core/services/api/client/Business.api";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { BusinessList } from "./components/BusinessList/BusinessList";

const BusinessFilterContainer: FC = () => {
  const [initialValues] = useState<IBusinessFilterPayload>({
    title: "",
    supplyInPerson: false,
    supplyByPhone: false,
    supplyByInternet: false,
    RangeDiscount: [0, 100],
    insideTitle: "",
  });

  const { userLocation } = useGlobalContext();

  const [businessListData, setBusinessListData] = useState<
    IGetBusinessesByFilterResult[]
  >([]);
  const [params, setParams] = useState<string[] | undefined>(undefined);
  const [title, settitle] = useState<string[] | undefined>(undefined);

  //router
  const searchParams = useSearchParams();

  //set search params
  useEffect(() => {
    setParams(searchParams.get("category")?.split("&"));
    settitle(searchParams.get("title")?.split("&"));
  }, [searchParams.get("category"), searchParams.get("title")]);

  //api
  const searchMutation = useGetBusinessesByFilter();

  //first call api base on params
  useEffect(() => {
    searchMutation.mutate({
      page: 1,
      pageSize: 100,
      ...(params && { categoryId: Number(params[0]) }),
      ...(title && { title: title[0] }),
      ...(userLocation?.provinces?.value && {
        provinceId: userLocation.provinces?.value,
      }),

      ...(userLocation?.counties?.value && {
        countyId: userLocation.counties?.value,
      }),
    });
  }, [params, title]);

  useEffect(() => {
    if (searchMutation.isSuccess) {
      const result = searchMutation.data.data.result;
      setBusinessListData(result.items);
    }
  }, [searchMutation.isSuccess]);

  // searching base on advance filters

  const onSubmit = (values: IBusinessFilterPayload) => {
    const payload = {
      page: 1,
      pageSize: 100,
      ...(params && { categoryId: Number(params[0]) }),
      // ...(title && { title: title[0] }),
      ...(values.insideTitle && { title: values.insideTitle }),

      ...(values.RangeDiscount && { forDiscount: values.RangeDiscount[0] }),
      ...(values.RangeDiscount && { toDiscount: values.RangeDiscount[1] }),

      ...(values.supplyInPerson && { supplyInPerson: values.supplyInPerson }),

      ...(values.supplyByPhone && { supplyByPhone: values.supplyByPhone }),
      ...(values.supplyByInternet && {
        supplyByInternet: values.supplyByInternet,
      }),

      // cityOrVillageId: 0,

      ...(userLocation?.provinces?.value && {
        provinceId: userLocation.provinces.value,
      }),

      ...(userLocation?.counties?.value && {
        countyId: userLocation.counties.value,
      }),
    };

    searchMutation.mutate(payload);
  };

  return (
    <section className="container mx-auto px-6 py-6">
      <section className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <section className="lg:col-span-2">
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={onSubmit}
          >
            {({ resetForm }) => (
              <Form>
                <FilterSection
                  paramsPersian={params && params[1]}
                  title={title}
                  resetForm={resetForm}
                />
              </Form>
            )}
          </Formik>
        </section>

        <section className="bg-white rounded-lg p-4 lg:col-span-5 min-h-[350px]">
          {searchMutation.isLoading ? (
            <section className="flex justify-center mt-20">
              <Spin size="large">
                <p>در حال بارگذاری ...</p>
              </Spin>
            </section>
          ) : (
            <BusinessList businessListData={businessListData} />
          )}
        </section>
      </section>
    </section>
  );
};

export { BusinessFilterContainer };
