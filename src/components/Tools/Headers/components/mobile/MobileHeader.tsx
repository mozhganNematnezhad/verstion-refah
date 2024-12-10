import React, { FC } from "react";
import { ResponsiveMenuClicker } from "./components/ResponsiveMenuClicker/ResponsiveMenuClicker";
import { SearchHeder } from "@/components/shared/SearchHeder/SearchHeder";
import { MobileNavigation } from "./components/MobileNavigation/MobileNavigation";

const MobileHeader: FC = () => {
  return (
    <section className="lg:hidden">
      <div className="px-8 py-4 flex justify-start  items-center gap-4 ">
        <ResponsiveMenuClicker />
        <SearchHeder />
      </div>

      <MobileNavigation />
    </section>
  );
};

export { MobileHeader };
