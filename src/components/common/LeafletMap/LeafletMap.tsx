"use client";

//base
import { FC, useState } from "react";

//lib
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

//components
import { FullButton } from "../Form/FullButton/FullButton";

//assets
import markershadow from "assets/image/general/marker-shadow.png";
import markerIcon from "assets/image/general/marker-icon.png";

//style
import "leaflet/dist/leaflet.css";

//core
import { IMapFeildType } from "@/core/models/general.model";

interface IPropType {
  setFieldValue?: (name: string, value: any) => void;
  zoom?: number;
  height?: string;
  PopupText?: string;
  defaultCenter?: IMapFeildType;
  canMark?: boolean;
}

// LefletMapUpdate component
const LefletMapUpdate: FC<IPropType> = ({
  setFieldValue,
  zoom,
  height,
  defaultCenter,
  PopupText,
  canMark,
}): JSX.Element => {
  const [showMap, setShowMap] = useState<boolean>(false);

  const [center, setCenter] = useState<IMapFeildType>(
    defaultCenter ? defaultCenter : null
  );

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon.src,
    iconSize: [23, 32],
    iconAnchor: [14, 32],
    popupAnchor: [0, -32],
    shadowUrl: markershadow.src,
    shadowSize: [42, 30],
    shadowAnchor: [18, 32],
  });

  //get map data
  const MapEvents = () => {
    useMapEvents({
      click: (event: L.LeafletMouseEvent) => {
        const { lat, lng } = event.latlng;
        setFieldValue && setFieldValue("mapInput", { lat, lng });
        setCenter({ lat, lng });
      },
    });
    return null;
  };

  return (
    <section className="relative">
      <MapContainer
        center={center || { lat: 36.650412839842296, lng: 53.07292320944146 }}
        zoom={zoom || 12}
        style={{ height: height || "400px", width: "100%", zIndex: "10" }}
        doubleClickZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {canMark && <MapEvents />}

        {center && (
          <Marker position={center} icon={customMarkerIcon}>
            <Popup className="future-font-bold">
              {PopupText || "مکان شما"}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {!showMap && (
        <section
          className="absolute w-full h-full bg-slate-800 z-[11] top-0 left-0 opacity-70 
          flex items-center justify-center mx-auto"
        >
          <FullButton btnText="نمایش نقشه" onClick={() => setShowMap(true)} />
        </section>
      )}
    </section>
  );
};

export default LefletMapUpdate;
