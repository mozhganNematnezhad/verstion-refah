"use client";

//base
import React, { FC, useEffect, useState } from "react";

//lib
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/core/context/AuthenticationContext";

import { PopOver } from "./PopOver/PopOver";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { setUserPaymentInfo } from "@/core/services/storageFun/storageFun.service";
import { useGetUserInfo } from "@/core/services/api/client/User.api";

const AuthBtn: FC = () => {
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  //router
  const { replace } = useRouter();
  const { token } = useUserAuth();

  //api
  const getMutation = useGetUserInfo();

  //getMutation
  useEffect(() => {
    if (token) {
      getMutation.mutate();
    }
  }, [token]);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const result = getMutation.data.data?.result;
      const membershipFee = {
        membershipEndDateShamsi: result?.membershipEndDateShamsi,
        membershipRemainDays: result?.membershipRemainDays,
        membershipStatus: result?.membershipStatus,
        membershipFeeId: result?.membershipFeeId,
        membershipFeeTitle: result?.membershipFeeTitle,
        investmentsPortfolios: result?.investmentsPortfolios,
      };
      setUserPaymentInfo(membershipFee);
    }
  }, [getMutation.isSuccess]);

  return (
    <>
      {token ? (
        <PopOver />
      ) : (
        <FullButton
          btnText="ورود‌ /‌ ثبت ‌نام"
          size="small"
          className="!py-1"
          icon={<FontAwesomeIcon icon={faSignInAlt} />}
          onClick={() => {
            setLoginLoading(true);
            replace("/login");
          }}
          isLoading={loginLoading}
        />
      )}
    </>
  );
};

export { AuthBtn };
