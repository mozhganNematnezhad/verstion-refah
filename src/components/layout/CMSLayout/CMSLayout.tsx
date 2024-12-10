//base
import { FC, ReactNode } from "react";

//components
import { Headers } from "@/components/Tools/Headers/Headers";
import { Footer } from "@/components/Tools/Footer/Footer";

interface IPropType {
  children: ReactNode;
}

const CMSLayout: FC<IPropType> = ({ children }) => {
  return (
    <>
      <section>
        <Headers />
      </section>

      <section className="relative top-[60px] lg:top-[125px] left-0 w-full ">
        {children}
      </section>

      <section className="relative top-[125px] lg:pb-0 pb-[4.5rem] ">
        <Footer />
      </section>
    </>
  );
};

export { CMSLayout };
