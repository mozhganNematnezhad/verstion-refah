//base
import { FC } from "react";

interface IPropType {
  nameWeekDayTitle: string;
  startTime: string;
  endTime: string;
  isCurrentDay: boolean;
}

const TimeCard: FC<IPropType> = ({
  nameWeekDayTitle,
  startTime,
  endTime,
  isCurrentDay,
}) => {
  return (
    <section
      className="p-2 rounded-md shadow flex flex-col justify-center items-center gap-1"
      style={isCurrentDay ? { borderColor: "#0369a1", borderWidth: "3px" } : {}}
    >
      <p className="text-slate-700">{nameWeekDayTitle}</p>
      <p>
        {startTime} - {endTime}
      </p>
    </section>
  );
};

export { TimeCard };
