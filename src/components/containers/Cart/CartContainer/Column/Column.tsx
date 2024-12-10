import { AntImage } from "@/components/common/images/AntImage/AntImage";
import { authConfig } from "@/configs/auth.cf";
import { Action } from "../Action/Action";
import { IBusinessProductDeatils } from "@/core/types/response/Product.res";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";
import { ConvertToSepratorNumber } from "@/core/utils/convertor.utils";

export const Columns = () => [
  {
    key: "Action",
    width: "130px",
    align: "center",
    title: "عملیات",
    render: (_: IBusinessProductDeatils, original: IBusinessProductDeatils) => (
      <Action original={original} />
    ),
  },
  {
    align: "center",
    title: "نام محصول",
    key: "title",
    dataIndex: "title",
  },

  {
    align: "center",
    title: "تصویر",
    key: "image",
    render: (_: IBusinessProductDeatils, original: IBusinessProductDeatils) => (
      <AntImage
        src={`${authConfig.base_url}/api/Files/${serveFileTypeEnum.Product}/${original.picture}`}
        alt={original.title}
        width="100%"
        height="90px"
      />
    ),
  },
  {
    align: "center",
    title: "تخفیف",
    key: "discount",
    render: (_: IBusinessProductDeatils, original: IBusinessProductDeatils) => (
      <span className="text-sky-700 text-xl">
        {original.discount ? `${original.discount}%` : "تخفیفی ندارد!"}{" "}
      </span>
    ),
  },
  {
    align: "center",
    title: "قیمت با تخفیف",
    key: "discountedPrice",
    render: (_: IBusinessProductDeatils, original: IBusinessProductDeatils) => {
      const cost = original.cost || 0;
      const discount = original.discount || 0;

      const discountAmount = (cost * discount) / 100;
      const discountedPrice = cost - discountAmount;

      return (
        <span className={original.discount > 0 ? "line-through" : ""}>
          {original.discount
            ? ConvertToSepratorNumber(discountedPrice)
            : ConvertToSepratorNumber(cost)}
        </span>
      );
    },
  },
  {
    align: "center",
    title: "قیمت اصلی",
    key: "cost",
    render: (_: IBusinessProductDeatils, original: IBusinessProductDeatils) => {
      const cost = original.cost || 0;

      return <span> {ConvertToSepratorNumber(Math.ceil(cost))} </span>;
    },
  },
  {
    align: "center",
    title: "توضیحات",
    key: "description",
    dataIndex: "description",
  },
];
