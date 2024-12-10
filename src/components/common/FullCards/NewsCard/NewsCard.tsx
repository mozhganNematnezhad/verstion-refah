import { FC } from "react";
import { FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";

interface IPropType {
  title: string;
  description: string;
  image: string;
  creator: string;
  date: string;
}

const NewsCard: FC<IPropType> = ({
  title,
  description,
  image,
  creator,
  date,
}): JSX.Element => {
  return (
    <>
      <main
        className="bg-white dark:bg-[#1F2C47] shadow-lg rounded-xl hover:shadow-cyan-700
          transition-all duration-500 cursor-pointer"
      >
        <section>
          <img
            src={image}
            alt="اخبار رفا ۲۴"
            className="object-cover w-full h-[220px] rounded-t-lg"
          />
        </section>

        <div className="p-4">
          <section className="flex justify-start items-start gap-4">
            <div className="flex gap-2">
              <FaUserAlt
                size={20}
                className="text-blue-900 dark:text-[#4575BA]"
              />
              <span className="dark:text-[#a4a0a0]">توسط {creator}</span>
            </div>

            <div className="flex gap-2">
              <FaRegCalendarAlt
                size={20}
                className="text-blue-900 dark:text-[#4575BA]"
              />
              <span className="dark:text-[#a4a0a0]">{date}</span>
            </div>
          </section>

          <h2 className="font-bold text-xl mt-6 min-h-[60px] dark:text-white">
            {title}
          </h2>

          <p className="text-justify text-md mt-4 min-h-[70px] dark:text-[#ccc7c7]">
            {description}
          </p>
        </div>
      </main>
    </>
  );
};

export { NewsCard };
