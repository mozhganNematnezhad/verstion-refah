import { IPaginationPayload } from "../common/common.payload";

export interface IBusinessFilterPayload extends IPaginationPayload {
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
  insideTitle?: string;
  RangeDiscount?: [number, number];
}
