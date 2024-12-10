import {
  membershipTypeEnum,
  membershipTypePersianEnum,
} from "@/core/enums/membership-type.enum";
import { ISelectOption } from "@/core/models/general.model";

//نوع عضویت در شهرک
export const MemnershipTypeData: ISelectOption[] = [
  {
    value: membershipTypeEnum.city,
    label: membershipTypePersianEnum.city,
  },
  {
    value: membershipTypeEnum.club,
    label: membershipTypePersianEnum.club,
  },
  {
    value: membershipTypeEnum.bazaar,
    label: membershipTypePersianEnum.bazaar,
  },
];
