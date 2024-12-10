"use client";

//base
import { FC } from "react";
import Link from "next/link";

//core
import { IGetMembershipFeesRessponse } from "@/core/types/response/MembershipFee.res";

//assets
import { TomanIconSvg } from "assets/image/svg";
import { Alert } from "antd";
import { getUserPaymentInfo } from "@/core/services/storageFun/storageFun.service";

interface IPropTypes {
  item: IGetMembershipFeesRessponse;
}
const PlanCard: FC<IPropTypes> = ({ item }) => {
  const getUSeInformation = getUserPaymentInfo();
  return (
    <section className="max-w-md md:max-w-none mx-auto px-12 py-8 my-6 bg-white rounded-3xl shadow-lg">
      <section className="md:flex items-center justify-between">
        <section className="max-w-lg mx-auto md:mx-0 mb-10 md:mb-0">
          <h5 className="!text-2xl font-semibold mb-4">{item?.title}</h5>
          <p className="text-gray-500">{item?.description} </p>
        </section>
        <section className="text-center ">
          <section className=" !text-5xl font-bold text-gray-900 mb-4 flex mx-auto w-fit">
            <section className="text-lg font-bold text-sky-700">
              {item?.amountSeparated}
            </section>
            <section>
              <TomanIconSvg />
            </section>{" "}
          </section>

          {getUSeInformation?.membershipStatus &&
            getUSeInformation?.membershipFeeId === item.id && (
              <Link
                href={{
                  pathname: "/bank-portal/memberShip/transfer",
                  search: `id=${item.id}`,
                }}
                className={` inline-block py-4 px-6 text-center text-green-500 border border-gray-200
               hover:border-green-500 font-semibold rounded-full transition duration-200`}
              >
                تمدید اشتراک
              </Link>
            )}

          {getUSeInformation?.membershipStatus &&
            getUSeInformation?.membershipFeeId !== item.id && (
              <Alert message="عضویت دیگری برای شما فعال است " type="warning" />
            )}

          {getUSeInformation?.membershipStatus !== true && (
            <Link
              href={{
                pathname: "/bank-portal/memberShip/transfer",
                search: `id=${item.id}`,
              }}
              className={`cursor-pointer inline-block py-4 px-6 text-center text-green-500 border border-gray-200
           hover:border-green-500 font-semibold rounded-full transition duration-200`}
            >
              خرید اشتراک
            </Link>
          )}
        </section>
      </section>
    </section>
  );
};

export { PlanCard };
