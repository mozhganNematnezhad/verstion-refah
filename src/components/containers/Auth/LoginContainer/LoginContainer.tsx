"use client";

import { FC, useEffect } from "react";
import { login } from "@/core/services/authentication/authentication.service";
import { showToast } from "@/core/utils/show-toast.utils";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { FullPageLoading } from "@/components/common/Loading/FullPageLoading/FullPageLoading";

const LoginContainer: FC = () => {
  useEffect(() => {
    showToast(["در حال انتقال به صفحه ورود ..."], toastTypes.success);
    login();
  }, []);

  return <FullPageLoading />;
};

export { LoginContainer };
