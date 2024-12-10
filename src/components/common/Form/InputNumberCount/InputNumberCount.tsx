import React from "react";
import { InputNumber } from "antd";

interface InputNumberCountProps {
  min: number;
  max: number;
  defaultValue?: number;
  onChange: (value: number | null) => void;
}

const InputNumberCount: React.FC<InputNumberCountProps> = ({
  min,
  max,
  defaultValue,
  onChange,
}) => {
  return (
    <InputNumber
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export { InputNumberCount };
