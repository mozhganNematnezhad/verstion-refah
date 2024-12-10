import { authConfig } from "@/configs/auth.cf";
import axios from "axios";
import {
  getAccessToken,
  getLoggedUserInfoFromStorage,
  getRefreshToken,
  getUserRoles,
  setAccessToken,
  setRefreshToken,
  setUserRoles,
} from "core/services/authentication/authentication.service";
import { jwtDecode } from "jwt-decode";
import { IdecodeToken } from "../models/decode-token.model";
import { UserRoles } from "../enums/user-role.enum";

export const refreshAuthData = async () => {
  //create axios provider
  const http = axios.create({
    baseURL: authConfig.base_url,
  });

  const accessToken = getAccessToken();
  const userInfo = getLoggedUserInfoFromStorage();
  const refreshToken = getRefreshToken();
  const role = getUserRoles();

  //function return
  let result = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    role: role,
  };

  const payLoad = {
    refreshTokenValue: refreshToken,
    userId: userInfo.UserLocalId,
    userName: userInfo.Username,
  };

  const { data } = await http.post(`/api/User/RefreshToken`, payLoad);

  if (data.accessToken && data.refreshToken) {
    const token = data.accessToken;
    const decode_token: IdecodeToken = jwtDecode(data.accessToken);
    const role =
      typeof decode_token.role === "string"
        ? [decode_token.role]
        : decode_token.role === null || decode_token.role === undefined
        ? [UserRoles.UserReal]
        : decode_token.role;

    //save localstorage
    setAccessToken(token);
    setRefreshToken(data.refreshToken);
    setUserRoles(role);

    result = {
      accessToken: token,
      refreshToken: data.refreshToken,
      role: role,
    };
  }

  return result;
};
