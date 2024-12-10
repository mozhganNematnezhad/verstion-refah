"use client";

import { FC, useState } from "react";

//lib
import { Steps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramNext,
  faDiagramPredecessor,
} from "@fortawesome/free-solid-svg-icons";

//components
import { FullButton } from "../../Form/FullButton/FullButton";

//core
import { IStepType } from "@/core/types/props/general/step.props";
import { bttonTypeEnum } from "@/core/enums/button.enum";

interface IPropType {
  steps: IStepType[];
  finishOnClick: () => void;
  canBack?: boolean;
  direction?: "horizontal" | "vertical";
}

const SteperWrapper: FC<IPropType> = ({
  steps,
  finishOnClick,
  canBack = true,
  direction = "horizontal",
}) => {
  const [current, setCurrent] = useState<number>(0);

  //check has this important array
  if (!steps) return;

  return (
    <>
      {/* --- step navigation bar --- */}
      <Steps
        className="mt-4"
        direction={direction}
        current={current}
        items={steps.map((item) => ({
          key: item.title,
          ...item,
        }))}
      />

      {/* --- step content--- */}
      <section>{steps[current].content}</section>

      {/* --- button part --- */}
      <section className="flex justify-between items-center gap-2">
        {current < steps.length - 1 && (
          <FullButton
            btnText="مرحله ‌بعد"
            type={bttonTypeEnum.button}
            icon={
              <FontAwesomeIcon
                icon={faDiagramNext}
                className="text-white text-lg"
              />
            }
            onClick={() => setCurrent(current + 1)}
          />
        )}

        {current === steps.length - 1 && (
          <FullButton
            btnText="تکمیل فرآیند"
            type={bttonTypeEnum.button}
            className="!bg-green-500 hover:!bg-green-400"
            onClick={finishOnClick}
          />
        )}

        {canBack && current > 0 && (
          <FullButton
            btnText="مرحله قبل"
            type={bttonTypeEnum.button}
            icon={
              <FontAwesomeIcon
                icon={faDiagramPredecessor}
                className="text-white text-lg"
              />
            }
            onClick={() => setCurrent(current - 1)}
          />
        )}
      </section>
    </>
  );
};

export { SteperWrapper };
