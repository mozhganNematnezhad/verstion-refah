import { ReactNode } from "react";

export interface IServiceProps {
  title: string;
  icon: ReactNode;
  text: ReactNode;
  link?: string;
  btnText?: string;
  backGround: string;
}
