//base
import { FC, useState } from "react";

//lib
import { Alert } from "antd";
import { FaEdit, FaSignInAlt } from "react-icons/fa";

//components

import { useRouter } from "next/navigation";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { projectSetting } from "@/configs/setting.cf";

const UnAuthBtn: FC = () => {
  const [loginBtnLoading, setLoginBtnLoading] = useState<boolean>(false);
  const [registerBtnLoading, setRegisterBtnLoading] = useState<boolean>(false);

  //routes
  const { push } = useRouter();

  return (
    <>
      <Alert
        type="warning"
        message="شما وارد حساب کاربری خود نشده اید"
        description="برای ثبت کسب و کار خود اگر از قبل ثبت نام کرده اید وارد شوید در غیر اینصورت لطفا ابتدا ثبت نام کنید. "
        showIcon
        className="lg:w-1/2 mx-auto"
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
    </>
  );
};

export { UnAuthBtn };
