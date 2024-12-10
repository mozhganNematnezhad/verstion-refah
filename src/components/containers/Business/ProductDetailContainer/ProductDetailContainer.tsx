//base
import { FC } from "react";
import { cookies } from "next/headers";

//lib
import { Alert, Empty } from "antd";

//components
import { FullCarousel } from "@/components/common/FullCarousel/FullCarousel";

// core

import { authConfig } from "@/configs/auth.cf";
import { IBusinessProductDeatils } from "@/core/types/response/Product.res";
import {
  GetProductByCustomer,
  GetProductByLogin,
} from "@/core/services/api/Server/ProductBusiness.api";
import { ProductSummery } from "./components/ProductSummery/ProductSummery";
import { TipSection } from "./components/TipSection/TipSection";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";
import { AddToCart } from "./components/AddToCart/AddToCart";

interface IPropType {
  productId: number;
}

const ProductDetailContainer: FC<IPropType> = async ({ productId }) => {
  // check Token
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  //*call api (server side)
  let businessProductResult: IBusinessProductDeatils | null = null;

  try {
    if (token) {
      const getProductByLogin = await GetProductByLogin(productId, token);
      businessProductResult = getProductByLogin.data.result;
    } else {
      const getProductByCustomer = await GetProductByCustomer(productId);
      businessProductResult = getProductByCustomer.data.result;
    }
  } catch (error) {
    console.log(error);
  }

  return businessProductResult ? (
    <section className="container mx-auto px-4 py-6 min-h-screen">
      <section className="lg:grid lg:grid-cols-7 lg:gap-3">
        <section className="col-span-4">
          <ProductSummery productDetails={businessProductResult} />
          <TipSection />
        </section>

        <section className="col-span-3 flex flex-col gap-4 mt-4 lg:m-0">
          <section>
            {businessProductResult?.productGalleryOrdered ? (
              <FullCarousel
                carouselList={businessProductResult?.productGalleryOrdered
                  ?.filter((item) => item.file)
                  .map(
                    (item) =>
                      `${authConfig.base_url}/api/Files/${serveFileTypeEnum.Product}/${item?.file}`
                  )}
              />
            ) : (
              <div
                className="lg:h-[380px] md:h-[250px] h-[190px] rounded-[8px] overflow-hidden
                flex items-center justify-center"
              >
                <Empty description="تصویری برای این محصول ثبت نشده است!" />
              </div>
            )}
          </section>

          <AddToCart productDetails={businessProductResult} />
        </section>
      </section>
    </section>
  ) : (
    <section className="bg-white p-10 min-h-screen flex justify-center items-center">
      <Empty description="مشکلی پیش آمده است!" />
    </section>
  );
};

export { ProductDetailContainer };
