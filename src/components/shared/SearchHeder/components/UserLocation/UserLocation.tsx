"use client";

import React, { FC } from "react";
import { SelectLocation } from "./components/SelectLocation";

const UserLocation: FC = () => {
  // call Api Server
  // const GetProvinces = await GetAllProvinces();
  // const provinces: IKeyValueRes[] = GetProvinces.result;

  return (
    <section>
      <SelectLocation />
    </section>
  );
};

export { UserLocation };
