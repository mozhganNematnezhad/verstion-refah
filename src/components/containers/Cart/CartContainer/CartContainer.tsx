"use client";

//base
import { FC, useEffect, useState } from "react";

//lib
import { Empty } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

//components

import { ListTable } from "@/components/common/ListTable/ListTable";
import { getCarts } from "@/core/services/storageFun/storageFun.service";

import { Columns } from "./Column/Column";
import { NeedAuthModal } from "@/components/shared/NeedAuthModal/NeedAuthModal";

//core

import { useUserAuth } from "@/core/context/AuthenticationContext";
import { CardWrapper } from "@/components/common/Wrapper/CardWrapper/CardWrapper";
import { ConvertToSepratorNumber } from "@/core/utils/convertor.utils";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { useRouter } from "next/navigation";

interface ITotoaData {
  beforDiscount: number;
  afterDiscount: number;
}

const CartContainer: FC = () => {
  const [totalData, setTotalData] = useState<ITotoaData>({
    beforDiscount: 0,
    afterDiscount: 0,
  });
  const [showNeedAuthModal, setShowNeedAuthModal] = useState<boolean>(false);

  //router
  const router = useRouter();

  //storage
  const cartList = getCarts();

  //auth context
  const { token } = useUserAuth();

  //calculation total cart
  useEffect(() => {
    if (cartList) {
      setTotalData({
        beforDiscount: cartList.reduce((total, item) => total + item.cost, 0),
        afterDiscount: cartList.reduce(
          (total, item) =>
            total + (item.cost - (item.cost * item.discount) / 100),
          0
        ),
      });
    }
  }, []);

  return (
    <>
      <NeedAuthModal
        isOpen={showNeedAuthModal}
        toggleModal={() => setShowNeedAuthModal(false)}
      />

      <section className="w-[95%] mx-auto min-h-[600px] pt-6">
        <CardWrapper headTitle="سبد خرید شما">
          {cartList ? (
            <>
              <ListTable
                dataSource={cartList}
                columns={Columns()}
                totalNumber={cartList.length}
              />

              <section className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <section className="col-span-4 border border-dashed border-sky-700 rounded-lg mt-4 p-4 space-y-2">
                  <section className="flex items-center gap-3">
                    <p className="font-bold">قیمت کل :</p>
                    <p className="text-sky-700 line-through">
                      {ConvertToSepratorNumber(totalData.beforDiscount)}
                      <span>ریــال</span>
                    </p>
                  </section>

                  <section className="flex items-center gap-3">
                    <p className="font-bold">قیمت کل با تخفیف : </p>
                    <p className="bg-sky-500 text-white p-1 px-3 rounded-lg">
                      {ConvertToSepratorNumber(totalData.afterDiscount)}
                      <span>ریــال</span>
                    </p>
                  </section>
                </section>

                <section className="flex justify-center items-center">
                  <FullButton
                    btnText="تکمیل فرایند خرید"
                    className="w-full !bg-green-700 hover:!bg-green-600"
                    icon={<FontAwesomeIcon icon={faCoins} size="lg" />}
                    onClick={
                      token
                        ? // ? () => router.push("/cart/transfer")
                          () => {}
                        : () => setShowNeedAuthModal(true)
                    }
                  />
                </section>
              </section>
            </>
          ) : (
            <Empty
              description={
                <>
                  <p className="font-bold text-xl">سبد خرید شما خالی میباشد!</p>
                  <p className="mt-2">
                    میتوانید با ورود به صفحه شهرک از اخرین تخفیفات و امکانات
                    کارگزاری های فعال در شهرک رفا24 بهره مند شوید.
                  </p>
                </>
              }
            />
          )}
        </CardWrapper>
      </section>
    </>
  );
};

export { CartContainer };
