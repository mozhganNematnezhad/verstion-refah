import * as storage from "../common/storage/storage.service";
import * as cookies from "../common/storage/cookies.service";
import { storageTypeEnum } from "@/core/enums/storage-type.enum";
import { projectSetting } from "@/configs/setting.cf";
import { IBusinessProductDeatils } from "@/core/types/response/Product.res";
import { IUserPaymentInfoType } from "@/core/models/user-payment-info.model";

//isUsingCookies
const isUsingCookies = projectSetting.storage === storageTypeEnum.cookies;

//======== userLocation =========//
const setLocationInfoToStorage = (location: any): void => {
  if (isUsingCookies) {
    cookies.setGenericCookie("userLocation", location);
  } else {
    storage.setItemGeneric(projectSetting.storage, "userLocation", location);
  }
};

const getLocationInfoToStorage = (): any => {
  if (isUsingCookies) {
    return cookies.getGenericCookie("userLocation");
  } else {
    return storage.getItemGeneric(projectSetting.storage, "userLocation");
  }
};

const removeLocationInfoToStorage = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("userLocation");
  } else {
    storage.removeItem(projectSetting.storage, "userLocation");
  }
};

//======== cart =========//
const setCart = (cart: IBusinessProductDeatils): void => {
  storage.setItemGeneric(storageTypeEnum.localStorage, "cart", cart);
};

const getCarts = (): IBusinessProductDeatils[] | null => {
  return storage.getItemGeneric(storageTypeEnum.localStorage, "cart");
};

const removeAllCarts = (): void => {
  storage.removeItem(storageTypeEnum.localStorage, "cart");
};

//=============== UserPaymentInfo ================//
const setUserPaymentInfo = (UserPaymentInfo: IUserPaymentInfoType): void => {
  if (isUsingCookies) {
    cookies.setGenericCookie("UserPaymentInfo", UserPaymentInfo);
  } else {
    storage.setItemGeneric(
      projectSetting.storage,
      "UserPaymentInfo",
      UserPaymentInfo
    );
  }
};

const getUserPaymentInfo = (): IUserPaymentInfoType => {
  if (isUsingCookies) {
    const value = cookies.getGenericCookie("UserPaymentInfo");

    return value ? value : [];
  } else {
    const value = storage.getItemGeneric(
      projectSetting.storage,
      "UserPaymentInfo"
    );
    return value ? value : [];
  }
};

const removeUserPaymentInfo = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("UserPaymentInfo");
  } else {
    storage.removeItem(projectSetting.storage, "UserPaymentInfo");
  }
};

export {
  setLocationInfoToStorage,
  getLocationInfoToStorage,
  removeLocationInfoToStorage,
  setCart,
  getCarts,
  removeAllCarts,
  setUserPaymentInfo,
  getUserPaymentInfo,
  removeUserPaymentInfo,
};
