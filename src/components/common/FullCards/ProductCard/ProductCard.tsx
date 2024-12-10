//base
import { FC } from "react";
import Link from "next/link";

//components
import { FullImage } from "../../images/FullImage/FullImage";

//core
import { calculateOriginalPrice } from "@/core/utils/calculateOriginalPrice";
import { IProductCard } from "@/core/types/props/landing/productCard.props";
import { ConvertToSepratorNumber } from "@/core/utils/convertor.utils";

const ProductCard: FC<IProductCard> = ({
  href,
  id,
  image,
  description,
  discount,
  location,
  price,
  title,
  width,
  isAdedd,
}) => {
  return (
    <section
      className="bg-white shadow rounded-lg cursor-pointer 
        transition-all duration-500 hover:shadow-white"
      style={{ width: width ? width : "100%" }}
    >
      <Link
        href={{
          pathname: href,
        }}
      >
        <section className="bg-slate-50 rounded-t-lg">
          <FullImage
            src={image}
            alt={title}
            height="110px"
            className="rounded-t-lg"
          />
        </section>
        <section className="flex flex-col gap-1 px-2 pt-2 pb-6">
          <p className="font-bold text-[14px]">{title}</p>
          <p className="text-xs text-slate-700">
            {description.slice(0, 20) + "..."}
          </p>
          {/* <div className="flex justify-start items-center gap-1">
            <FaMapMarker size={12} className="text-slate-600" />
            <p className="text-xs">{location}</p>
          </div> */}
        </section>
      </Link>

      <section className="flex justify-between items-center border-dashed border-t p-2">
        <p className="bg-sky-700 text-white font-bold p-2 rounded-lg">
          {discount}%
        </p>
        <section>
          <div>
            <span className="text-lg">
              {ConvertToSepratorNumber(calculateOriginalPrice(price, discount))}
            </span>
            <span className="text-xs mr-1">تومان</span>
          </div>

          <p className="line-through text-xs text-center">
            {ConvertToSepratorNumber(price)}
          </p>
        </section>
        {/* <WishlistUser id={id} isAdded={isAdedd} /> */}
      </section>
    </section>
  );
};

export { ProductCard };
