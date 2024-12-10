"use client";

import React, { FC, useEffect } from "react";
import { clearStorage } from "core/services/common/storage/storage.service";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { useRouter } from "next/navigation";
import { clearAllCookies } from "@/core/services/common/storage/cookies.service";
import { showToast } from "@/core/utils/show-toast.utils";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { projectSetting } from "@/configs/setting.cf";
import { FullPageLoading } from "@/components/common/Loading/FullPageLoading/FullPageLoading";

const SignOutOidContainer: FC = () => {
  //auth context
  const { resetAuthContext } = useUserAuth();

  //router
  const router = useRouter();

  useEffect(() => {
    showToast(["با موفقیت از حساب کاربری خود خارج شدید"], toastTypes.info);
    clearStorage(projectSetting.storage);
    clearAllCookies();
    resetAuthContext();
    router.replace("/");
  }, []);

  return <FullPageLoading />;
};

export { SignOutOidContainer };
