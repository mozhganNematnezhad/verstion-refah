//base
import React, { FC } from "react";

//componets
import { FullCarousel } from "@/components/common/FullCarousel/FullCarousel";
import { FullImage } from "@/components/common/images/FullImage/FullImage";

//assets
import adv_image_01 from "assets/db/landing/introduction/01.jpg";
import adv_image_02 from "assets/db/landing/introduction/02.jpg";

interface IPropType {
  carouselList: string[];
}

export const Introduction: FC<IPropType> = ({ carouselList }) => {
  return (
    <main className="container mx-auto px-4 pt-6">
      <section className="lg:grid grid-cols-5 gap-x-4">
        {/* --- Carousel --- */}
        <section className="col-span-4">
          <FullCarousel carouselList={carouselList} />
        </section>

        {/* --- advertisemet --- */}
        <section className="hidden lg:flex flex-col justify-between items-center gap-4 ">
          <FullImage
            src={adv_image_01.src}
            alt="شهرک رفا ۲۴"
            height="190px"
            className="rounded-lg"
          />
          <FullImage
            src={adv_image_02.src}
            alt="شهرک رفا ۲۴"
            height="190px"
            className="rounded-lg"
          />
        </section>
      </section>
    </main>
  );
};
