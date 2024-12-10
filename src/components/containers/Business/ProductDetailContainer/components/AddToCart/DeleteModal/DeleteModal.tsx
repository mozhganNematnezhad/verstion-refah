//base
import { FC } from "react";

//components
import { FullModal } from "@/components/common/FullModal/FullModal";
import { ConfirmChecker } from "@/components/common/ConfirmChecker/ConfirmChecker";

//core

import {
  getCarts,
  setCart,
} from "@/core/services/storageFun/storageFun.service";
import { useGlobalContext } from "@/core/context/GlobalContext";
import { IBusinessProductDeatils } from "@/core/types/response/Product.res";
import { toastTextTypeEnum } from "@/core/enums/toastText-type.enum";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { showToast } from "@/core/utils/show-toast.utils";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
  rowId: number;
  setisInCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal: FC<IPropType> = ({
  isOpen,
  toggleModal,
  rowId,
  setisInCart,
}) => {
  //auth
  const { setCartCount } = useGlobalContext();
  const cartList: IBusinessProductDeatils[] | null = getCarts();

  //handelDelete
  const handelDelete = () => {
    const updatedCart =
      cartList && cartList?.filter((item) => item.id !== rowId);

    setCart(updatedCart as any);
    setCartCount(updatedCart ? updatedCart?.length : 0);
    setisInCart(false);

    showToast([toastTextTypeEnum.delete], toastTypes.success);
    toggleModal();
  };

  return (
    <FullModal
      title="حذف رکورد انتخابی"
      isOpen={isOpen}
      toggleModal={toggleModal}
    >
      <ConfirmChecker
        status="error"
        title="آیا مطمئنید؟!"
        subTitle="محصول از سبد خریدتان حذف شود؟"
        extra={
          <section className="flex justify-center items-center">
            <FullButton
              btnText="حذف محصول از سبد"
              className="!bg-red-500 !text-white"
              onClick={handelDelete}
              isClearAble
              clearBtnText="لغو درخواست"
              clearOnClick={() => {
                toggleModal();
              }}
            />
          </section>
        }
      />
    </FullModal>
  );
};

export { DeleteModal };
