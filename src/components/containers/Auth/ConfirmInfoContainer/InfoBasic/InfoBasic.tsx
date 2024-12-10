import React from "react";
import { UserRoles } from "@/core/enums/user-role.enum";
import { useRouter } from "next/navigation";
import { Alert } from "antd";
import { FaCheckSquare, FaSignOutAlt } from "react-icons/fa";
import { IUserInfoType } from "@/core/models/user-info.model";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";

interface IPropTypes {
  handelSubmit: () => void;
  role: string[];
  userInfo: IUserInfoType;
  isLoading: boolean;
}

const InfoBasic: React.FC<IPropTypes> = ({
  handelSubmit,
  role,
  userInfo,
  isLoading,
}) => {
  //router
  const router = useRouter();

  //check role
  const IsUserReal = role.includes(UserRoles.UserReal);

  const userRealInfo = [
    {
      key: "نام",
      value: userInfo?.name,
    },
    {
      key: "نام خانوادگی",
      value: userInfo?.lastName,
    },
    {
      key: "کدملی",
      value: userInfo?.Username,
    },
  ];

  const userLegalInfo = [
    {
      key: "نام شرکت",
      value: userInfo?.name,
    },
    {
      key: "شماره همراه",
      value: userInfo?.mobilenumber,
    },
    {
      key: "شناسه ملی",
      value: userInfo?.Username,
    },
  ];
  return (
    <>
      <section
        className="shadow-lg bg-white rounded-xl 
        overflow-hidden border border-secondary p-7 mx-2"
      >
        <h2 className="text-center font-bold px-2 text-2xl my-3">
          به رفا۲۴ خوش آمدید
        </h2>

        <Alert
          type="info"
          message="برای شروع کار با برنامه لازم است صحت اطلاعات خود را تایید کنید"
          showIcon
        />

        <section className="flex flex-col justify-center items-center gap-3 mt-4 mb-6">
          {(IsUserReal ? userRealInfo : userLegalInfo).map((item, index) => (
            <section
              key={index}
              className="border-dashed border rounded-md w-full p-2"
            >
              <span className="font-extrabold">{item.key} : </span>
              <span className="text-sky-700">{item.value}</span>
            </section>
          ))}
        </section>

        <FullButton
          btnText="تایید صحت اطلاعات"
          icon={<FaCheckSquare size={16} />}
          onClick={handelSubmit}
          isLoading={isLoading}
          isClearAble
          clearBtnText="خروج"
          clearIcon={<FaSignOutAlt />}
          clearOnClick={() => router.replace("/signout-oidc")}
        />
      </section>
    </>
  );
};

export { InfoBasic };
