import { genderEnum, genderPersianEnum } from "@/core/enums/general.enum";
import { IFullSelectOption } from "@/core/models/fullSelectOption.model";

export const genderData: IFullSelectOption[] = [
  {
    value: genderEnum.man,
    label: genderPersianEnum.man,
  },
  {
    value: genderEnum.woman,
    label: genderPersianEnum.woman,
  },
];
