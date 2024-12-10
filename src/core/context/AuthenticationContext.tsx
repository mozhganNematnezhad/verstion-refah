"use client";
import {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  getAccessToken,
  getRefreshToken,
  getSSO_token,
  getUserRoles,
  setUserRoles,
} from "@/core/services/authentication/authentication.service";
import { jwtDecode } from "jwt-decode";
import { IUserInfoType } from "../models/user-info.model";
import { UserRoles } from "../enums/user-role.enum";
import { IdecodeToken } from "../models/decode-token.model";

interface IAuthenticationContext {
  children: ReactNode;
}

export interface IAuthInfo {
  token: string;
  SSO_token: string;
  refreshToken: string;
  userInfo: IUserInfoType;
  role: string[];
  setUserInfoState: React.Dispatch<React.SetStateAction<IUserInfoType>>;
  setTokenState: React.Dispatch<React.SetStateAction<string>>;
  setSSO_tokenState: React.Dispatch<React.SetStateAction<string>>;
  setRefreshTokenState: React.Dispatch<React.SetStateAction<string>>;
  setRoleState: React.Dispatch<React.SetStateAction<string[]>>;
  resetAuthContext: () => void;
}

//createContext
export const authContext = createContext<IAuthInfo | null>(null);

//initialUserInfoState
const initialUserInfoState: IUserInfoType = {
  name: "",
  Username: "",
  lastName: "",
  phone_number: 0,
  mobilenumber: 0,
  UserLocalId: 0,
};

//useContext
const useUserAuth = () => {
  const pc = useContext(authContext);
  if (pc === null) {
    throw new Error("usePermissions Must be inside of Provider");
  }
  return pc;
};

//Provider
const AuthenticationContext: FC<IAuthenticationContext> = ({ children }) => {
  //default initialValue from storage
  const token = getAccessToken() ? String(getAccessToken()) : "";
  const SSO_token = getSSO_token() ? String(getSSO_token()) : "";
  const refreshToken = getRefreshToken() ? String(getRefreshToken()) : "";
  const storageRole = getUserRoles();

  //states
  const [userInfoState, setUserInfoState] = useState<IUserInfoType>({
    name: "",
    Username: "",
    lastName: "",
    phone_number: 0,
    mobilenumber: 0,
    UserLocalId: 0,
  });
  const [tokenState, setTokenState] = useState<string>(token);
  const [SSO_tokenState, setSSO_tokenState] = useState<string>("");
  const [refreshTokenState, setRefreshTokenState] =
    useState<string>(refreshToken);
  const [roleState, setRoleState] = useState<string[]>([UserRoles.UserReal]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //update context and prevent from deleting when move between pages
  const revalidateContext = async () => {
    try {
      if (tokenState || SSO_token) {
        const decode_token: IdecodeToken = jwtDecode(tokenState || SSO_token);

        //update context role
        const refreshRoles = SSO_token
          ? [decode_token.role as string]
          : tokenState
          ? typeof decode_token.role === "string"
            ? [decode_token.role]
            : decode_token.role === null || decode_token === undefined
            ? [UserRoles.UserReal]
            : decode_token.role
          : [];

        const safeStorageRole = storageRole.every((item) =>
          refreshRoles.includes(item)
        );

        if (safeStorageRole) {
          setRoleState(storageRole);
        } else {
          setRoleState(refreshRoles);
          setUserRoles(refreshRoles);
          // showToast(["حواسم هست داش!"], toastTypes.error);
          //!
        }

        //update context userInfo
        setUserInfoState({
          name: decode_token.name,
          Username: decode_token.preferred_username,
          lastName: decode_token.family_name,
          phone_number: decode_token.phone_number,
          mobilenumber: decode_token.phone_number,
          UserLocalId: decode_token.UserLocalId,
        });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    revalidateContext();
  }, []);

  const resetAuthContext = () => {
    setUserInfoState(initialUserInfoState);
    setTokenState("");
    setSSO_tokenState("");
    setRefreshTokenState("");
    setRoleState([]);
  };

  return (
    <authContext.Provider
      value={{
        token: tokenState,
        SSO_token: SSO_tokenState,
        refreshToken: refreshTokenState,
        userInfo: userInfoState,
        role: roleState,
        setUserInfoState,
        setTokenState,
        setSSO_tokenState,
        setRefreshTokenState,
        setRoleState,
        resetAuthContext,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthenticationContext, useUserAuth };
