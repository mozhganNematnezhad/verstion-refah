"use client";

import { FC, useState } from "react";
import { Modal } from "antd";
import { Provinces } from "./components/Provinces/Provinces";
import { County } from "./components/County/County";

//!type rememind
interface IpropTypes {
  isOpen?: boolean;
  toggleModal?: any;
}

interface Itab {
  title: string;
  id: number;
}
const ModalsLocation: FC<IpropTypes> = ({ isOpen, toggleModal }) => {
  const [tab, setTab] = useState<number>(1);
  const [idCounty, setIdCounty] = useState<number>(0);
  const [provinces, setProvinces] = useState<{ value: number; label: string }>({
    value: 0,
    label: "",
  });

  return (
    <>
      <Modal
        title={tab === 1 ? "لیست استان ها" : "لیست شهرستان ها"}
        open={isOpen}
        onCancel={toggleModal}
        className="!lg:w-[70%]  mx-auto px-8"
        footer={false}
        centered
        zIndex={50000}
      >
        <div className="mt-9 !h-[400px] overflow-y-scroll overflow-x-hidden">
          {tab === 1 && (
            <div>
              <Provinces
                setTab={setTab}
                setIdCounty={setIdCounty}
                toggleModal={() => toggleModal(false)}
                setProvinces={setProvinces}
              />
            </div>
          )}
          {tab === 2 && (
            <div>
              <County
                setTab={setTab}
                id={idCounty}
                toggleModal={() => toggleModal(false)}
                provinces={provinces}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export { ModalsLocation };
