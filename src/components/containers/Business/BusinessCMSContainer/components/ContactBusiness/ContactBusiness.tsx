//base
import { FC, Suspense } from "react";
import dynamic from "next/dynamic";

//lib
import { FaClock, FaMapMarker } from "react-icons/fa";
import { Alert, Empty } from "antd";
import { IGetWorkHours } from "@/core/types/response/GetWorkHours.res";
import { TimeCard } from "@/components/common/FullCards/TimeCard/TimeCard";

//components

const DynamicLeafletMap = dynamic(
  () => import("components/common/LeafletMap/LeafletMap"),
  {
    ssr: false,
  }
);

//core

interface IpropTypes {
  GetWorkHourList: IGetWorkHours[];
  address: string;
  lat: number;
  lng: number;
  titleBusiness: string;
}

const ContactBusiness: FC<IpropTypes> = ({
  GetWorkHourList,
  address,
  lat,
  lng,
  titleBusiness,
}) => {
  return (
    <>
      {/* --- business time --- */}
      <section className="flex items-center gap-2">
        <FaClock size={15} className="text-sky-700" />
        <p className="text-sm font-bold text-sky-700">زمان سرویس‌دهی</p>
      </section>

      {GetWorkHourList.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-3 my-6">
          {GetWorkHourList.map((item, key) => (
            <Suspense key={key} fallback={"Loading..."}>
              <TimeCard
                nameWeekDayTitle={item.nameWeekDayTitle}
                startTime={item.startTime}
                endTime={item.endTime}
                isCurrentDay={false}
              />
            </Suspense>
          ))}
        </section>
      ) : (
        <Empty
          className="mt-2"
          description="کسب و کار زمان بندی خود را تا به مشخص نکرده است!"
        />
      )}

      {/* --- business address --- */}
      <section className="flex items-center gap-2 border-dashed border-t pt-2 mt-2">
        <FaMapMarker size={15} className="text-sky-700" />
        <p className="text-sm font-bold text-sky-700">آدرس</p>
      </section>

      <p className="text-sm mt-2 mb-6">
        {!address ? (
          address
        ) : (
          <Alert
            type="warning"
            message="کسب و کار آدرس خود را هنوز ثبت نکرده است!"
            showIcon
            className="mt-4 w-full md:w-1/2 lg:w-1/3"
          />
        )}
      </p>

      {/* --- location on map --- */}
      <section className="w-full rounded-lg">
        <DynamicLeafletMap
          PopupText={titleBusiness}
          zoom={12}
          defaultCenter={{
            lat: lat,
            lng: lng,
          }}
        />
      </section>
    </>
  );
};

export { ContactBusiness };
