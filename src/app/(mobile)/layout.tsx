//base
import { ReactNode } from "react";

//layout
import { BlankLayout } from "@/components/layout/BlankLayout/BlankLayout";

const layout = ({ children }: { children: ReactNode }) => {
  return <BlankLayout>{children}</BlankLayout>;
};

export default layout;
