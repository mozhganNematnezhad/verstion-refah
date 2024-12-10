"use client";

//base
import { FC, ReactNode } from "react";

//lib
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSearch,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { btnTextTypeEnum, bttonTypeEnum, buttonStyleType } from "@/core/enums/button.enum";

//core

interface IPropType {
  className?: string;
  size?: "small" | "middle" | "large";
  shape?: "default" | "circle" | "round";

  hasBaseBtn?: boolean;
  type?: bttonTypeEnum;
  btnText?: string | boolean;
  styleType?: buttonStyleType;
  isLoading?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;

  isSearchAble?: boolean;
  searchBtnType?: bttonTypeEnum;
  searchIcon?: ReactNode;
  searchIsLoading?: boolean;
  searchOnClick?: () => void;
  searchBtnText?: string;

  isClearAble?: boolean;
  clearBtnType?: bttonTypeEnum;
  clearIcon?: ReactNode;
  clearIsLoading?: boolean;
  clearOnClick?: () => void;
  clearBtnText?: string;
}

const FullButton: FC<IPropType> = ({
  className,
  size = "middle",
  shape = "default",

  hasBaseBtn = true,
  type = bttonTypeEnum.submit,
  btnText,
  styleType,
  isLoading,
  icon,
  onClick,
  disabled,

  isSearchAble,
  searchBtnType = bttonTypeEnum.button,
  searchIcon,
  searchIsLoading,
  searchOnClick,
  searchBtnText,

  isClearAble,
  clearBtnType = bttonTypeEnum.button,
  clearIcon,
  clearIsLoading,
  clearOnClick,
  clearBtnText,
}) => {
  return (
    <section className="flex justify-start items-center gap-2">
      {hasBaseBtn && (
        <Button
          htmlType={type ? type : "submit"}
          size={size}
          type={styleType ? styleType : buttonStyleType.primary}
          shape={shape}
          className={`ant-button !w-full !px-4 ${
            className ? className : undefined
          }`}
          icon={icon ? icon : <FontAwesomeIcon icon={faEdit} />}
          loading={isLoading}
          onClick={onClick ? onClick : () => {}}
          disabled={disabled}
        >
          {btnText ? btnText : btnTextTypeEnum.add}
        </Button>
      )}

      {isSearchAble && (
        <Button
          type="primary"
          htmlType={searchBtnType}
          shape={shape}
          className="ant-button !w-full !bg-green-700 hover:bg-green-600 !px-4"
          icon={searchIcon ? searchIcon : <FontAwesomeIcon icon={faSearch} />}
          loading={searchIsLoading}
          onClick={searchOnClick ? searchOnClick : () => {}}
        >
          {searchBtnText ? searchBtnText : btnTextTypeEnum.search}
        </Button>
      )}

      {isClearAble && (
        <Button
          type="dashed"
          htmlType={clearBtnType}
          shape={shape}
          className="ant-button !w-full !border-sky-700 !px-4"
          icon={clearIcon ? clearIcon : <FontAwesomeIcon icon={faTrashAlt} />}
          loading={clearIsLoading}
          onClick={clearOnClick ? clearOnClick : () => {}}
        >
          {clearBtnText ? clearBtnText : btnTextTypeEnum.delete}
        </Button>
      )}
    </section>
  );
};

export { FullButton };
