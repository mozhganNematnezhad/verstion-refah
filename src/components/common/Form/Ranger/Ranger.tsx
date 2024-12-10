import React, { FC, useEffect, useState } from "react";
import { Slider } from "antd";
import { Field } from "formik";

interface IPropType {
  name: string;
  onChange?: (val: number[]) => void;
  min: number;
  max: number;
}

const Ranger: FC<IPropType> = ({ name, onChange, min, max }) => {
  const [rangeValues, setRangeValues] = useState<number[]>([min, max]);

  useEffect(() => {
    // Update the slider values when min or max props change
    setRangeValues([min, max]);
  }, [min, max]);

  return (
    <>
      <Field name={name}>
        {({ form: { setFieldValue }, meta }: any) => (
          <>
            <Slider
              id={name}
              range
              value={meta.value || rangeValues}
              onChange={(param) => {
                if (onChange) {
                  onChange(param);
                  setRangeValues(param);
                  setFieldValue(name, param);
                } else {
                  setRangeValues(param);
                  setFieldValue(name, param);
                }
              }}
            />
            <div className={`flex items-center justify-around`}>
              <div className="">
                <span> تا : </span>{" "}
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  {meta.value[1]}
                </span>
              </div>
              <div>
                <span> از : </span>{" "}
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {meta.value[0]}
                </span>
              </div>
            </div>
          </>
        )}
      </Field>
    </>
  );
};

export { Ranger };
