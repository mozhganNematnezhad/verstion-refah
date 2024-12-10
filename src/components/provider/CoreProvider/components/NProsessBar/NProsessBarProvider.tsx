"use client";

//base
import { FC } from "react";

//lib
import { AppProgressBar } from "next-nprogress-bar";

const NProsessBarProvider: FC = () => {
  return (
    <AppProgressBar
      height="6px"
      color="#1677ff"
      options={{ showSpinner: true }}
    />
  );
};

export { NProsessBarProvider };
