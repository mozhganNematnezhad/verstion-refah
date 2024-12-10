import { Alert } from "antd";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { UserRoles, UserRolesPersian } from "@/core/enums/user-role.enum";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { getUserPaymentInfo } from "@/core/services/storageFun/storageFun.service";

const PopContent = () => {
  const { userInfo, role } = useUserAuth();
  //router
  const router = useRouter();
  const { replace } = useRouter();

  // For find Top Role
  const [topLevelUserRole, setTopLevelUserRole] = useState<string>();
  const [planBtnIsLoading, setPlanBtnIsLoading] = useState<boolean>(false);

  // Contex PaymentInformation

  const getUSerInformation = getUserPaymentInfo();

  //topLevelUserRole
  useEffect(() => {
    const roleMapping = {
      [UserRoles.AdminSystem]: UserRolesPersian.AdminSystem,
      [UserRoles.ContractManager]: UserRolesPersian.ContractManager,
      [UserRoles.Seller]: UserRolesPersian.Seller,
      [UserRoles.UserLegal]: UserRolesPersian.UserLegal,
      [UserRoles.UserReal]: UserRolesPersian.UserReal,
    };

    if (role && role.length > 0) {
      const validRoles = role.filter((r) =>
        Object.keys(roleMapping).includes(r)
      );

      if (validRoles.length > 0) {
        const topRole = roleMapping[validRoles[0] as keyof typeof roleMapping];
        setTopLevelUserRole(topRole);
      } else {
        const simpleUser = role.includes(UserRoles.UserReal)
          ? UserRolesPersian.UserReal
          : UserRolesPersian.UserLegal;
        setTopLevelUserRole(simpleUser);
      }
    }
  }, [role]);

  const Buttonitems = [
    {
      id: 1,
      text: "پنل کاربری",
      className:
        "inline-flex w-2/4  items-center gap-x-3 text-sm text-gray-800 hover:text-blue-600  ",
      icon: <FaRegUser />,
      href: "/panel",
    },

    {
      id: 2,
      text: "خروج",
      className:
        "inline-flex w-2/4  items-center gap-x-3 text-sm text-gray-800 hover:text-red-600 ",
      icon: <MdLogout />,
      href: "/signout-oidc",
    },
  ];

  return (
    <div className="flex flex-col justify-between mt-2 gap-2 w-[20rem] ">
      <div className="py-3 px-4  bg-gray-100 ">
        <div className="flex items-center gap-x-3 mb-3">
          <div className="grow">
            <h4 className="font-semibold text-gray-800">
              {userInfo.name}
              <span className="!mr-3 ms-0.5 inline-flex items-center align-middle gap-x-1.5 py-0.5 px-1.5 rounded-md text-[11px] font-medium border border-[#B8EA8F]  text-black">
                {topLevelUserRole as string}
              </span>
            </h4>
          </div>
        </div>
        {getUSerInformation?.membershipStatus === false ? (
          <>
            <Alert
              message=" اشتراک ندارید"
              type="error"
              className="text-red-500"
            />
          </>
        ) : (
          <>
            <div className="flex items-center justify-start gap-1">
              <FaCheckCircle size={16} className="text-green-800" />
              <span> {getUSerInformation?.membershipFeeTitle} </span>
            </div>

            <span className="mx-auto w-fit text-[#206340]">
              {getUSerInformation?.membershipRemainDays} روز از اشتراک شما مانده
              است
            </span>
          </>
        )}
        <div className="mt-4 flex items-center justify-between gap-3 ">
          <FullButton
            btnText={`${
              getUSerInformation?.membershipStatus ? "تمدید" : "خرید"
            } اشتراک `}
            size="small"
            className="!py-1 !bg-[#1DB461] "
            icon={<FontAwesomeIcon icon={faCoins} />}
            onClick={() => {
              setPlanBtnIsLoading(true);
              replace("/plans-list");
            }}
            isLoading={planBtnIsLoading}
          />
          <div
            className="inline-flex cursor-pointer items-center gap-x-1.5 text-gray-500 hover:text-blue-600  "
            onClick={() => router.replace("/panel/transaction-history")}
          >
            تاریخچه اشتراک
          </div>
        </div>
      </div>

      <ul className="py-3 px-4 space-y-1 ">
        {Buttonitems.map((items) => (
          <li className={` pt-2 hover:cursor-pointer`}>
            <div
              className={items.className}
              onClick={() => router.replace(items.href)}
            >
              {items.icon}
              {items.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PopContent };
