"use client";

//base
import { FC, useEffect, useState } from "react";
import Link from "next/link";

//lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//components

//core

import {
  getCarts,
  setCart,
} from "@/core/services/storageFun/storageFun.service";
import { Alert } from "antd";
import { DeleteModal } from "./DeleteModal/DeleteModal";
import { IBusinessProductDeatils } from "@/core/types/response/Product.res";
import { useGlobalContext } from "@/core/context/GlobalContext";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";

interface IpropTypes {
  productDetails: IBusinessProductDeatils | null;
}

const AddToCart: FC<IpropTypes> = ({ productDetails }) => {
  const [isInCart, setisInCart] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  //auth
  const { setCartCount } = useGlobalContext();
  const getCart: IBusinessProductDeatils[] | null = getCarts();

  //check this product is in cart
  useEffect(() => {
    if (getCart) {
      const res = getCart.some((item) => item.id === productDetails?.id);
      setisInCart(res);
    }
  }, []);

  //handelAddItemToCart
  const handelAddItemToCart = () => {
    const updatedCart = getCart
      ? [...getCart, productDetails]
      : [productDetails];
    setCart(updatedCart as any);
    setCartCount(updatedCart.length);

    setisInCart(true);
  };

  return (
    <>
      {/* --- modals --- */}
      {showDeleteModal && (
        <DeleteModal
          isOpen={showDeleteModal}
          toggleModal={() => setShowDeleteModal(false)}
          rowId={Number(productDetails?.id)}
          setisInCart={setisInCart}
        />
      )}

      {/* --- content --- */}
      <section className="bg-white rounded-lg p-4 mt-2 lg:m-0">
        {isInCart ? (
          <>
            <Alert
              message="محصول به سبد شما افزوده شده است"
              showIcon
              type="success"
            />

            <section className="flex justify-center items-center gap-4 mt-3">
              <section className="flex justify-between items-center gap-7 shadow-lg border rounded-lg px-6 py-3">
                <section>
                  <p className="text-sky-500 font-bold text-center">1</p>
                  <p className="text-gray-500 text-[14px] text-center">
                    حداکثر
                  </p>
                </section>

                <FontAwesomeIcon
                  icon={faTrashAlt}
                  size="lg"
                  className="text-red-700 cursor-pointer"
                  onClick={() => setShowDeleteModal(true)}
                />
              </section>
              <section>
                <Link
                  href="/cart"
                  className="bg-sky-500 text-white rounded-lg text-[13px] py-2 px-5"
                >
                  مشاهده سبد خرید
                </Link>
              </section>
            </section>
          </>
        ) : (
          <FullButton
            btnText="افزودن به سبد خرید"
            icon={<FontAwesomeIcon icon={faShoppingCart} size="lg" />}
            className="!w-full !bg-green-700 hover:!bg-green-600"
            onClick={handelAddItemToCart}
          />
        )}
      </section>
    </>
  );
};

export { AddToCart };
