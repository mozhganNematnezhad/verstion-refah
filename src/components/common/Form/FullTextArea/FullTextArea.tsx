"use client";

import { FC } from "react";
import { Field } from "formik";
import { Input } from "antd";
import { InputLabel } from "../InputLabel/InputLabel";
import { FullErrorMessage } from "../FullErrorMessage/FullErrorMessage";

const { TextArea } = Input;

interface IPropType {
  name: string;
  labelText?: string;
  placeholder: string;
  maxHeight?: number;
  minHeight?: number;
  value?: any;
  disabled?: boolean;
  autoFocus?: boolean;
  clearable?: boolean;
  onChange?: (val: string) => void;
  className?: string;
  significant?: boolean;
  forSearching?: boolean;
}

const FullTextArea: FC<IPropType> = ({
  name,
  labelText,
  placeholder,
  maxHeight,
  minHeight,
  value,
  disabled,
  autoFocus,
  clearable,
  onChange,
  className,
  significant = true,
  forSearching,
}): JSX.Element => {
  return (
    <>
      <InputLabel
        name={name}
        labelText={labelText}
        significant={significant}
        forSearching={forSearching}
      />

      {/* =========== input ======== */}
      <Field name={name} value={value}>
        {({ form: { setFieldValue }, meta }: any) => (
          <>
            <TextArea
              name={name}
              autoFocus={autoFocus}
              allowClear={clearable}
              disabled={disabled}
              className={`${className ? className : ""}             
                  ${minHeight ? `min-h-[${minHeight}px]` : "min-h-[300px]"}
                  ${maxHeight ? `max-h-[${maxHeight}px]` : "max-h-[450px]"}`}
              placeholder={`لطفا ${placeholder} را وارد کنید `}
              // autoSize
              // count={}
              // maxLength={maxLength}
              // minLength={}
              value={meta.value}
              onChange={(
                param: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                // if (singleSpace) {
                //   e.target.value = e.target.value.replace(/\s+/g, " ");
                // }

                const inputVal = param.target.value;

                if (onChange) {
                  setFieldValue(name, inputVal);
                  onChange(inputVal);
                } else {
                  setFieldValue(name, inputVal);
                }
              }}
            />

            {/* =========== FullErrorMessage ======== */}
            <FullErrorMessage name={name} />
          </>
        )}
      </Field>
    </>
  );
};

export { FullTextArea };
