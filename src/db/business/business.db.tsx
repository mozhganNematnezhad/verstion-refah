import carousel_image_01 from "assets/db/landing/introduction/carousel/01.png";
import carousel_image_02 from "assets/db/landing/introduction/carousel/02.png";
import carousel_image_03 from "assets/db/landing/introduction/carousel/03.png";
import carousel_image_04 from "assets/db/landing/introduction/carousel/04.png";
import carousel_image_05 from "assets/db/landing/introduction/carousel/05.png";

import introduction_image_03 from "assets/db/landing/introduction/03.jpg";
import introduction_image_04 from "assets/db/landing/introduction/04.jpg";
import introduction_image_05 from "assets/db/landing/introduction/05.jpg";
import introduction_image_06 from "assets/db/landing/introduction/06.jpg";
import introduction_image_07 from "assets/db/landing/introduction/07.jpg";

import adv_image_01 from "assets/db/landing/advertisement/01.png";
import adv_image_02 from "assets/db/landing/advertisement/02.png";
import adv_image_03 from "assets/db/landing/advertisement/03.png";
import adv_image_04 from "assets/db/landing/advertisement/04.png";
import adv_image_05 from "assets/db/landing/advertisement/05.png";
import adv_image_06 from "assets/db/landing/advertisement/06.png";
import adv_image_07 from "assets/db/landing/advertisement/07.png";
import adv_image_08 from "assets/db/landing/advertisement/08.png";
import adv_image_11 from "assets/db/landing/advertisement/11.png";
import adv_image_12 from "assets/db/landing/advertisement/12.png";
import adv_image_13 from "assets/db/landing/advertisement/13.png";
import adv_image_14 from "assets/db/landing/advertisement/14.png";

import sponser_image_01 from "assets/db/landing/sponser/01.png";
import sponser_image_02 from "assets/db/landing/sponser/02.png";
import sponser_image_03 from "assets/db/landing/sponser/03.png";
import sponser_image_04 from "assets/db/landing/sponser/04.png";
import { IAdvertisementprops } from "@/core/types/props/business/Advertisement.props";
import { ISponserCardProp } from "@/core/types/props/business/Sponser.props";

//carouselList
export const carouselList = [
  carousel_image_01.src,
  carousel_image_02.src,
  carousel_image_03.src,
  carousel_image_04.src,
  carousel_image_05.src,
];

//adv
export const advertisementList_00: IAdvertisementprops[] = [
  {
    image: introduction_image_03.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: introduction_image_04.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: introduction_image_05.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: introduction_image_06.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: introduction_image_07.src,
    alt: "شهرک رفا ۲۴",
  },
];

export const advertisementList_01: IAdvertisementprops[] = [
  {
    image: adv_image_01.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_02.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_03.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_04.src,
    alt: "شهرک رفا ۲۴",
  },
];

export const advertisementList_02: IAdvertisementprops[] = [
  {
    image: adv_image_05.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_06.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_07.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_08.src,
    alt: "شهرک رفا ۲۴",
  },
];

export const advertisementList_03: IAdvertisementprops[] = [
  {
    image: adv_image_11.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_12.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_13.src,
    alt: "شهرک رفا ۲۴",
  },
  {
    image: adv_image_14.src,
    alt: "شهرک رفا ۲۴",
  },
];

//sponser
export const sponserList: ISponserCardProp[] = [
  {
    image: sponser_image_01.src,
    title: "دیجی کالا",
    discount: 70,
  },
  {
    image: sponser_image_02.src,
    title: "دیجی استایل",
    discount: 30,
  },
  {
    image: sponser_image_03.src,
    title: "نماوا",
    discount: 20,
  },
  {
    image: sponser_image_04.src,
    title: "دیجی استچ",
    discount: 80,
  },
];
