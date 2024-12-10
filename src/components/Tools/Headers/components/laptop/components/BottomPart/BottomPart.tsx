"use client";

import React, { FC, useEffect, useState } from "react";
import { GetProductCategoriesHierarchical } from "@/core/types/response/Category.res";
import { useGetBusinessCategoriesHierarchical } from "@/core/services/api/client/CategoryClient.api";
import { CategoryMenu } from "./components/CategoryMenu/CategoryMenu";
import { navigationBarList } from "@/core/data/Tools/header/header.data";

const BottomPart: FC = () => {
  // call api (server side)
  // const getBusinessCategoriesHierarchical =
  //   await GetBusinessCategoriesHierarchical();
  // const result: GetProductCategoriesHierarchical[] =
  //   getBusinessCategoriesHierarchical.result;

  const [Business, setBusiness] = useState<
    GetProductCategoriesHierarchical[] | undefined
  >();
  const getBussines = useGetBusinessCategoriesHierarchical();
  useEffect(() => {
    getBussines.mutate();
  }, []);

  useEffect(() => {
    if (getBussines.isSuccess) {
      const result = getBussines.data?.data.result;
      if (result) {
        setBusiness(result);
      }
    }
  }, [getBussines.isSuccess]);
  return (
    <div className="container  mx-auto px-14 py-4  border-t lg:block hidden">
      <CategoryMenu
        isLoading={getBussines.isLoading}
        submenuDataList={Business}
        navDataList={navigationBarList}
      />
    </div>
  );
};

export { BottomPart };
