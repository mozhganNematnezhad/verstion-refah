import { toJalaali } from "jalaali-js";

export interface IFullDateOBJ {
  hours: number;
  minutes: number;
  seconds: number;
  day: number;
  year: number;
  month: number;
}

export const getFullCurrentJalaliDate = (): IFullDateOBJ => {
  const date = new Date();
  const newDate = toJalaali(date);

  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    day: newDate.jd,
    month: newDate.jm,
    year: newDate.jy,
  };
};
