"use client";

import React, { CSSProperties, FC } from "react";
import { Input } from "antd";
import { ReactNode } from "react";

interface IpropTypes {
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  size?: "large" | "middle" | "small";
  onClick?: () => void;
  width?: string;
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  name?: string;
}

const InputGroup: FC<IpropTypes> = ({
  addonBefore,
  addonAfter,
  size,
  onClick,
  width,
  className,
  placeholder,
  name,
}) => {
  return (
    <Input
      name={name}
      size={size}
      placeholder={placeholder}
      className={` ${className}`}
      width={width}
      style={{ direction: "rtl" }}
      onClick={onClick}
      //    addonBefore and addonAfter
      addonBefore={addonBefore}
      addonAfter={addonAfter}
    />
  );
};

export { InputGroup };
