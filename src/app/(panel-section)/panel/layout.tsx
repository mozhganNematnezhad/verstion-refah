//base
import { ReactNode } from "react";
import type { Metadata } from "next";

//layout
import { PanelLayout } from "@/components/layout/PanelLayout/PanelLayout";

const layout = ({ children }: { children: ReactNode }) => {
  return <PanelLayout>{children}</PanelLayout>;
};

export default layout;
