import axios from "axios";
import {
  getLoggedUserInfoFromStorage,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "core/services/authentication/authentication.service";
import { clearStorage } from "core/services/common/storage/storage.service";
import { clearAllCookies } from "core/services/common/storage/cookies.service";
import { projectSetting } from "@/configs/setting.cf";

type paramType = {
  successReload?: boolean;
};

export const renewAccessToken = async (param: paramType) => {
  try {
    const userInfo = getLoggedUserInfoFromStorage();
    const refreshToken = getRefreshToken();

    const payLoad = {
      refreshTokenValue: refreshToken,
      userId: userInfo?.UserLocalId,
      userName: userInfo?.Username,
    };

    const { data } = await axios.post(
      `${projectSetting.auth.base_url}/api/User/RefreshToken`,
      payLoad
    );

    if (data.accessToken && data.refreshToken) {
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);

      param.successReload &&
        setTimeout(() => {
          window.location.reload();
        }, 300);
    } else {
      clearAllCookies();
      clearStorage(projectSetting.storage);
      window.location.href = "/login";
    }
  } catch (error) {
    console.log(error);
  }
};
