//base
import { FC } from "react";

//components
import { ProductDetailContainer } from "@/components/containers/Business/ProductDetailContainer/ProductDetailContainer";

interface IPropType {
  params: {
    businessId: number;
    productId: number;
  };
}
const ProductDetailPage: FC<IPropType> = (reqUrl) => {
  return <ProductDetailContainer productId={reqUrl.params.productId} />;
};

export default ProductDetailPage;
