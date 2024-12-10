//base
import { ReactNode } from "react";

//layout
import { CMSLayout } from "@/components/layout/CMSLayout/CMSLayout";

const layout = ({ children }: { children: ReactNode }) => {
  return <CMSLayout>{children}</CMSLayout>;
};

export default layout;
