import { FC, ReactNode } from "react";

interface IPropType {
  children: ReactNode;
  headTitle?: string;
  rootClassName?: string;
}

const CardWrapper: FC<IPropType> = ({
  headTitle,
  rootClassName,
  children,
}): JSX.Element => {
  return (
    <section
      className={`bg-white shadow-lg rounded-xl p-6 my-3 ${
        rootClassName ? rootClassName : undefined
      }`}
    >
      {headTitle && (
        <div
          className="bg-gradient-to-tr from-slate-50 to-slate-100 
          rounded-lg font-bold text-lg p-1 px-2"
        >
          <span>{headTitle}</span>
        </div>
      )}

      <div className={`${headTitle ? "mt-6" : undefined}`}>{children}</div>
    </section>
  );
};

export { CardWrapper };
