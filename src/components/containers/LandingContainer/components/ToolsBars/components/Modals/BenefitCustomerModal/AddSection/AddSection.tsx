import React, { FC } from "react";
import { Button, Col, Row } from "antd";

import { useUserAuth } from "@/core/context/AuthenticationContext";
import { FaPaypal, FaSignInAlt } from "react-icons/fa";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";

const AddSection: FC = () => {
  //auth context
  const { token } = useUserAuth();

  return (
    <>
      <Row gutter={[16, 16]} className="mt-6">
        <Col xs={24} md={12} lg={8}>
          <TextInput
            name="title"
            labelText="شناسه فروشنده شما"
            clearable
            significant
          />
        </Col>
      </Row>

      <Row className="flex justify-start items-center gap-2 mt-8">
        {!token && (
          <FullButton
            btnText="ورود به برنامه"
            icon={<FaSignInAlt size={16} />}
          />
        )}

        <FullButton
          btnText="پرداخت حق عضویت"
          icon={<FaPaypal size={16} />}
          className="!bg-green-600 hover:!bg-green-500"
          disabled={token ? false : true}
        />
      </Row>
    </>
  );
};

export { AddSection };
