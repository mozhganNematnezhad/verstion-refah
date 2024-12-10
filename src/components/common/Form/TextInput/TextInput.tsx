"use client";

import React, { FC } from "react";
import { Field } from "formik";
import { Input } from "antd";
import { InputLabel } from "../InputLabel/InputLabel";
import { FullErrorMessage } from "../FullErrorMessage/FullErrorMessage";

interface IPropType {
  name: string;
  type?: "text" | "password" | "email";
  labelText?: string;
  placeholder?: string;
  value?: any;
  onChange?: (val: string) => void;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  clearable?: boolean;
  // singleSpace?: boolean;
  significant?: boolean;
  forSearching?: boolean;
  customPlaceHolder?: boolean;
}

const TextInput: FC<IPropType> = ({
  name,
  type,
  labelText,
  placeholder,
  value,
  onChange,
  className,
  disabled,
  autoFocus,
  clearable,
  // singleSpace,
  significant = true,
  forSearching,
  customPlaceHolder,
}): JSX.Element => {
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
      <Field type={type} name={name} value={value}>
        {({ form: { setFieldValue }, meta }: any) => (
          <>
            <Input
              name={name}
              spellCheck
              // showCount
              className={`w-full ${className ? className : ""}`}
              autoFocus={autoFocus}
              allowClear={clearable}
              disabled={disabled}
              placeholder={
                customPlaceHolder
                  ? placeholder
                  : `لطفا ${labelText} را وارد کنید `
              }
              value={meta.value}
              onChange={(
                param: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                const inputVal = param.target.value;

                if (onChange) {
                  setFieldValue(name, inputVal);
                  onChange(inputVal);
                } else {
                  setFieldValue(name, inputVal);
                }
              }}
            />

            {/* =========== CustomeErrorMessage ======== */}
            <FullErrorMessage name={name} />
          </>
        )}
      </Field>
    </>
  );
};

export { TextInput };
