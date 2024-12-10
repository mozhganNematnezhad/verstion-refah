//base
import React, { FC } from "react";
import { cookies } from "next/headers";

//lib
import { Empty } from "antd";

//components

import { FullCarousel } from "@/components/common/FullCarousel/FullCarousel";
import { IGetBusinessesForLanding } from "@/core/types/response/Business.res";
import { IUserLocation } from "@/core/models/user-location.model";
import { GetBusinessesForLanding } from "@/core/services/api/Server/Business.api";
import { CMSLayout } from "@/components/layout/CMSLayout/CMSLayout";
import { Services } from "./components/Services/Services";
import { ToolsBars } from "./components/ToolsBars/ToolsBars";
import { advertisementList_02, carouselList } from "@/db/business/business.db";
import { VipSuggest } from "./components/VipSuggest/VipSuggest";
import { AdvertisementSection } from "@/components/shared/AdvertisementSection/AdvertisementSection";

//assets

//core

const LandingContainer: FC = async () => {
  //*call api (server side)
  let businessVipResult: IGetBusinessesForLanding[] | null = null;

  // get userLocation from cookie
  const cookieStore = cookies();
  const userLocationFromCookie: string | undefined =
    cookieStore.get("userLocation")?.value;

  const userLocationObj: IUserLocation | undefined =
    userLocationFromCookie && JSON.parse(String(userLocationFromCookie));

  try {
    const payload = {
      ...(userLocationObj?.provinces && {
        provinceId: userLocationObj.provinces.value,
      }),
      ...(userLocationObj?.counties && {
        countyId: userLocationObj.counties.value,
      }),
    };
    const getBusinessesForLanding = await GetBusinessesForLanding(payload);
    businessVipResult = getBusinessesForLanding.data.result;
  } catch (error) {
    console.log(error);
  }

  return (
    <CMSLayout>
      <section className="container mx-auto px-4 lg:grid grid-cols-7 gap-3 pt-6 ">
        <section className="col-span-5">
          <Services />
        </section>

        <section className="col-span-2">
          <ToolsBars />
        </section>
      </section>

      <section className="container mx-auto px-4 py-6">
        <FullCarousel carouselList={carouselList} />
      </section>

      {businessVipResult && businessVipResult?.length > 0 ? (
        <VipSuggest businessList={businessVipResult[0]?.value} />
      ) : (
        <section className="bg-white py-10">
          <Empty description="نتیجه ای یافت نشد !" />
        </section>
      )}

      <AdvertisementSection
        advertisementList={advertisementList_02}
        count={advertisementList_02.length}
        ImageHeight="200px"
      />
    </CMSLayout>
  );
};

export { LandingContainer };
