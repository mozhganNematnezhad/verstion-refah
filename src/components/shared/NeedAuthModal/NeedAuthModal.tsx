//base
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

//lib
import { Alert } from "antd";
import { FaEdit, FaSignInAlt } from "react-icons/fa";

//components
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { FullModal } from "@/components/common/FullModal/FullModal";

//core
import { projectSetting } from "@/configs/setting.cf";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
}
const NeedAuthModal: FC<IPropType> = ({ isOpen, toggleModal }) => {
  const [loginBtnLoading, setLoginBtnLoading] = useState<boolean>(false);
  const [registerBtnLoading, setRegisterBtnLoading] = useState<boolean>(false);

  //routes
  const { push } = useRouter();

  return (
    <FullModal
      title="نیاز به احراز هویت"
      isOpen={isOpen}
      toggleModal={toggleModal}
      centered
    >
      <Alert
        type="warning"
        message="شما وارد حساب کاربری خود نشده اید"
        description="برای ادامه‌ کار، نیاز به احراز هویت دارید. اگر از قبل ثبت نام کرده اید وارد شوید در غیر اینصورت لطفا ابتدا ثبت نام کنید. "
        showIcon
      />

      <section className="flex flex-wrap justify-center items-center gap-4 mt-12">
        <FullButton
          btnText="ورود به حساب کاربری"
          icon={<FaSignInAlt size={16} />}
          onClick={() => {
            setLoginBtnLoading(true);
            push("/login");
          }}
          isLoading={loginBtnLoading}
        />

        <FullButton
          btnText="ثبت نام در سامانه"
          icon={<FaEdit size={16} />}
          className="!bg-green-500"
          onClick={() => {
            setRegisterBtnLoading(true);
            push(projectSetting.link.registerSSO);
          }}
          isLoading={registerBtnLoading}
        />
      </section>
    </FullModal>
  );
};

export { NeedAuthModal };
