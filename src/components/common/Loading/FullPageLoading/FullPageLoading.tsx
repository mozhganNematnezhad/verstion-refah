import { FC } from "react";
import Styled from "./FullPageLoading.module.scss";

const FullPageLoading: FC = (): JSX.Element => {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center flex-col">
        <div className={Styled["custom-loader"]}></div>
        <p className="mt-5 dark:text-white">درحال بارگذاری ....</p>
      </section>
    </>
  );
};

export { FullPageLoading };
