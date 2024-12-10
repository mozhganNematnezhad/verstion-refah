"use client";
//base
import { FC, useEffect, useState } from "react";

//lib
import { Empty } from "antd";

//componets
import { PlanCard } from "@/components/common/FullCards/PlanCard/PlanCard";
import { HeadTitle } from "@/components/common/HeadTitle/HeadTitle";
import { IGetMembershipFeesRessponse } from "@/core/types/response/MembershipFee.res";

//core
import { MembershipFeeTypeEnum } from "@/core/enums/membershipfee-type.enum";
import { useGetMembershipFees } from "@/core/services/api/client/UserMembership.api";

const PlansListContainer: FC = async () => {
  const [membershipFeeList, setMembershipFeeList] = useState<
    IGetMembershipFeesRessponse[]
  >([]);
  const getMutation = useGetMembershipFees();

  useEffect(() => {
    getMutation.mutate({
      membershipFeeType: MembershipFeeTypeEnum.User,
    });
  }, []);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const result: IGetMembershipFeesRessponse[] =
        getMutation.data.data.result;

      setMembershipFeeList(result);
    }
  }, [getMutation.isSuccess]);

  return (
    <section className="container w-[85%] mx-auto py-9 ">
      <section className="flex justify-center items-center">
        <HeadTitle text="انتخاب پلن" />
      </section>

      {membershipFeeList && membershipFeeList?.length > 0 ? (
        membershipFeeList.map((item, index) => (
          <PlanCard item={item} key={index} />
        ))
      ) : (
        <section className="bg-white p-10 min-h-screen flex justify-center items-center">
          <Empty description="پلنی برای انتخاب وجود ندارد" />
        </section>
      )}
    </section>
  );
};

export { PlansListContainer };
