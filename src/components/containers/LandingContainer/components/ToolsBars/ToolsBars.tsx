"use client";

import React, { FC, useState } from "react";
import { FaAddressCard, FaBusinessTime } from "react-icons/fa";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { UserRoles } from "@/core/enums/user-role.enum";
import { RegisterBusinessModal } from "./components/Modals/RegisterBusinessModal/RegisterBusinessModal";
import { BenefitCustomerModal } from "./components/Modals/BenefitCustomerModal/BenefitCustomerModal";
import { MyBusinessList } from "./components/MyBusinessList/MyBusinessList";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { getUserPaymentInfo } from "@/core/services/storageFun/storageFun.service";

const ToolsBars: FC = () => {
  const [showRegisterBusinessModal, setShowRegisterBusinessModal] =
    useState<boolean>(false);

  const [showBenefitCustomerModal, setShowBenefitCustomerModal] =
    useState<boolean>(false);

  const [refetchMyBusiness, setRefetchMyBusiness] = useState<boolean>(false);
  const [planBtnIsLoading, setPlanBtnIsLoading] = useState<boolean>(false);

  //auth context
  const { token, role } = useUserAuth();
  //router
  const router = useRouter();
  const { replace, push } = useRouter();

  //check role
  const hasSellerRole = role && role.includes(UserRoles.Seller);
  const getUSeInformation = getUserPaymentInfo();
  return (
    <>
      {/* ====== Modals ====== */}

      {showRegisterBusinessModal && (
        <RegisterBusinessModal
          isOpen={showRegisterBusinessModal}
          toggleModal={() => setShowRegisterBusinessModal(false)}
          setRefetch={setRefetchMyBusiness}
        />
      )}

      {showBenefitCustomerModal && (
        <BenefitCustomerModal
          isOpen={showBenefitCustomerModal}
          toggleModal={() => setShowBenefitCustomerModal(false)}
        />
      )}

      {/* ===== content ===== */}

      <section className="col-span-2 flex flex-col justify-between items-center gap-2 mt-2 lg:mt-0">
        {/* --- RegisterBusinessModal ---- */}
        <section
          className="w-full bg-sky-500 text-white text-center flex flex-col 
            justify-center items-center gap-2 rounded-lg shadow shadow-sky-500 px-4 py-5 hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => setShowRegisterBusinessModal(true)}
        >
          <FaBusinessTime size={25} />
          <p className="font-bold">ثبت نام کسب‌ و کارتان در شهرک</p>
        </section>

        {/* --- business list ---- */}
        {token && hasSellerRole && (
          <MyBusinessList refetch={refetchMyBusiness} />
        )}

        {/* --- BenefitCustomerModal ---- */}
        <section
          className="w-full bg-green-500 text-white text-center flex flex-col 
            justify-center items-center gap-2 rounded-lg shadow shadow-oragbg-green-200 px-4 py-5 hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => setShowBenefitCustomerModal(true)}
        >
          <FaAddressCard size={20} />
          <p className="font-bold">بهره مندی از خدمات مشتریان</p>
        </section>

        {token && (
          <section
            className="w-full bg-pink-500 text-white text-center flex flex-row  
            justify-between items-center gap-2  rounded-lg shadow shadow-oragbg-green-200 px-8 py-5 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <p className="font-bold"> پلن های عضویت در شهرک </p>
            <FullButton
              btnText={`${
                getUSeInformation.membershipStatus ? "تمدید" : "خرید"
              } اشتراک `}
              size="small"
              className="!py-1 !bg-pink-400 border border-[#E5E7EB] "
              icon={<FontAwesomeIcon icon={faCoins} />}
              onClick={() => {
                setPlanBtnIsLoading(true);
                replace("/plans-list");
              }}
              isLoading={planBtnIsLoading}
            />
          </section>
        )}
      </section>
    </>
  );
};

export { ToolsBars };
