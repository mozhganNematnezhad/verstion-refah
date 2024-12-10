//base
import { SponserCard } from "@/components/common/FullCards/SponserCard/SponserCard";
import { ISponserCardProp } from "@/core/types/props/business/Sponser.props";
import React, { FC, Suspense } from "react";

//componets

//types

interface IPropType {
  sponserList: ISponserCardProp[];
}
const SponserSection: FC<IPropType> = ({ sponserList }) => {
  return (
    <main className="bg-white hidden lg:block">
      <section className="container mx-auto px-4 py-6">
        {/* --- title and description --- */}
        <h2 className="text-2xl text-center font-bold pt-4">
          در شهرک رفا ۲۴، بچرخ، بخر و تخفیف بگیر
        </h2>

        <p className="text-center text-slate-600 mt-4">
          با بازگشت وجه می‌توانید هوشمندانه‌تر خرید کنید!
        </p>

        <p className="text-sm text-center text-slate-600 mt-3">
          با خرید کردن از بازگشت وجه، بخشی از خرید خود را می‌توانید از تخفیفان
          به صورت نقدی دریافت کنید.
        </p>

        {/* --- sponser list card --- */}
        <section className=" grid-cols-4 gap-3 mt-24 mb-10 lg:grid hidden">
          {sponserList.map((item, key) => (
            <Suspense key={key} fallback={"Loading..."}>
              <SponserCard
                image={item.image}
                title={item.title}
                discount={item.discount}
              />
            </Suspense>
          ))}
        </section>
      </section>
    </main>
  );
};

export { SponserSection };
