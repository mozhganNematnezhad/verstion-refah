import { FC, useEffect, useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import { removeLocationInfoToStorage } from "@/core/services/storageFun/storageFun.service";
import { LocallSearch } from "@/components/common/LocallSearch/LocallSearch";
import { useGlobalContext } from "@/core/context/GlobalContext";
import { useGetAllProvincesForDropDown } from "@/core/services/api/client/Location.api";
import { IKeyValueRes } from "@/core/types/common/common.res";
import { ISelectOption } from "@/core/models/general.model";

interface ProvincesProps {
  setTab: (id: number) => void;
  setIdCounty: (id: number) => void;

  toggleModal: (isOpen: boolean) => void;
  setProvinces: (provinces: { value: number; label: string }) => void;
}

const Provinces: FC<ProvincesProps> = ({
  setTab,
  setIdCounty,
  toggleModal,
  setProvinces,
}) => {
  const { setUserLocation } = useGlobalContext();
  const [filterText, setFilterText] = useState<string>("");

  const getAllProvincesForDropDown = useGetAllProvincesForDropDown();
  const [Listprovinces, setListprovinces] = useState<IKeyValueRes[]>([]);

  useEffect(() => {
    getAllProvincesForDropDown.mutate();
  }, []);

  useEffect(() => {
    if (getAllProvincesForDropDown.data?.data.result) {
      setListprovinces(getAllProvincesForDropDown.data.data.result);
    }
  }, [getAllProvincesForDropDown.isSuccess]);

  const optionsProvince = Listprovinces.map((province) => ({
    label: province.value,
    value: province.key,
  }));

  const labels = optionsProvince.map((item: ISelectOption) => ({
    label: item.label,
    value: item.value,
  }));

  const selectCityHandler = (id: number, cityName: string) => {
    setProvinces({
      value: id,
      label: cityName,
    });
    setTab(2);
    setIdCounty(id);
  };

  const filteredLabels = labels.filter((label) =>
    label?.label?.includes(filterText)
  );

  return (
    <>
      {Listprovinces ? (
        <section>
          {/* Search of labels */}
          <div className="p-2 mx-auto">
            <LocallSearch
              setFilterText={setFilterText}
              filterText={filterText}
            />
          </div>

          <div
            className="flex items-center justify-between border-b py-5 cursor-pointer mb-1"
            onClick={() => {
              removeLocationInfoToStorage();
              setUserLocation({});
              toggleModal(false);
              window.location.reload();
            }}
          >
            <div> تمامی استان ها</div>
          </div>
          {filteredLabels.map((label, index) => (
            <div
              className="flex items-center justify-between border-b py-5 cursor-pointer my-1"
              key={index}
              onClick={() => selectCityHandler(label.value, label.label)}
            >
              <div>{label.label}</div>
              <LuChevronLeft size={22} />
            </div>
          ))}
        </section>
      ) : (
        " لطفا صبر "
      )}
    </>
  );
};

export { Provinces };
