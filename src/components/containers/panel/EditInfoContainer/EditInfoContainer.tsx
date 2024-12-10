"use client";

//base
import React, { FC, useEffect, useState } from "react";

//lib
import { Form, Formik } from "formik";

//components
import { AddSection } from "./AddSection/AddSection";

//api

import { Spin } from "antd";
import { IEditInfoValues } from "@/core/types/formikValues/panel/EditInfo/EditInfo.values";
import {
  useGetUserInfo,
  useSetUserReal,
} from "@/core/services/api/client/User.api";
import { showToast } from "@/core/utils/show-toast.utils";
import { toastTypes } from "@/core/enums/toast-types.enum";

//!refatore
const EditInfoContainer: FC = () => {
  const [initialValues, setInitialValues] = useState<IEditInfoValues>({
    name: "",
    lastName: "",
    fatherName: "",
    nationalCode: "",
    phoneNumber: "",
    gender: null,
    email: "",
    province: null,
    county: null,
    cityOrVillageId: null,
    postalCode: "",
    address: "",
    mapInput: null,
  });

  const [mapIsLoading, setMapIsLoading] = useState<boolean>(false);

  //api
  const SetMutation = useSetUserReal();
  const getMutation = useGetUserInfo();

  //getMutation
  useEffect(() => {
    getMutation.mutate();
  }, []);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const result = getMutation.data.data?.result;

      //setInitialValues
      setInitialValues({
        name: result.name ? result.name : "",
        lastName: result.lastName ? result.lastName : "",
        fatherName: result.fatherName ? result.fatherName : "",
        phoneNumber: result.phoneNumber ? result.phoneNumber : "",
        nationalCode: result.nationalCode ? result.nationalCode : "",
        gender: result.gender
          ? { value: result.gender, label: result.genderTitle }
          : null,

        email: result.email ? result.email : "",

        province: result.cityOrVillage
          ? {
              label: result.cityOrVillage.part.county.province.title,
              value: result.cityOrVillage.part.county.province.id,
            }
          : null,

        county: result.cityOrVillage
          ? {
              label: result.cityOrVillage.part.county.title,
              value: result.cityOrVillage.part.county.id,
            }
          : null,

        cityOrVillageId: result.cityOrVillage
          ? {
              label: result.cityOrVillage.title,
              value: result.cityOrVillage.id,
            }
          : null,
        address: result.address ? result.address : "",

        mapInput:
          result.lat && result.lng
            ? { lat: result.lat, lng: result.lng }
            : null,

        postalCode: result.postalCode ? result.postalCode : "",
      });

      //updating map
      setMapIsLoading(true);

      setTimeout(() => {
        setMapIsLoading(false);
      }, 400);
    }
  }, [getMutation.isSuccess]);

  //SetMutation
  const onSubmit = (values: IEditInfoValues) => {
    //!type rememind
    const payload: any = {
      name: values.name,

      lastName: values.lastName,

      phoneNumber: values.phoneNumber,

      nationalCode: values.nationalCode,

      ...(values.fatherName && { fatherName: values.fatherName }),

      ...(values.gender && { gender: values.gender.value }),

      ...(values.email && { email: values.email }),

      ...(values.province && {
        province: values.province.value,
      }),

      ...(values.county && {
        county: values.county.value,
      }),

      ...(values.cityOrVillageId && {
        CityOrVillageId: values.cityOrVillageId.value,
      }),

      ...(values.address && { address: values.address }),

      ...(values.mapInput && { Lat: values.mapInput.lat }),

      ...(values.mapInput && { Lng: values.mapInput.lng }),
    };

    //formData
    const formData = new FormData();

    Object.keys(payload).map((data) => {
      formData.append(data, payload[data]);
    });

    // if (value.ProfilePic) {
    //   for (let i = 0; i < value.ProfilePic.length; i++) {
    //     formData.append(`ProfilePic`, value.ProfilePic[i]);
    //   }
    // }

    SetMutation.mutate(payload, {
      onSuccess: () => {
        showToast([`اطلاعات شما با موفقیت ثبت شد`], toastTypes.success);
      },
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        // validationSchema={{}}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            {getMutation.isLoading ? (
              <section className="flex justify-center items-center py-20">
                <Spin size="large">
                  <p>در حال بارگذاری اطلاعات ...</p>
                </Spin>
              </section>
            ) : (
              <AddSection
                setFieldValue={setFieldValue}
                defaultCenter={initialValues.mapInput}
                mapIsLoading={mapIsLoading}
                isLoading={SetMutation.isLoading}
              />
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export { EditInfoContainer };
