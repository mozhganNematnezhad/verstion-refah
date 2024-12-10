"use client";

import React, { FC } from "react";
import { InfoBasic } from "./InfoBasic/InfoBasic";
import * as auth from "core/services/authentication/authentication.service";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { useRouter } from "next/navigation";
import { useRegisterUserBase } from "@/core/services/api/client/User.api";
import { showToast } from "@/core/utils/show-toast.utils";
import { toastTypes } from "@/core/enums/toast-types.enum";

const ConfirmInfoContainer: FC = () => {
  const router = useRouter();

  // Auth context
  const { userInfo, SSO_token, role } = useUserAuth();

  // API
  const setMutation = useRegisterUserBase();

  // Handle error
  const handleError = () => {
    showToast(
      ["مشکلی پیش آمده است، ، لطفا از برنامه خارج شوید و دوباره وارد شوید!"],
      toastTypes.error
    );

    setTimeout(() => {
      router.replace("/signout-oidc");
    }, 3000);
  };

  // Handle submit
  const handleSubmit = () => {
    setMutation.mutate(SSO_token, {
      onSuccess: (value) => {
        const result = value.data;

        if (result.accessToken) {
          auth.removeSSO_token();
          auth.setAccessToken(result.accessToken);
          auth.setRefreshToken(result.refreshToken);

          showToast(["ثبت با موفقیت انجام شد"], toastTypes.info);

          setTimeout(() => {
            window.location.pathname = "/";
          }, 1000);
        } else {
          handleError();
        }
      },
      onError: () => {
        handleError();
      },
    });
  };

  return (
    <section className="h-screen">
      <section className="flex justify-center items-center h-screen flex-col">
        <InfoBasic
          handelSubmit={handleSubmit}
          role={role}
          userInfo={userInfo}
          isLoading={setMutation.isLoading}
        />
      </section>
    </section>
  );
};

export { ConfirmInfoContainer };
