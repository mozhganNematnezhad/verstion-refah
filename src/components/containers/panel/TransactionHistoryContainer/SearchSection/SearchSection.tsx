"use client";
//base
import { FC, useEffect, useState } from "react";

//lib

//componets
import { Col, Row } from "antd";

//assets
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { FullSelectOption } from "@/components/common/Form/FullSelectOption/FullSelectOption";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import {
  MembershipFeePeriodData,
  MembershipStatusData,
} from "@/core/data/TransactionHistory/TransactionHistory.data";
import { useGetMembershipFees } from "@/core/services/api/client/UserMembership.api";
import { MembershipFeeTypeEnum } from "@/core/enums/membershipfee-type.enum";
import { ISelectOption } from "@/core/models/general.model";
import { IGetMembershipFeesRessponse } from "@/core/types/response/MembershipFee.res";

interface IPropTypes {
  setFieldValue: (name: string, values: any) => void;
  resetForm: () => void;
  isLoading: boolean;
}

const SearchSection: FC<IPropTypes> = ({
  setFieldValue,
  resetForm,
  isLoading,
}) => {
  const [membershipFeeList, setMembershipFeeList] = useState<ISelectOption[]>(
    []
  );
  // useGetMembershipFees
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

      setMembershipFeeList(
        result.map((item) => ({
          label: item.title,
          value: item.id,
        }))
      );
    }
  }, [getMutation.isSuccess]);
  return (
    <>
      <Row gutter={[12, 12]} className="my-6">
        <Col xs={24} md={12} lg={8}>
          <FullSelectOption
            name="membershipFee"
            options={membershipFeeList}
            clearable
            labelText="نوع عضویت"
            significant={false}
            forSearching
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <FullSelectOption
            name="membershipFeePeriod"
            options={MembershipFeePeriodData}
            clearable
            labelText="دوره عضویت"
            significant={false}
            forSearching
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <FullSelectOption
            name="membershipStatus"
            options={MembershipStatusData}
            clearable
            labelText="وضعیت عضویت"
            significant={false}
            forSearching
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="startDateShamsi"
            clearable
            labelText="از تاریخ"
            placeholder="جستجوی از تاریخ..."
            significant={false}
            forSearching
          />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="endDateShamsi"
            clearable
            labelText="تا تاریخ"
            placeholder="جستجوی تا تاریخ..."
            significant={false}
            forSearching
          />
        </Col>
      </Row>

      <Row>
        <FullButton
          btnText="جستجو"
          isLoading={isLoading}
          isClearAble
          clearOnClick={() => resetForm()}
          className="!w-full !h-full !px-[4rem]"
        />
      </Row>
    </>
  );
};

export { SearchSection };
