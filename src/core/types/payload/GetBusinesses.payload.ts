import { IPaginationPayload } from "../common/common.payload";

export interface IGetBusinessesForLandingPayload {
  cityOrVillageId?: number;
  cityOrVillageTitle?: string;
  countyId?: number;
  countyTitle?: string;
  provinceId?: number;
  provinceTitle?: string;
}

export interface IGetBusinessesByFilterPayload extends IPaginationPayload {
  title?: string;
  categoryId?: number;
  licenseNumber?: string;
  status?: number;
  userOwnerId?: number;
  userContractManagerId?: number;
  cityOrVillageId?: number;
  countyId?: number;
  provinceId?: number;
  forDiscount?: number;
  toDiscount?: number;
  supplyInPerson?: boolean;
  supplyByPhone?: boolean;
  supplyByInternet?: boolean;
}

export interface IGetMyBusinessesPayload extends IPaginationPayload {
  title?: string;
  categoryId?: number;
  licenseNumber?: string;
  status?: number;
  userOwnerId?: number;
  userContractManagerId?: number;
  cityOrVillageId?: number;
  countyId?: number;
  provinceId?: number;
  forDiscount?: number;
  toDiscount?: number;
  supplyInPerson?: boolean;
  supplyByPhone?: boolean;
  supplyByInternet?: boolean;
}

export interface ISetBusinessByUserPayload {
  id?: number;
  title?: string;
  membershipType: number;
  categoryId?: number;
  cityOrVillageId?: number;
  userOwnerId?: number;
  userContractManagerId?: number;
  licenseNumber?: string;
  supplyInPerson?: boolean;
  supplyByPhone?: boolean;
  supplyByInternet?: boolean;
  isRealBusiness?: boolean;
  minDiscount?: number;
  maxDiscount?: number;
  address?: string;
  lat?: number;
  lng?: number;
  postalCode?: string;
  domainName?: string;
}
