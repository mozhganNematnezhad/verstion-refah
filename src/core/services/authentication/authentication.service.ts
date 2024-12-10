import { userManager } from "./oidc.service";
import * as storage from "../common/storage/storage.service";
import * as cookies from "../common/storage/cookies.service";
import { projectSetting } from "@/configs/setting.cf";
import { storageTypeEnum } from "@/core/enums/storage-type.enum";
import { IUserInfoType } from "@/core/models/user-info.model";

//isUsingCookies
const isUsingCookies = projectSetting.storage === storageTypeEnum.cookies;

//===============SSO================//
const login = (): void => {
  userManager.signinRedirect();
};

const loginCallback = (): any => {
  return userManager.signinRedirectCallback();
};

const silentLogin = (): any => {
  return userManager.signinSilent();
};

const logout = (): void => {
  userManager.signoutRedirect();
};

const logOutCallback = (): any => {
  return userManager.signoutRedirectCallback();
};

const getUser = async () => await userManager.getUser();

//===============userInfo================//
const setLoggedUserInfoToStorage = (user: IUserInfoType): void => {
  if (isUsingCookies) {
    cookies.setGenericCookie("userInfo", user);
  } else {
    storage.setItemGeneric(projectSetting.storage, "userInfo", user);
  }
};

const getLoggedUserInfoFromStorage = (): IUserInfoType => {
  if (isUsingCookies) {
    return cookies.getGenericCookie("userInfo");
  } else {
    return storage.getItemGeneric(projectSetting.storage, "userInfo");
  }
};

const removeLoggedUserInfoFromStorage = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("userInfo");
  } else {
    storage.removeItem(projectSetting.storage, "userInfo");
  }
};

const isUserLoggedIn = (): boolean => {
  if (getLoggedUserInfoFromStorage() && getAccessToken()) {
    return true;
  }
  return false;
};

//===============token================//
const setAccessToken = (token: string): void => {
  if (isUsingCookies) {
    cookies.setCookie("token", token);
  } else {
    storage.setItem(projectSetting.storage, "token", token);
  }
};

const getAccessToken = (): string => {
  if (isUsingCookies) {
    const value = cookies.getCookie("token");
    return value ? value : null;
  } else {
    const value = storage.getItem(projectSetting.storage, "token");

    return value ? value : null;
  }
};

const removeAccessToken = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("token");
  } else {
    storage.removeItem(projectSetting.storage, "token");
  }
};

//===============SSO-token================//
const setSSO_token = (SSO_token: string): void => {
  if (isUsingCookies) {
    cookies.setCookie("SSO_token", SSO_token);
  } else {
    storage.setItem(projectSetting.storage, "SSO_token", SSO_token);
  }
};

const getSSO_token = (): string | null => {
  if (isUsingCookies) {
    return cookies.getCookie("SSO_token");
  } else {
    return storage.getItem(projectSetting.storage, "SSO_token");
  }
};

const removeSSO_token = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("SSO_token");
  } else {
    storage.removeItem(projectSetting.storage, "SSO_token");
  }
};

//===============refresh_token================//
const setRefreshToken = (refreshToken: string): void => {
  if (isUsingCookies) {
    cookies.setCookie("refresh_token", refreshToken);
  } else {
    storage.setItem(projectSetting.storage, "refresh_token", refreshToken);
  }
};

const getRefreshToken = () => {
  if (isUsingCookies) {
    return cookies.getCookie("refresh_token");
  } else {
    return storage.getItem(projectSetting.storage, "refresh_token");
  }
};

const removeRefreshToken = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("refresh_token");
  } else {
    storage.removeItem(projectSetting.storage, "refresh_token");
  }
};

//===============role================//
const setUserRoles = (role: string[]): void => {
  if (isUsingCookies) {
    cookies.setGenericCookie("role", role);
  } else {
    storage.setItemGeneric(projectSetting.storage, "role", role);
  }
};

const getUserRoles = (): string[] => {
  if (isUsingCookies) {
    const value = cookies.getGenericCookie("role");

    return value ? value : [];
  } else {
    const value = storage.getItemGeneric(projectSetting.storage, "role");
    return value ? value : [];
  }
};

const removeUserRoles = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("role");
  } else {
    storage.removeItem(projectSetting.storage, "role");
  }
};

export {
  login,
  loginCallback,
  silentLogin,
  logout,
  logOutCallback,
  getUser,
  setLoggedUserInfoToStorage,
  getLoggedUserInfoFromStorage,
  removeLoggedUserInfoFromStorage,
  isUserLoggedIn,
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  setSSO_token,
  getSSO_token,
  removeSSO_token,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  setUserRoles,
  getUserRoles,
  removeUserRoles,
};
