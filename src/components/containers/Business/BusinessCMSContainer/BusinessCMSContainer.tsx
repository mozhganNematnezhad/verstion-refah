//base
import { FC } from "react";
import { cookies } from "next/headers";

//components

import { FullCarousel } from "@/components/common/FullCarousel/FullCarousel";

//assets
import businessBg from "assets/db/business/businessCMS/bg.png";

//core

import { authConfig } from "@/configs/auth.cf";
import { Empty } from "antd";
import { GetWishlistsForDropDown } from "@/core/services/api/Server/Wishlist.api";
import { IGetBusinessesRes } from "@/core/types/response/Business.res";
import { IGetWorkHours } from "@/core/types/response/GetWorkHours.res";
import { GetBusinessByDomainName } from "@/core/services/api/Server/Business.api";
import { GetWorkHoursByDomain } from "@/core/services/api/Server/WorkHour.api";
import { Introduction } from "./components/Introduction/Introduction";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";
import { ProductList } from "./components/ProductList/ProductList";
import { AboutBusiness } from "./components/AboutBusiness/AboutBusiness";
import { Violation } from "./components/Violation/Violation";
import { ContactBusiness } from "./components/ContactBusiness/ContactBusiness";

interface IPropType {
  businessDomain: string;
}

const BusinessCMSContainer: FC<IPropType> = async ({ businessDomain }) => {
  // check Token
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  //*** call api (server side)
  let resultBusiness: IGetBusinessesRes | null = null;
  let resultWorkHours: IGetWorkHours[] | null = null;
  let ListUserWishlists: number[] = [0];
  try {
    //getBusinessByDomainName
    const getBusinessByDomainName = await GetBusinessByDomainName(
      businessDomain
    );
    resultBusiness = getBusinessByDomainName.data.result;

    //getWorkHoursByDomain
    const getWorkHoursByDomain = await GetWorkHoursByDomain(businessDomain);
    resultWorkHours = getWorkHoursByDomain.data.result;
  } catch (error) {
    console.log(error);
  }

  try {
    if (token) {
      const GetWishlistsProductIdForDropDown = await GetWishlistsForDropDown(
        token
      );
      ListUserWishlists = GetWishlistsProductIdForDropDown.data.result;
    } else {
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {/* ---business bg --- */}
      <section
        className="w-full h-[180px] bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${businessBg.src})` }}
      ></section>

      <section className="relative z-[10] bottom-44 w-[95%] lg:w-[85%] mx-auto">
        {resultBusiness ? (
          <>
            {/* ---business header --- */}
            <Introduction
              titleBusiness={resultBusiness?.title}
              totalOrder={resultBusiness?.totalOrder}
              maxDiscount={resultBusiness?.maxDiscount}
              county={resultBusiness?.cityOrVillage.part.county.title}
              profileBusiness={resultBusiness?.businessCharterImage}
              supplyInPerson={resultBusiness?.supplyInPerson}
              supplyByPhone={resultBusiness?.supplyByPhone}
              supplyByInternet={resultBusiness?.supplyByInternet}
            />

            {/* --- business gallery --- */}
            <section id="gallery" className="py-4 bg-white my-2 p-2">
              <p className="text-xl font-bold m-2 mb-4">گالری تصاویر</p>

              <FullCarousel
                carouselList={resultBusiness?.galleries.map(
                  (item) =>
                    `${authConfig.base_url}/api/Files/${serveFileTypeEnum.Business}/${item?.file}`
                )}
              />
            </section>

            {/* --- business products --- */}
            <section id="products" className="bg-white p-4 rounded-lg">
              <p className="text-xl font-bold m-2 mb-4">محصولات</p>

              <ProductList
                businessDomain={resultBusiness?.domainName}
                productListData={resultBusiness?.products}
                ListOfWishlist={ListUserWishlists}
              />
            </section>

            {/* --- about business --- */}
            <section
              id="about-us"
              className="relative bg-white rounded-lg p-4 mt-4"
            >
              <AboutBusiness
                about={resultBusiness?.about}
                titleBusiness={resultBusiness?.title}
                description={resultBusiness?.description}
              />
            </section>

            {/* --- Violation --- */}
            <section className="relative bg-white rounded-lg p-4 mt-4">
              <Violation />
            </section>
          </>
        ) : (
          <section className="rounded-lg p-8">
            <Empty description="نتیجه‌ای برای کسب و کار یافت نشد!" />
          </section>
        )}

        {/* --- contact business --- */}
        <section
          id="contact-us"
          className="relative bg-white rounded-lg p-4 mt-4"
        >
          {resultBusiness && resultWorkHours ? (
            <ContactBusiness
              titleBusiness={resultBusiness?.title}
              GetWorkHourList={resultWorkHours}
              address={resultBusiness?.address}
              lat={resultBusiness?.lat}
              lng={resultBusiness?.lng}
            />
          ) : (
            <section className="rounded-lg p-8">
              <Empty description="نتیجه‌ای برای ساعت کاری کسب و کار یافت نشد!" />
            </section>
          )}
        </section>
      </section>
    </>
  );
};

export { BusinessCMSContainer };
