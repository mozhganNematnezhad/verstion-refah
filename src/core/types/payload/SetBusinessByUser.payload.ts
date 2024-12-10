export interface ISetBusinessByUserPayload {
  id?: number;
  title?: string;
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
