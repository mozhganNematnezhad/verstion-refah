import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "@/core/services/authentication/authentication.service";
import { clearStorage } from "../common/storage/storage.service";
import { projectSetting } from "@/configs/setting.cf";
import { renewAccessToken } from "@/core/hooks/renewAccessToken.hook";
import { showToast } from "@/core/utils/show-toast.utils";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { IsIncludes } from "@/core/utils/url.utils";

const http = axios.create({
  baseURL: projectSetting.auth.base_url,
});

const onSuccess = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onError = async (error: any) => {
  const originalRequest = error?.config;
  const errorRespose = error?.response;
  const errorStatus = Number(errorRespose?.status);
  const expectedError = errorStatus >= 400 && errorStatus < 500;

  try {
    switch (true) {
      // ------------ x === 401 ------------//
      case errorStatus == 401 && !originalRequest?._retry:
        originalRequest._retry = true;
        await renewAccessToken({ successReload: true });
        break;

      case errorStatus === 401 && originalRequest._retry:
        clearStorage(projectSetting.storage);
        window.location.href = "/login";

        break;

      // ------------ x === 403 ------------//
      case errorStatus === 403:
        showToast(["شما به این قسمت دسترسی ندارید"], toastTypes.error);
        break;

      //--------------expectedError (400 <= x < 500)------------//
      case expectedError &&
        !IsIncludes(
          originalRequest?.url,
          "/api/User/GetUserInfoByNationalCode?NationalCode="
        ) &&
        !IsIncludes(
          originalRequest?.url,
          "/api/UserMembership/ValidationUserMembershipPayment"
        ):
        showToast(
          errorRespose.data.message
            ? errorRespose.data.message
            : ["خطایی رخ داده است، لطفا دوباره امتحان کنید"],
          toastTypes.error
        );

        break;

      //--------------un-expectedError (>=500)------------//
      case !expectedError &&
        !IsIncludes(originalRequest.url, "/api/User/RefreshToken"):
        showToast(
          ["خطایی در سرور پیش آمده، لطفا بعدا امتحان کنید"],
          toastTypes.error
        );
        break;

      default:
        break;
    }
  } catch (er) {}

  return Promise.reject(error);
};

//response headers
http.interceptors.response.use(onSuccess, onError);

//request headers
http.interceptors.request.use((config) => {
  const token = getAccessToken();

  config.headers.Authorization = token
    ? token
    : "set.Invalid.TokenForGetRefreshToken";

  return config;
});

export { http };
