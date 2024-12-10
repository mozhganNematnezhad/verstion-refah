"use client";
import { FC, useEffect, useState } from "react";
import { LocallSearch } from "@/components/common/LocallSearch/LocallSearch";
import { setLocationInfoToStorage } from "@/core/services/storageFun/storageFun.service";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useGlobalContext } from "@/core/context/GlobalContext";
import { useGetAllCountiesForDropDown } from "@/core/services/api/client/Location.api";
import { ISelectOption } from "@/core/models/general.model";

interface IpropTypes {
  setTab: (id: number) => void;
  id: number;
  toggleModal: (isOpen: boolean) => void;
  provinces: {
    value: number;
    label: string;
  };
}
const County: FC<IpropTypes> = ({ setTab, id, toggleModal, provinces }) => {
  const { userLocation, setUserLocation } = useGlobalContext();
  const [optionsCounty, setOptionsCounty] = useState<ISelectOption[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const getAllCountiesForDropDown = useGetAllCountiesForDropDown();

  useEffect(() => {
    getAllCountiesForDropDown.mutate(id);
  }, []);

  useEffect(() => {
    if (getAllCountiesForDropDown.data?.data.result) {
      const result = getAllCountiesForDropDown.data.data.result;
      setOptionsCounty(
        result.map((e: { value: string; key: number }) => ({
          label: e.value,
          value: e.key,
        }))
      );
    }
  }, [getAllCountiesForDropDown.isSuccess]);

  const CountiesHandeler = (id: number, label: string) => {
    setUserLocation({
      provinces: {
        value: provinces.value,
        label: provinces.label,
      },
      counties: {
        value: id,
        label: label,
      },
    });

    setLocationInfoToStorage({
      provinces: {
        value: provinces.value,
        label: provinces.label,
      },
      counties: {
        value: id,
        label: label,
      },
    });

    toggleModal(false);
    window.location.reload();
  };

  const filteredLabels = optionsCounty.filter((label) =>
    label.label.includes(filterText)
  );

  return (
    <>
      <div
        className="flex items-center justify-start gap-3 mb-3 text-[#18BDD1] cursor-pointer"
        onClick={() => {
          setTab(1);
          setOptionsCounty([]);
        }}
      >
        <LuChevronRight className={""} size={22} />
        <div className="text-lg"> بازگشت به لیست استان ها</div>
      </div>

      {getAllCountiesForDropDown.isLoading ? (
        <div className="flex items-center justify-center  py-5">
          در حال بارگیری شهرستان ها ..
        </div>
      ) : (
        <section>
          <div className="p-2 mx-auto">
            <LocallSearch
              setFilterText={setFilterText}
              filterText={filterText}
            />
          </div>

          <div
            className="flex items-center justify-between border-b py-5 cursor-pointer my-1"
            onClick={() => {
              setUserLocation({
                provinces: provinces,
              });

              setLocationInfoToStorage({
                provinces: {
                  value: provinces.value,
                  label: provinces.label,
                },
              });

              toggleModal(false);
              window.location.reload();
            }}
          >
            <div> تمامی شهرستان ها </div>
            <LuChevronLeft size={22} />
          </div>

          {filteredLabels.map((label, index) => (
            <div
              className="flex items-center justify-between border-b py-5 cursor-pointer my-1"
              key={index}
              onClick={() => {
                CountiesHandeler(label.value, label.label);
              }}
            >
              <div>{label.label}</div>
              <LuChevronLeft size={22} />
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export { County };
