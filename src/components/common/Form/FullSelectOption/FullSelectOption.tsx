"use client";

import { FC } from "react";
import { Select } from "antd";
import { Field } from "formik";
import { InputLabel } from "../InputLabel/InputLabel";
import { FullErrorMessage } from "../FullErrorMessage/FullErrorMessage";
import { selectOptionType } from "@/core/enums/selectOption-type.enum";
import { IFullSelectOption } from "@/core/models/fullSelectOption.model";

interface IPropType {
  type?: selectOptionType;
  className?: string;
  name: string;
  options: IFullSelectOption[];
  isLoading?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  defaultValue?: IFullSelectOption;
  onChange?: (event: IFullSelectOption) => void;
  labelText?: string;
  significant?: boolean;
  forSearching?: boolean;
}

const FullSelectOption: FC<IPropType> = ({
  type = selectOptionType.single,
  className,
  name,
  options,
  isLoading,
  disabled,
  clearable,
  autoFocus,
  placeholder,
  defaultValue,
  onChange,
  labelText,
  significant = true,
  forSearching,
}): JSX.Element => {
  // Filter base on (option.label)
  const filterOption = (
    input: string,
    option?: { label: string; value: number }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      {/* =========== InputLabel ======== */}
      <InputLabel
        name={name}
        labelText={labelText}
        significant={significant}
        forSearching={forSearching}
      />

      {/* =========== input ======== */}
      <Field value={defaultValue} name={name} className="w-full">
        {({ form: { setFieldTouched, setFieldValue }, meta }: any) => (
          <>
            <Select
              mode={type ? type : (selectOptionType.single as any)}
              className={`!w-full ${className ? className : ""}`}
              bordered
              showSearch
              showAction={["focus"]}
              virtual={false}
              labelInValue
              filterOption={filterOption}
              allowClear={clearable}
              loading={isLoading}
              autoFocus={autoFocus}
              disabled={disabled}
              defaultValue={defaultValue}
              options={options}
              value={meta.value ? meta.value : undefined}
              onChange={
                onChange
                  ? (param) => {
                      setFieldValue(name, param);
                      onChange(param);
                    }
                  : (param) => {
                      setFieldValue(name, param);
                    }
              }
              placeholder={
                placeholder ? placeholder : "موردی را انتخاب کنید ..."
              }
              // notFoundContent={
              //   <div style={{ textAlign: "center" }}>
              //     <p>Data Not Found</p>
              //   </div>
              // }
            />

            {/* ==== CustomeErrorMessage =====*/}
            <FullErrorMessage name={name} />
          </>
        )}
      </Field>
    </>
  );
};

export { FullSelectOption };
