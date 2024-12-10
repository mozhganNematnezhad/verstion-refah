import { FC } from "react";

interface IPropTypes {
  text: string;
}

const HeadTitle: FC<IPropTypes> = ({ text }) => {
  return (
    <section className="flex justify-center md:justify-start items-center ">
      <h2
        className="inline-block text-2xl font-bold border-y-4 border-y-cyan-900 dark:border-y-[#4575BA]
         shadow-md shadow-cyan-900 dark:shadow-[#4575BA] rounded py-2 px-8
         dark:text-white text-center"
      >
        {text || "!"}
      </h2>
    </section>
  );
};

export { HeadTitle };
