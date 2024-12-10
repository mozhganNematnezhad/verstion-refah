"use client";

//base
import { FC, ReactNode, useState } from "react";

//lib
import { FaBars } from "react-icons/fa";

//components
import { ResponsiveSideBar } from "./components/SideBar/ResponsiveSideBar/ResponsiveSideBar";
import { MobileNavigation } from "@/components/Tools/Headers/components/mobile/components/MobileNavigation/MobileNavigation";
import { Headers } from "@/components/Tools/Headers/Headers";
import { SideBar } from "./components/SideBar/SideBar";

//core
import { projectSetting } from "@/configs/setting.cf";

interface IPropType {
  children: ReactNode;
}

//ToDO refactore this
const PanelLayout: FC<IPropType> = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <section className="hidden lg:block">
        <Headers />
      </section>

      <section className="relative lg:top-[150px] left-0 w-full my-6 lg:m-0">
        <section className="lg:hidden">
          <ResponsiveSideBar
            showDrawer={showDrawer}
            toggleDrawer={() => setShowDrawer(false)}
          />
        </section>

        <section className="w-full">
          <section className="block lg:flex justify-between items-start">
            <section className="hidden lg:block">
              <SideBar toggleDrawer={() => setShowDrawer(false)} />
            </section>

            <section
              className="w-[96%] mx-auto lg:mx-4 h-full bg-white shadow-lg rounded-lg p-6 pb-40"
              style={{
                width:
                  typeof window !== "undefined" && window.innerWidth > 1000
                    ? `calc(100% - ${projectSetting.panel.width})`
                    : "",
              }}
            >
              <section
                className="mb-10 lg:hidden"
                onClick={() => setShowDrawer(true)}
              >
                <section
                  className="flex justify-center items-center gap-1 text-xs
                  bg-sky-400 text-white p-2 rounded-full w-1/2"
                >
                  <FaBars size={20} />
                  <span>منوی کاربری</span>
                </section>
              </section>

              <section>{children}</section>
            </section>
          </section>
        </section>
      </section>

      {/* Mobile Navbar */}
      <div className="block lg:hidden">
        <MobileNavigation />
      </div>
    </>
  );
};

export { PanelLayout };
