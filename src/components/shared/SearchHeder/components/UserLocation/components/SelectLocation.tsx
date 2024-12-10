"use client";

//base
import { FC, useState } from "react";

//lib
import { CiLocationOn } from "react-icons/ci";

//components
import { ModalsLocation } from "./Modals/ModalsLocation";

//core
import { useGlobalContext } from "@/core/context/GlobalContext";

const SelectLocation: FC = () => {
  const [showServiceModal, setShowServiceModal] = useState<boolean>(false);
  const { userLocation } = useGlobalContext();

  return (
    <section className="!px-3 ">
      {showServiceModal && (
        <ModalsLocation
          isOpen={showServiceModal}
          toggleModal={() => setShowServiceModal(false)}
        />
      )}
      <section
        onClick={() => {
          setShowServiceModal(true);
        }}
      >
        <section
          className="flex justify-center items-center h-full gap-2  
          cursor-pointer hover:bg-[#F5F5F5] rounded-md "
        >
          <CiLocationOn size={20} color={"#434343"} />

          {userLocation?.provinces?.label || userLocation?.counties?.label ? (
            <span className="text-sm min-[1100px]:text-base">
              {userLocation?.provinces?.label +
                (userLocation?.counties?.label === undefined
                  ? ""
                  : " ، " + userLocation?.counties?.label)}
            </span>
          ) : (
            <span className="text-[#434343]"> همه استان ها </span>
          )}
        </section>
      </section>
    </section>
  );
};

export { SelectLocation };
