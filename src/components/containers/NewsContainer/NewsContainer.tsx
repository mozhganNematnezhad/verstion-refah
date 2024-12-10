//base
import { FC } from "react";

//componets

import { HeadTitle } from "@/components/common/HeadTitle/HeadTitle";
import { newsList } from "@/db/News/NewsList";
import { NewsCard } from "@/components/common/FullCards/NewsCard/NewsCard";

//core

const NewsContainer: FC = (): JSX.Element => {
  return (
    <main className="container w-[85%] mx-auto py-9">
      <section className="flex justify-center items-center">
        <HeadTitle text="اخبار و اطلاعیه های رفا ۲۴" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {newsList.map((item, key) => (
          <NewsCard
            key={key}
            title={item.title}
            description={item.description}
            image={item.image}
            creator={item.creator}
            date={item.date}
          />
        ))}
      </section>
    </main>
  );
};

export { NewsContainer };
