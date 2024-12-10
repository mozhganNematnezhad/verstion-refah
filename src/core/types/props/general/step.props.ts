export interface IStepType {
  title: string;
  subTitle?: string;
  status: "process" | "wait" | "finish" | "error" | undefined;
  className?: string;
  content: string | React.ReactNode;
  icon?: string | React.ReactNode;
  onClick?: () => void;
}
