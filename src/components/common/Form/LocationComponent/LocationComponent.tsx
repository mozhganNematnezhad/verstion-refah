"use client";

//base
import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";

//lib
import { Col, Row, Spin } from "antd";
import { Field } from "formik";

//components
import { FullSelectOption } from "../FullSelectOption/FullSelectOption";

const LeafletMap = dynamic(
  () => import("components/common/LeafletMap/LeafletMap"),
  { ssr: false }
);

//api
import {
  useGetAllCityOrVillagesForDropDown,
  useGetAllCountiesForDropDown,
  useGetAllMainLocationForDropDown,
  useGetAllProvincesForDropDown,
} from "@/core/services/api/client/Location.api";
import { IKeyValueRes } from "@/core/types/common/common.res";
import { TextInput } from "../TextInput/TextInput";
import { IFullSelectOption } from "@/core/models/fullSelectOption.model";
import { IMapFeildType } from "@/core/models/general.model";

interface IPropTypes {
  setFieldValue: (name: string, value: any) => void;
  hasCountry?: boolean;
  hasPostalCode?: boolean;
  hasMapComponent?: boolean;
  mapIsLoading?: boolean;
  defaultCenter?: IMapFeildType;
}

const LocationComponent: FC<IPropTypes> = ({
  setFieldValue,
  hasCountry,
  hasPostalCode,
  hasMapComponent = true,
  mapIsLoading,
  defaultCenter = null,
}) => {
  const [countryList, setCountryList] = useState<IFullSelectOption[]>([]);
  const [provinceList, setProvinceList] = useState<IFullSelectOption[]>([]);
  const [countyList, setCountyList] = useState<IFullSelectOption[]>([]);
  const [cityOrVillageList, setCityOrVillageList] = useState<
    IFullSelectOption[]
  >([]);

  //api
  const getCountry = useGetAllMainLocationForDropDown();
  const getProvinces = useGetAllProvincesForDropDown();
  const getCounties = useGetAllCountiesForDropDown();
  const getCityOrVillages = useGetAllCityOrVillagesForDropDown();

  //*get country (کشور)
  useEffect(() => {
    if (hasCountry) {
      getCountry.mutate();
    }
  }, []);

  useEffect(() => {
    if (getCountry.data?.data.result) {
      const result: IKeyValueRes[] = getCountry.data.data.result;

      setCountryList(
        result.map((item: IKeyValueRes) => ({
          label: item.value,
          value: item.key,
        }))
      );
    }
  }, [getCountry.isSuccess]);

  //*get province (استان)
  useEffect(() => {
    getProvinces.mutate();
  }, []);

  useEffect(() => {
    if (getProvinces.data?.data.result) {
      const result: IKeyValueRes[] = getProvinces.data.data.result;

      setProvinceList(
        result.map((item: IKeyValueRes) => ({
          label: item.value,
          value: item.key,
        }))
      );
    }
  }, [getProvinces.isSuccess]);

  //*get county (شهرستان)
  const handlelProvinceChange = (param: IFullSelectOption) => {
    setFieldValue("county", null);
    setFieldValue("cityOrVillageId", null);
    setCountyList([]);
    setCityOrVillageList([]);

    getCounties.mutate(param.value);
  };

  useEffect(() => {
    if (getCounties.data?.data.result) {
      const result: IKeyValueRes[] = getCounties.data.data.result;

      setCountyList(
        result.map((item: IKeyValueRes) => ({
          label: item.value,
          value: item.key,
        }))
      );
    }
  }, [getCounties.isSuccess]);

  //*get cityOrVillage (شهر و روستاها)
  const handleCountyChange = (param: IFullSelectOption) => {
    setFieldValue("cityOrVillageId", null);
    setCityOrVillageList([]);

    getCityOrVillages.mutate(param.value);
  };

  useEffect(() => {
    if (getCityOrVillages.data?.data.result) {
      const result: IKeyValueRes[] = getCityOrVillages.data.data.result;

      setCityOrVillageList(
        result.map((item: IKeyValueRes) => ({
          label: item.value,
          value: item.key,
        }))
      );
    }
  }, [getCityOrVillages.isSuccess]);

  return (
    <Row gutter={[12, 12]}>
      {hasCountry && (
        <Col xs={24} md={12} lg={8}>
          <FullSelectOption
            options={countryList}
            isLoading={getCountry.isLoading}
            name="country"
            labelText="کشور"
            significant
          />
        </Col>
      )}

      <Col xs={24} md={12} lg={8}>
        <FullSelectOption
          options={provinceList}
          isLoading={getProvinces.isLoading}
          name="province"
          labelText="استان"
          onChange={handlelProvinceChange}
          significant
        />
      </Col>

      <Col xs={24} md={12} lg={8}>
        <FullSelectOption
          options={countyList}
          isLoading={getCounties.isLoading}
          name="county"
          labelText="شهرستان"
          onChange={handleCountyChange}
          significant
        />
      </Col>

      <Col xs={24} md={12} lg={8}>
        <FullSelectOption
          options={cityOrVillageList}
          isLoading={getCityOrVillages.isLoading}
          name="cityOrVillageId" //!cityOrVillageId
          labelText="شهر/روستا"
          significant
        />
      </Col>

      {hasPostalCode && (
        <Col xs={24} md={12} lg={8}>
          <TextInput name="postalCode" labelText="کد پستی" significant />
        </Col>
      )}

      <Col xs={24} md={12} lg={16}>
        <TextInput name="address" clearable labelText="آدرس" significant />
      </Col>

      {/* --- map --- */}
      {hasMapComponent ? (
        mapIsLoading ? (
          <Col
            xs={24}
            className="flex justify-center items-center min-h-[200px]"
          >
            <Spin size="large">
              <p className="mt-3 text-sm text-gray-800">
                در حال بارگذاری نقشه ...
              </p>
            </Spin>
          </Col>
        ) : (
          <Field name="mapInput" id="mapInput" type="text">
            {() => (
              <Col
                xs={24}
                className="border-b-2 w-full h-[400px] overflow-hidden mt-4"
              >
                <p className="text-xs text-sky-700 font-bold mb-2">
                  لطفاً جهت انتخاب موقعیت مکانی خود، نقشه را به موقعیت شهرستانی
                  خود تغییر دهید و سپس بر روی موقیت مکانی خود کلیک نمایید.
                </p>

                <LeafletMap
                  setFieldValue={setFieldValue}
                  zoom={7}
                  canMark
                  defaultCenter={defaultCenter}
                />
              </Col>
            )}
          </Field>
        )
      ) : null}
    </Row>
  );
};

export { LocationComponent };
