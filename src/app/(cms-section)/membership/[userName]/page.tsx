import React, { FC } from "react";
import { MembershipContainer } from "@/components/containers/panel/MembershipContainer/MembershipContainer";

interface IPageProps {
  params: {
    userName: string;
  };
}
const page: FC<IPageProps> = (req) => {
  return <MembershipContainer userName={req.params.userName} />;
};

export default page;
