//base
import { FC } from "react";
import Link from "next/link";

//lib
import { Modal } from "antd";
import { IServiceProps } from "@/core/types/props/landing/services.props";
import { LinkButton } from "./client/LinkButton/LinkButton";

//components

//core

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
  serviceRowData: IServiceProps | null;
}
const ServiceModal: FC<IPropType> = ({
  isOpen,
  toggleModal,
  serviceRowData,
}) => {
  return (
    <>
      <Modal
        title={serviceRowData?.title}
        open={isOpen}
        onCancel={toggleModal}
        className="!lg:w-[70%] mx-auto px-8"
        footer={false}
        width={1000}
        zIndex={50000}
      >
        <section>{serviceRowData?.text}</section>

        {serviceRowData?.link && (
          <Link
            href={serviceRowData?.link}
            className="flex justify-center items-center mt-4"
          >
            <LinkButton
              btnText={serviceRowData?.btnText || "ورود به برنامه "}
            />
          </Link>
        )}
      </Modal>
    </>
  );
};

export { ServiceModal };
