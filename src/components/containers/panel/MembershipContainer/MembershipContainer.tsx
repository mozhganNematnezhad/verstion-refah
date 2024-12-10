"use client";
import React, { FC, useEffect, useState } from "react";
import { FaUser, FaPhone, FaCalendarAlt, FaIdCard } from "react-icons/fa";
import image from "@/assets/image/user/02.png";

import Link from "next/link";
import { useGetMembershipInfo } from "@/core/services/api/client/User.api";

interface IPropTypes {
  userName: string;
}

const MembershipContainer: FC<IPropTypes> = ({ userName }) => {
  const [userInfo, setUserInfo] = useState<any>();
  const getMutation = useGetMembershipInfo();

  useEffect(() => {
    getMutation.mutate(userName);
  }, []);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const result = getMutation.data.data?.result;
      setUserInfo(result);
    }
  }, [getMutation.isSuccess]);

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          {getMutation.isLoading ? (
            <div className="text-lg font-bold text-blue-600 bg-gray-100 p-4 rounded-lg shadow-md text-center">
              لطفا صبر کنید...
            </div>
          ) : userInfo ? (
            <div className="bg-gradient-to-r from-blue-700 to-teal-700 !text-white p-8 rounded-3xl shadow-2xl w-full max-w-md md:max-w-2xl relative">
              <div className="flex justify-center -mt-24">
                <img
                  className="w-36 h-36 rounded-full shadow-lg border-4 border-white"
                  src={image.src}
                  alt="Profile"
                />
              </div>
              <div className="!text-center mt-20">
                <h2 className="!text-3xl font-bold mb-2">{userInfo?.name}</h2>
                <div className="flex items-center justify-center !text-lg mt-6">
                  <FaUser className="ml-2 !text-gray-200" />
                  <p>
                    نام خانوادگی:{" "}
                    <span className="font-semibold">{userInfo?.lastName}</span>
                  </p>
                </div>
                <div className="flex items-center justify-center !text-lg mt-2">
                  <FaPhone className="ml-2 !text-gray-200" />
                  <p>
                    شماره تماس:{" "}
                    <span className="font-semibold">
                      {userInfo?.phoneNumber}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center !text-lg mt-2">
                  <FaIdCard className="ml-2 !text-gray-200" />
                  <p>
                    کد ملی:{" "}
                    <span className="font-semibold">
                      {userInfo?.nationalCode}
                    </span>
                  </p>
                </div>

                {userInfo?.membershipStatus && (
                  <div className="mt-4 flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                    <div className="flex items-center justify-center !text-lg">
                      <FaCalendarAlt className="ml-2 !text-gray-200" />
                      <p>
                        تعداد روز های باقی مانده:{" "}
                        <span className="font-semibold">
                          {userInfo?.membershipRemainDays}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-center !text-lg">
                      <FaCalendarAlt className="ml-2 !text-gray-200" />
                      <p>
                        پایان اعتبار:{" "}
                        <span className="font-semibold">
                          {userInfo?.membershipEndDateShamsi}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`mt-8 p-4 rounded-lg !text-center !text-lg ${
                  userInfo?.membershipStatus
                    ? "bg-green-500 !text-white"
                    : "bg-red-500 !text-white"
                }`}
              >
                {userInfo?.membershipStatus
                  ? `این کاربر تا تاریخ ${userInfo?.membershipEndDateShamsi} در رفا ۲۴ اعتبار دارد.`
                  : "مدت اعتبار شما در رفا ۲۴ منقضی شده است."}
              </div>
              <div className="mt-8 flex flex-col md:flex-row justify-between gap-4 md:gap-9">
                <Link
                  href={"/"}
                  className=" !text-white cursor-pointer border font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  بازگشت به صفحه اصلی
                </Link>

                <Link
                  href={"/plans-list"}
                  className={`!text-white cursor-pointer border font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1
                    ${
                      userInfo?.membershipStatus
                        ? ""
                        : "bg-green-500 !text-white"
                    }
                    `}
                >
                  تمدید اشتراک
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center flex flex-col items-center justify-center !text-xl min-h-64 bg-gradient-to-r from-blue-700 to-teal-700 !text-white !p-8 rounded-3xl shadow-2xl w-full max-w-md md:max-w-2xl relative">
              متاسفانه رکوردی یافت نشد
              <Link
                href={"/"}
                className=" !text-white mt-9 cursor-pointer border font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { MembershipContainer };
