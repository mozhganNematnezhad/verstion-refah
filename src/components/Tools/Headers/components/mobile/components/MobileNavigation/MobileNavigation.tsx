"use client";
import React, { FC } from "react";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { CategoriesSvg, HomeSvg, MapSvg, UserSvg } from "@/assets/image/svg";

//!refactore

const MobileNavigation: FC = () => {
  const pathName = usePathname();
  const { push } = useRouter();
  const { token } = useUserAuth();

  const navClassName = "flex-row justify-center items-center cursor-pointer ";
  return (
    <div className="bg-white fixed mx-autoshadow-xl bottom-0 block z-[30] w-full border-t border-sky-950">
      <section className="container mx-auto flex justify-around items-center py-2 ">
        {/* Home */}
        <Link href={"/"} className={navClassName}>
          <HomeSvg color={pathName === "/" ? "#1156C7" : "#4e4e4eb3"} />

          <p
            className={`mt-1 ${
              pathName === "/" ? "text-[#1156C7]" : "text-[#4e4e4eb3]"
            }  text-[10px] pt-[3px] text-center`}
          >
            خانه
          </p>
        </Link>
        {/* Business */}
        <Link href={"/business"} className={navClassName}>
          {pathName === "/business" ? (
            <MapSvg color="#1156C7" />
          ) : (
            <MapSvg color={" #4e4e4eb3 "} />
          )}
          <p
            className={`${
              pathName === "/business" ? "text-[#1156C7]" : "text-[#4e4e4eb3]"
            }  text-[10px] mt-1 text-center`}
          >
            شهرک
          </p>
        </Link>
        <Link href={"/bussiness-category"} className={navClassName}>
          {pathName === "/bussiness-category" ? (
            <CategoriesSvg color="#1156C7" />
          ) : (
            <CategoriesSvg color={" #4e4e4eb3 "} />
          )}
          <p
            className={`${
              pathName === "/bussiness-category"
                ? "text-[#1156C7]"
                : "text-[#4e4e4eb3]"
            }  text-[10px] mt-1 text-center`}
          >
            دسته بندی
          </p>
        </Link>

        {/* User Panel */}
        <div
          onClick={() => push(token ? "/panel" : "/login")}
          className={navClassName}
        >
          {pathName.includes("/panel") ? (
            <UserSvg color="#1156C7" />
          ) : (
            <UserSvg color={"#4e4e4eb3"} />
          )}
          <p
            className={` ${
              pathName === "/panel" ? "text-[#1156C7]" : "text-[#4e4e4eb3]"
            }   text-[10px] text-center mt-1`}
          >
            {token ? "پنل کاربری" : "ورود"}
          </p>
        </div>
      </section>
    </div>
  );
};

export { MobileNavigation };
