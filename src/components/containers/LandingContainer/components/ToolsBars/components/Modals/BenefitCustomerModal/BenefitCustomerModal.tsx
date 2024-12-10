import React, { FC, useState } from "react";
import { Modal } from "antd";
import { Rules } from "./Rules/Rules";
import { Form, Formik } from "formik";
import { AddSection } from "./AddSection/AddSection";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
}
const BenefitCustomerModal: FC<IPropType> = ({ isOpen, toggleModal }) => {
  const [initialValues] = useState<any>({
    title: "",
  });

  //api
  // const setMutation = useSetBusinessByUser();

  //setMutation
  const onSubmit = (values: any) => {};

  return (
    <>
      <Modal
        title="بهره مندی از خدمات مشتریان"
        open={isOpen}
        onCancel={toggleModal}
        className="!w-full lg:!w-[95%] mx-auto lg:px-8"
        zIndex={50000}
        footer={false}
      >
        <Formik
          initialValues={initialValues}
          enableReinitialize
          // validationSchema={}
          onSubmit={onSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <Rules />
              <AddSection />
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export { BenefitCustomerModal };
