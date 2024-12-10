import { ICityOrVillageRes } from "../common/common.res";

export interface IGetMyBusinessMembership {
  id: number;
  title: string;
  categoryId: number;
  cityOrVillageId: number;
  picture: string;
  businessCharterImage: string;
  supplyInPerson: boolean;
  supplyByPhone: boolean;
  supplyByInternet: boolean;
  address: string;
  lat: number;
  lng: number;
  postalCode: string;
  phoneNumber: string;
  about: string;
  description: string;
  cityOrVillage: ICityOrVillageRes;
  domainName: string;
}
