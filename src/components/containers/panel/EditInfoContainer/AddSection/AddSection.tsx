//base
import React, { FC } from "react";

//lib
import { FaMapMarkerAlt, FaUserEdit } from "react-icons/fa";

//componets
import { Button, Col, Divider, Row } from "antd";

//assets
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { FullSelectOption } from "@/components/common/Form/FullSelectOption/FullSelectOption";
import { LocationComponent } from "@/components/common/Form/LocationComponent/LocationComponent";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { genderData } from "@/core/data/general/general.data";
import { IMapFeildType } from "@/core/models/general.model";
//!type rememind
interface IPropTypes {
  setFieldValue: (name: string, values: any) => void;
  defaultCenter?: IMapFeildType;
  mapIsLoading: boolean;
  isLoading: boolean;
}

const AddSection: FC<IPropTypes> = ({
  setFieldValue,
  defaultCenter,
  mapIsLoading,
  isLoading,
}) => {
  return (
    <>
      <Row gutter={[12, 12]} className="my-6">
        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="name"
            clearable
            labelText="نام"
            placeholder="خود"
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="lastName"
            clearable
            labelText="نام خانوادگی"
            placeholder="خود"
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="phoneNumber"
            clearable
            labelText="شماره موبایل"
            placeholder="خود"
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="nationalCode"
            clearable
            labelText="کدملی"
            placeholder="خود"
            significant
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="fatherName"
            clearable
            labelText="نام پدر"
            placeholder="خود"
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <FullSelectOption
            name="gender"
            options={genderData}
            clearable
            labelText="جنسیت"
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="email"
            clearable
            labelText="ایمیل"
            placeholder="خود"
          />
        </Col>

        {/* --- Divider --- */}
        <Divider orientation="center" plain>
          <section className="flex justify-center items-center gap-x-2">
            <FaMapMarkerAlt size={18} className="text-blue-600" />
            <span className="mt-1">موقعیت مکانی شما</span>
          </section>
        </Divider>

        {/* --- LocationComponent --- */}
        <LocationComponent
          setFieldValue={setFieldValue}
          hasMapComponent
          hasPostalCode
          defaultCenter={defaultCenter}
          mapIsLoading={mapIsLoading}
        />
      </Row>

      <Row>
        <FullButton
          btnText="ثبت اطلاعات"
          icon={<FaUserEdit size={16} />}
          isLoading={isLoading}
        />
      </Row>
    </>
  );
};

export { AddSection };
