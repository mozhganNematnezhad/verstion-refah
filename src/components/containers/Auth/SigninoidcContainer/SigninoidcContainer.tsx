"use client";

import { FC, useEffect, useState } from "react";
import * as auth from "@/core/services/authentication/authentication.service";
import { jwtDecode } from "jwt-decode";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { useRouter } from "next/navigation";
import { useGetToken } from "@/core/services/api/client/User.api";
import { IdecodeToken } from "@/core/models/decode-token.model";
import { IUserInfoType } from "@/core/models/user-info.model";
import { ErrorPageContainer } from "../../Errors/ErrorPageContainer/ErrorPageContainer";
import { FullPageLoading } from "@/components/common/Loading/FullPageLoading/FullPageLoading";

const SigninoidcContainer: FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  //auth context
  const {
    setRoleState,
    setTokenState,
    setSSO_tokenState,
    setRefreshTokenState,
    setUserInfoState,
  } = useUserAuth();

  //route
  const { replace } = useRouter();

  //api
  const getToken = useGetToken();

  //signinAsync function
  useEffect(() => {
    const signinAsync = async () => {
      try {
        //SSO Result
        const SSO_result = await auth.loginCallback();
        const SSO_token = SSO_result.access_token;

        //calling api
        getToken.mutate(SSO_token, {
          onSuccess: (value) => {
            const service_token = value.data.accessToken;

            //*==========has service_token ============*//
            if (service_token) {
              //variables
              const decode_token: IdecodeToken = jwtDecode(service_token);
              const refreshToken = value.data.refreshToken;

              const userInfoObj: IUserInfoType = {
                name: decode_token.name,
                Username: decode_token.preferred_username,
                lastName: decode_token.family_name,
                phone_number: decode_token.phone_number,
                mobilenumber: decode_token.phone_number,
                UserLocalId: decode_token.UserLocalId,
              };

              //Role
              const role =
                typeof decode_token.role === "string"
                  ? [decode_token.role]
                  : decode_token.role;

              //save in localStorage
              auth.setAccessToken(service_token);
              auth.setRefreshToken(refreshToken);
              auth.setUserRoles(role);
              auth.setLoggedUserInfoToStorage(userInfoObj);

              //save in context
              setTokenState(service_token);
              setRefreshTokenState(refreshToken);
              setRoleState(role);
              setUserInfoState(userInfoObj);

              // redirection
              replace("/");
            } else {
              //*========== service_token  was null ============*//

              //variables
              const decode_token: IdecodeToken = jwtDecode(SSO_token);

              const userInfoObj: IUserInfoType = {
                name: decode_token.name,
                Username: decode_token.preferred_username,
                lastName: decode_token.family_name,
                phone_number: decode_token.phone_number,
                mobilenumber: decode_token.phone_number,
                UserLocalId: decode_token.UserLocalId,
              };
              //save in localStorage
              auth.setSSO_token(SSO_token);
              auth.setUserRoles([decode_token.role as string]);
              auth.setLoggedUserInfoToStorage(userInfoObj);

              //save in context
              setSSO_tokenState(SSO_token);
              setRoleState([decode_token.role as string]);
              setUserInfoState(userInfoObj);

              //redirection
              replace("/confirm-info");
            }
          },

          onError: () => {
            setHasError(true);
          },
        });
      } catch (error) {
        setHasError(true);
      }
    };

    //call funtion
    signinAsync();
  }, []);

  return (
    <section className="w-full h-full flex justify-center items-center">
      {hasError ? <ErrorPageContainer /> : <FullPageLoading />}
    </section>
  );
};

export { SigninoidcContainer };
