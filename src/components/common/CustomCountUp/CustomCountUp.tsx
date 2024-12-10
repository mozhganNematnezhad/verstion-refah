"use client";

import { FC } from "react";
import CountUp from "react-countup";

interface IPropType {
  start?: number;
  end: number;
  duration?: number;
  className?: string;
}

const CustomCountUp: FC<IPropType> = ({
  start,
  end,
  duration,
  className,
}): JSX.Element => {
  return (
    <>
      <CountUp
        start={start ? start : 0}
        end={end}
        duration={duration ? duration : 5}
        separator=","
        className={className ? className : ""}
      />
    </>
  );
};

export { CustomCountUp };
