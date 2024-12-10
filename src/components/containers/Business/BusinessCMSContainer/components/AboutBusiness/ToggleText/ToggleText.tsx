"use client";

//base
import { FC, useState } from "react";

//lib
import { Button } from "antd";
import parse from "html-react-parser";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { buttonStyleType } from "@/core/enums/button.enum";

interface IPropType {
  text: string;
  maxLength?: number;
}

const ToggleText: FC<IPropType> = ({ text, maxLength = 400 }) => {
  const [showFullText, setShowFullText] = useState<boolean>(false);

  return (
    <section>
      <p
        className={`transition-opacity duration-300 ease-in ${
          showFullText ? "opacity-100" : "opacity-40"
        }`}
      >
        {showFullText ? parse(text) : parse(text.slice(0, maxLength))}
      </p>

      {text.length > maxLength && (
        <section className="flex justify-center items-center mt-4">
          <FullButton
            btnText={showFullText ? "نمایش کمتر" : "نمایش بیشتر"}
            styleType={buttonStyleType.dashed}
            onClick={() => setShowFullText((val) => !val)}
          />
        </section>
      )}
    </section>
  );
};

export { ToggleText };
