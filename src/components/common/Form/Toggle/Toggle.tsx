import { FC } from "react";
import { Switch } from "antd";
import { Field } from "formik";
import { InputLabel } from "../InputLabel/InputLabel";
import { FullErrorMessage } from "../FullErrorMessage/FullErrorMessage";

interface IPropType {
  name: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  labelText?: string;
  significant?: boolean;
  forSearching?: boolean;
}

const Toggle: FC<IPropType> = ({
  name,
  checked,
  onChange,
  disabled,
  labelText,
  significant,
  forSearching,
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
      <Field name={name} value={checked}>
        {({ form: { setFieldValue }, meta }: any) => (
          <>
            <Switch
              id={name}
              checked={checked}
              // defaultChecked
              className="bg-slate-500"
              disabled={disabled}
              value={meta.value}
              onChange={(checked: boolean) => {
                if (onChange) {
                  onChange(checked);
                  setFieldValue(name, checked);
                } else {
                  setFieldValue(name, checked);
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

export { Toggle };
