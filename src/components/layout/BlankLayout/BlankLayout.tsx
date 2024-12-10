//base
import { FC, ReactNode } from "react";

//components
import { MobileNavigation } from "@/components/Tools/Headers/components/mobile/components/MobileNavigation/MobileNavigation";
interface IPropType {
  children: ReactNode;
}

const BlankLayout: FC<IPropType> = ({ children }) => {
  return (
    <section className="w-full pt-2 pb-[4.5rem]  bg-white">
      {children}
      <MobileNavigation />
    </section>
  );
};

export { BlankLayout };
