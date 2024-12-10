//base
import React, { FC } from "react";

//componets
import { FullImage } from "../../images/FullImage/FullImage";

//core
import { ISponserCardProp } from "@/core/types/props/business/Sponser.props";

const SponserCard: FC<ISponserCardProp> = ({ title, image, discount }) => {
  return (
    <section
      className="relative border border-dashed rounded-lg p-8 
      cursor-pointer flex justify-center items-center flex-col"
    >
      {/* --- spnser logo --- */}
      <section
        className="absolute top-[-60px] z-10 rounded-lg
         bg-white shadow shadow-sky-800"
      >
        <FullImage
          src={image}
          alt={title}
          height="95px"
          width="120px"
          objectFit="contain"
          className="p-2"
        />
      </section>

      {/* --- content --- */}
      <section className="relative top-[15px]">
        <p className="text-lg text-center font-bold">{title}</p>

        <div className="text-[12px] text-center">
          <span>تا</span>
          <span className="text-lg text-sky-700 mx-1">{discount}%</span>
          <span>بازگشت وجه نقد</span>
        </div>
      </section>
    </section>
  );
};

export { SponserCard };
