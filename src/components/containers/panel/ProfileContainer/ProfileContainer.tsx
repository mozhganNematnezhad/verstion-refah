"use client";

import { FC } from "react";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { UserMemberShip } from "./components/UserMemberShip/UserMemberShip";
import { MembershipCardContainer } from "../MembershipCardContainer/MembershipCardContainer";
import { Divider } from "antd";
import { FaBriefcase } from "react-icons/fa";

const ProfileContainer: FC = () => {
  return (
    <section className="mt-4">
      <UserInfo />
      <section className="md:flex gap-8 items-start justify-between">
        <section className="md:w-2/4 h-full ">
          {/* --- Divider --- */}
          <Divider orientation="center" plain>
            <section className="flex justify-center items-center gap-x-2">
              <FaBriefcase size={18} className="text-blue-600" />
              <span className="mt-1">عضویت من در کسب و کار</span>
            </section>
          </Divider>
          <UserMemberShip />
        </section>
        <section className="md:w-2/4 h-full ">
          {/* --- Divider --- */}
          <Divider orientation="center" plain>
            <section className="flex justify-center items-center gap-x-2">
              <FaBriefcase size={18} className="text-blue-600" />
              <span className="mt-1"> کارت عضویت من </span>
            </section>
          </Divider>
          <MembershipCardContainer />
        </section>
      </section>
    </section>
  );
};

export { ProfileContainer };
