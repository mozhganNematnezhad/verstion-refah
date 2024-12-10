//base
import { FC, Suspense } from "react";

//lib
import { Empty } from "antd";

//componets
import { ProductCard } from "@/components/common/FullCards/ProductCard/ProductCard";

//assets
import { authConfig } from "@/configs/auth.cf";
import { IBusinessProduct } from "@/core/types/response/Business.res";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";

interface IPropType {
  businessDomain: string;
  productListData: IBusinessProduct[];
  ListOfWishlist?: number[];
}

const ProductList: FC<IPropType> = ({
  businessDomain,
  productListData,
  ListOfWishlist,
}) => {
  return (
    <>
      {productListData?.length > 0 ? (
        <>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productListData?.map((item: IBusinessProduct, key: number) => (
              <Suspense key={key} fallback={"Loading..."}>
                <ProductCard
                  href={`/business/${businessDomain}/${item.id}`}
                  id={item.id}
                  image={
                    item.picture
                      ? `${authConfig.base_url}/api/Files/${serveFileTypeEnum.Product}/${item.picture}/thumb`
                      : null
                  }
                  description={item.description}
                  title={
                    item.title
                      ? item.title.length > 20
                        ? `${item.title.slice(0, 20)}...`
                        : item.title
                      : "!"
                  }
                  location={""}
                  discount={item.discount ? item.discount : 0}
                  price={item.cost}
                  width="100%"
                  isAdedd={
                    ListOfWishlist ? ListOfWishlist.includes(item.id) : false
                  }
                  // btnTitle="مشاهده محصول"
                  // location={`شماره سریال : ${item.serialNumber}`}
                  // rate={item.rating ? item.rating : 0}
                />
              </Suspense>
            ))}
          </section>
        </>
      ) : (
        <section className="flex justify-center items-center">
          <Empty
            className="mt-4 w-1/2"
            description="کسب و کار محصولی را تا به حال ثبت نکرده است!"
          />
        </section>
      )}
    </>
  );
};

export { ProductList };
