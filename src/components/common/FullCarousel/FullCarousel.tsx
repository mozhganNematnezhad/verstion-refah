"use client";

//base
import { FC } from "react";

//lib
import { Alert, Carousel } from "antd";

//componets
import { FullImage } from "../images/FullImage/FullImage";

interface IPropType {
  carouselList: string[];
  className?: string;
}

const FullCarousel: FC<IPropType> = ({ carouselList, className }) => {
  return (
    <section>
      <Carousel
        dots={{
          className: "pb-3",
        }}
        autoplay
        infinite
        className="overflow-hidden"
      >
        {carouselList.length > 0 ? (
          carouselList.map((item, key) => (
            <section
              key={key}
              className={`${
                className ? className : ""
              } lg:h-[380px] md:h-[250px] h-[190px] rounded-lg overflow-hidden`}
            >
              <FullImage
                src={item}
                alt="شهرک رفا ۲۴"
                className="bg-sky-800 w-full h-full"
              />
            </section>
          ))
        ) : (
          <section
            className="bg-white rounded-lg overflow-hidden
              flex justify-center items-center mt-2"
          >
            <Alert
              type="info"
              message="تصویری یافت نشده است!"
              showIcon
              className="lg:w-1/2"
            />
          </section>
        )}
      </Carousel>
    </section>
  );
};

export { FullCarousel };
