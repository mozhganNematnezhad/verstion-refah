import React, { FC } from "react";
import { CategorysItems } from "./components/CategorysItems/CategorysItems";

import { GetProductCategoriesHierarchical } from "@/core/types/response/Category.res";
import { GetBusinessCategoriesHierarchical } from "@/core/services/api/Server/Category.api";

const BussinessCategoryContainer: FC = async () => {
  //*call api (server side)
  const getBusinessCategoriesHierarchical =
    await GetBusinessCategoriesHierarchical();
  const result: GetProductCategoriesHierarchical[] =
    getBusinessCategoriesHierarchical.result;
  return (
    <>
      <CategorysItems categoryList={result} />
    </>
  );
};

export { BussinessCategoryContainer };
