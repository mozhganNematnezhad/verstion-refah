"use client";

import { IServiceProps } from "@/core/types/props/landing/services.props";
//base
import React, { FC, useState } from "react";
import { ServiceModal } from "./Modals/ServiceModal/ServiceModal";
import { servicesList } from "@/db/landing/services.db";

//assets

const Services: FC = () => {
  const [showServiceModal, setShowServiceModal] = useState<boolean>(false);
  const [serviceRowData, setServiceRowData] = useState<IServiceProps | null>(
    null
  );

  return (
    <>
      {/* --- modals --- */}
      {showServiceModal && (
        <ServiceModal
          isOpen={showServiceModal}
          toggleModal={() => setShowServiceModal(false)}
          serviceRowData={serviceRowData}
        />
      )}

      {/* --- content --- */}
      <section className="bg-white rounded-lg h-full">
        <section className="p-6 lg:py-6 lg:flex justify-center items-center">
          <section className="grid grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8">
            {servicesList.map((item, key) => (
              <section
                key={key}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => {
                  setShowServiceModal(true);
                  setServiceRowData(item);
                }}
              >
                <div
                  className="flex justify-center items-center rounded-2xl shadow-xl p-6 "
                  style={{ backgroundColor: item.backGround }}
                >
                  {item.icon}
                </div>

                <p className="text-center text-md  group-hover:font-bold mt-2">
                  {item.title}
                </p>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export { Services };
