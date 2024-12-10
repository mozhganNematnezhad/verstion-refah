import { ISingleSelectOption } from "@/core/models/general.model";

export interface ISetBusinessByUserValues {
  supplyByPhone: boolean;
  membershipType: ISingleSelectOption;
  isRealBusiness: boolean;
  title: string;
  category: ISingleSelectOption;
  licenseNumber: string;
  domainName: string;
  postalCode: string;
  minDiscount: number;
  maxDiscount: number;
  province: ISingleSelectOption;
  county: ISingleSelectOption;
  cityOrVillageId: ISingleSelectOption;
  address: string;
  lat: number;
  lng: number;
}
