"use client";

//base
import React, { FC, Suspense } from "react";

//componets

//assets
import { authConfig } from "@/configs/auth.cf";

import { Alert, Empty } from "antd";
import { IGetBusinessesByFilterResult } from "@/core/types/response/Business.res";
import { BusinessCart } from "@/components/common/FullCards/BusinessCart/BusinessCart";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";

interface IPropType {
  businessListData: IGetBusinessesByFilterResult[];
}

const BusinessList: FC<IPropType> = ({ businessListData }) => {
  return (
    <>
      {businessListData.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessListData.map((item, key) => (
            <Suspense key={key} fallback={"Loading..."}>
              <BusinessCart
                href={`/business/${item.domainName}`}
                image={`${authConfig.base_url}/api/Files/${serveFileTypeEnum.Business}/${item?.businessCharterImage}`}
                title={
                  item.title
                    ? item.title.length > 20
                      ? `${item.title.slice(0, 20)}...`
                      : item.title
                    : "!"
                }
                discount={item.maxDiscount ? item.maxDiscount : 0}
                location={item.cityOrVillage.title}
                // rate={item.rating ? item.rating : 0}
                rate={0}
                category={item.category ? item.category.title : "!"}
                supplyInPerson={item.supplyInPerson}
                supplyByPhone={item.supplyByPhone}
                supplyByInternet={item.supplyByInternet}
              />
            </Suspense>
          ))}
        </section>
      ) : (
        <section className="flex justify-center items-center">
          <Empty description="کسب و کاری در این فیلتر یافت نشده است!" />
        </section>
      )}
    </>
  );
};

export { BusinessList };
