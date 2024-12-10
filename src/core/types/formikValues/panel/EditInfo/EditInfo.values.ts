import {
  IMapFeildType,
  ISingleSelectOption,
} from "@/core/models/general.model";

export interface IEditInfoValues {
  name: string;
  lastName: string;
  fatherName: string;
  nationalCode: string;
  phoneNumber: string;
  gender: ISingleSelectOption;
  email: string;
  province: ISingleSelectOption;
  county: ISingleSelectOption;
  cityOrVillageId: ISingleSelectOption;
  postalCode: string;
  address: string;
  mapInput: IMapFeildType;
}
