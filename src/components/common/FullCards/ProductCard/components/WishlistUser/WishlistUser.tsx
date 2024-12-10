"use client";

//base
import { FC, useState } from "react";

//lib
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

//core
import {
  useGetWishlistsForDropDown,
  useRemoveWishlist,
  useSetWishlist,
} from "@/core/services/api/client/Wishlist.api";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { showToast } from "@/core/utils/show-toast.utils";
import { toastTypes } from "@/core/enums/toast-types.enum";

interface IpropTypes {
  id: number;
  isAdded?: boolean;
}

const WishlistUser: FC<IpropTypes> = ({ id, isAdded }) => {
  const [Added, setAdded] = useState<boolean>(isAdded ? isAdded : false);

  //auth context
  const { token } = useUserAuth();
  //api

  const getMutation = useSetWishlist();
  const deletMutation = useRemoveWishlist();
  const GetWishlistsForDropDown = useGetWishlistsForDropDown();

  //setHandle
  const setHandle = (id: number) => {
    getMutation.mutate(id, {
      // onSuccess: () => {
      //   showToast(
      //     [" با موفقیت به لیست علاقه مندی ها اضافه شد "],
      //     toastTypes.success
      //   );
      // },
      // onError: () => {
      //   showToast(["  خطایی رخ داده است"], toastTypes.info);
      // },
    });
  };

  //removeHandler

  const removeHandler = async (id: number) => {
    deletMutation.mutate(id, {
      // onSuccess: () => {
      //   showToast(
      //     [" با موفقیت از لیست علاقه مندی ها حذف شد "],
      //     toastTypes.info
      //   );
      // },
      // onError: () => {
      //   showToast(["  خطایی رخ داده است"], toastTypes.info);
      // },
    });
  };

  return (
    <>
      {token ? (
        <section className="cursor-pointer">
          {Added === true ? (
            <BsFillHeartFill
              size={28}
              onClick={() => (setAdded(false), removeHandler(id))}
              className={`${Added ? "text-red-500" : ""}`}
            />
          ) : (
            <AiOutlineHeart
              color={"#334155"}
              size={28}
              onClick={() => (setAdded(true), setHandle(id))}
            />
          )}
        </section>
      ) : (
        <AiOutlineHeart
          size={28}
          color={"#334155"}
          onClick={() =>
            showToast(
              [" ابتدا ورود کنید و سپس به لیست علاقه مندی ها اضافه کنید "],
              toastTypes.info
            )
          }
          cursor={"pointer"}
        />
      )}
    </>
  );
};

export { WishlistUser };
