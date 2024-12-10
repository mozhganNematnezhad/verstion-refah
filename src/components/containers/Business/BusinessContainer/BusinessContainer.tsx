//base
import { FC, Suspense } from "react";
import { cookies } from "next/headers";

//lib
import { Empty } from "antd";

//componets
import { Introduction } from "./components/Introduction/Introduction";
import { AdvertisementSection } from "@/components/shared/AdvertisementSection/AdvertisementSection";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { SponserSection } from "./components/SponserSection/SponserSection";

//core
import { IUserLocation } from "@/core/models/user-location.model";
import { GetBusinessesForLanding } from "@/core/services/api/Server/Business.api";
import { IGetBusinessesForLanding } from "@/core/types/response/Business.res";
import {
  advertisementList_00,
  advertisementList_01,
  advertisementList_03,
  carouselList,
  sponserList,
} from "@/db/business/business.db";

//fake db

const BusinessContainer: FC = async () => {
  //*call api (server side)

  let businessForLandingResult: IGetBusinessesForLanding[] = [];

  // get userLocation from cookie
  const cookieStore = cookies();
  const userLocationFromCookie: string | undefined =
    cookieStore.get("userLocation")?.value;

  const userLocationObj: IUserLocation | undefined =
    userLocationFromCookie && JSON.parse(String(userLocationFromCookie));

  //businessForLandingResult
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
    businessForLandingResult = getBusinessesForLanding.data.result;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <Introduction carouselList={carouselList} />

      <AdvertisementSection
        advertisementList={advertisementList_00}
        count={advertisementList_00.length}
        ImageHeight="100px"
      />

      {businessForLandingResult.length > 0 ? (
        businessForLandingResult?.map((item, key) => (
          <Suspense key={key} fallback={"Loading..."}>
            <ProductSection
              sectionCategory={item?.key}
              productList={item?.value}
            />
          </Suspense>
        ))
      ) : (
        <section className="bg-white py-10">
          <Empty description="نتیجه ای یافت نشد !" />
        </section>
      )}

      <AdvertisementSection
        advertisementList={advertisementList_01}
        count={advertisementList_01.length}
        ImageHeight="200px"
      />

      <SponserSection sponserList={sponserList} />

      <AdvertisementSection
        advertisementList={advertisementList_03}
        count={advertisementList_03.length}
        ImageHeight="200px"
      />
    </>
  );
};

export { BusinessContainer };
