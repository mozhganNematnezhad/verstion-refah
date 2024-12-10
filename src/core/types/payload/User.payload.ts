import { ICityOrVillageRes } from "../common/common.res";

export interface ISetUserRealPayload {
  LastName?: string;
  FatherName?: string;
  Gender?: number;
  NationalCode?: string;
  BirthDateShamsi?: string;
  BirthDate?: string;
  MaritalStatus?: number;
  EducationLevel?: number;
  DutySystemStatus?: number;
  FieldOfStudy?: string;
  CityOrVillageId?: ICityOrVillageRes;
  Address?: string;
  Lat?: number;
  Lng?: number;
  PostalCode?: string;
  Name?: string;
  PhoneNumber?: string;
  ProfilePicture?: string;
}
