import { FC } from "react";
import { TopPart } from "./components/TopPart/TopPart";
import { BottomPart } from "./components/BottomPart/BottomPart";

const HeaderLaptop: FC = () => {
  return (
    <section className="hidden lg:block ">
      <TopPart />
      <BottomPart />
    </section>
  );
};

export { HeaderLaptop };
