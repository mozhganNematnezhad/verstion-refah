import dynamic from "next/dynamic";
import React from "react";

const MapSection = () => {
  const DynamicLeafletMap = dynamic(
    () => import("components/common/LeafletMap/LeafletMap"),
    {
      ssr: false,
    }
  );

  return (
    <div className="relative">
      <div className="border-b-2 w-full h-[400px] overflow-hidden ">
        <DynamicLeafletMap
          PopupText="رفا ۲۴"
          zoom={9}
          defaultCenter={{
            lat: 36.650412839842296,
            lng: 53.0729232094414,
          }}
        />
      </div>
    </div>
  );
};

export { MapSection };
