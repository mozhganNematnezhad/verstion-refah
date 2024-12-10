//base
import React, { FC, Suspense, useEffect, useState } from "react";

//lib
import { Col, Divider, Empty, Row, Spin } from "antd";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { IGetMyBusinessMembership } from "@/core/types/response/FollowingBusiness.res";
import { useGetMyBusinessMembership } from "@/core/services/api/client/FollowingBusiness";

//api

//types

const UserMemberShip: FC = () => {
  const [memberShipList, setmemberShipList] =
    useState<IGetMyBusinessMembership | null>(null);

  //api
  const getMutation = useGetMyBusinessMembership();

  //call api
  useEffect(() => {
    getMutation.mutate();
  }, []);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const result: IGetMyBusinessMembership = getMutation.data.data.result;
      setmemberShipList(result);
    }
  }, [getMutation.isSuccess]);

  return (
    <>
      {/* --- user membership --- */}
      <Row gutter={[10, 10]} className="flex justify-center items-center pb-4">
        <Col xs={24}>
          <Suspense>
            {getMutation.isLoading ? (
              <section className="flex justify-center items-center py-12">
                <Spin size="large">
                  <p>در حال بارگذاری ...</p>
                </Spin>
              </section>
            ) : memberShipList ? (
              <section className="border-dashed border border-sky-700 p-3 rounded-lg py-6">
                <section className="flex flex-col justify-center items-center gap-3">
                  <FaBriefcase size={45} className="text-sky-700" />
                  <p className="text-center text-xl font-bold">
                    {memberShipList.title}
                  </p>

                  <section className="flex justify-start items-center gap-4">
                    <FaCheckCircle size={16} className="text-green-800" />
                    <strong>شماره تماس :</strong>
                    <span>
                      {memberShipList.phoneNumber
                        ? memberShipList.phoneNumber
                        : "-"}
                    </span>
                  </section>

                  <section className="flex justify-start items-center gap-4 mt-2">
                    <FaCheckCircle size={16} className="text-green-800" />
                    <strong>آدرس :</strong>
                    <span className="text-center">
                      {memberShipList.address ? memberShipList.address : "-"}
                    </span>
                  </section>
                </section>
              </section>
            ) : (
              <Empty description="شما هنوز عضو کسب و کاری نشده اید!" />
            )}
          </Suspense>
        </Col>
      </Row>
    </>
  );
};

export { UserMemberShip };
