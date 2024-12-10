import React from "react";
import { MobileHeader } from "./components/mobile/MobileHeader";
import { HeaderLaptop } from "./components/laptop/LaptopHeader";

const Headers = () => {
  return (
    <section className="fixed z-[2000] w-full bg-white shadow-lg">
      <MobileHeader />
      <HeaderLaptop />
    </section>
  );
};

export { Headers };
