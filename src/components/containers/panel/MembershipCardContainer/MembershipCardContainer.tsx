"use client";
import { linkConfig } from "@/configs/links.cf";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import React from "react";
import QRCode from "react-qr-code";

const MembershipCardContainer = () => {
  //auth context
  const { userInfo } = useUserAuth();

  //description obj
  const items = {
    name: userInfo.name,
    lastName: userInfo.lastName,
    userName: userInfo.Username,
    phone: userInfo.phone_number,
  };

  return (
    <section>
      <div className="flex items-center justify-center gap-6 max-w-lg  mx-auto bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-xl rounded-xl p-8 mb-8">
        <div>
          <QRCode
            size={130}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={`refa24.ir/membership/${items.userName}`}
            viewBox={`0 0 130 130`}
          />
        </div>

        <div>
          <h2 className="!text-2xl font-bold text-center mb-5">کارت عضویت</h2>
          <p className="mb-2">
            <strong>نام و نام خانوادگی:</strong> {items.name}
            {items.lastName || " "}
          </p>
          <p className="mb-2">
            <strong>تاریخ عضویت:</strong> {"1403/03/31"}
          </p>
          <p className="mb-2">
            <strong>تاریخ پایان اعتبار:</strong> {"1403/12/30"}
          </p>
        </div>
      </div>
    </section>
  );
};

export { MembershipCardContainer };
