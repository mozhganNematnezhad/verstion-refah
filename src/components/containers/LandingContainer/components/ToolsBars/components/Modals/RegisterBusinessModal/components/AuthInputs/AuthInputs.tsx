"use client";

import React, { FC, useEffect, useState } from "react";

import { Button, Col, Divider, Row } from "antd";
import { FaEdit } from "react-icons/fa";
import { useGetBusinessCategoriesForDropDown } from "@/core/services/api/client/BusinessCategory.api"; //!
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { FullSelectOption } from "@/components/common/Form/FullSelectOption/FullSelectOption";
import { Toggle } from "@/components/common/Form/Toggle/Toggle";
import { LocationComponent } from "@/components/common/Form/LocationComponent/LocationComponent";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { MemnershipTypeData } from "@/core/data/MemnershipType/MemnershipType.data";

//!type rememind
interface IPropType {
  setFieldValue: (name: string, value: any) => void; //!
  isLoading: boolean;
}

const AuthInputs: FC<IPropType> = ({ setFieldValue, isLoading }) => {
  const [categoryList, setCategoryList] = useState<any>([]);

  //api
  const getMutation = useGetBusinessCategoriesForDropDown();

  //getBusinessCategories
  useEffect(() => {
    getMutation.mutate();
  }, []);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const result = getMutation.data.data.result;

      setCategoryList(
        //!type rememind
        result.map((e: any) => ({
          label: e.title,
          value: e.id,
        }))
      );
    }
  }, [getMutation.isSuccess]);

  return (
    <>
      <Row gutter={[16, 16]} className="mt-6">
        <Col xs={24} md={12} lg={8}>
          <FullSelectOption
            options={MemnershipTypeData}
            name="membershipType"
            labelText="نوع عضویت"
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="title"
            labelText="عنوان کسب و کار"
            clearable
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <FullSelectOption
            options={categoryList}
            isLoading={getMutation.isLoading}
            name="category"
            labelText="دسته بندی کسب و کار"
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="licenseNumber"
            labelText="پروانه کسب یا شناسه اقتصادی"
            clearable
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="domainName"
            labelText="دامنه"
            clearable
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="postalCode"
            labelText="کد اقتصادی"
            clearable
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8} className="mt-6">
          <Toggle name="supplyByPhone" labelText="بخش تلفنی" forSearching />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-4">
        <Divider orientation="center" plain dashed>
          آدرس محل مورد تقاضا
        </Divider>

        <Col xs={24}>
          <LocationComponent setFieldValue={setFieldValue} />
        </Col>
      </Row>

      <Row className="mt-4">
        <FullButton
          btnText="ثبت کسب و کار"
          icon={<FaEdit size={16} />}
          isLoading={isLoading}
        />
      </Row>
    </>
  );
};

export { AuthInputs };
