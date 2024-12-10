import { ICityOrVillageRes, IPageinateListRes } from "./../common/common.res";

// GetBusinessesByFilter
export interface IGetBusinessesByFilterResult {
  id: number;
  title: string;
  categoryId: number;
  cityOrVillageId: number;
  userOwnerId: number;
  userContractManagerId: number;
  licenseNumber: string;
  supplyInPerson: boolean;
  supplyByPhone: boolean;
  supplyByInternet: boolean;
  isRealBusiness: boolean;
  minDiscount: number;
  maxDiscount: number;
  address: string;
  lat: number;
  lng: number;
  postalCode: string;
  domainName: string;
  picture: string;
  businessCharterImage: string;
  status: number;
  statusTitle: string;
  about: string;
  phoneNumbers: string[];
  description: string;
  feeAmount: number;
  feeStartDateShamsi: string;
  feeEndDateShamsi: string;
  totalOrder: number;
  referee: string;
  baseStatus: boolean;
  contactStatus: boolean;
  addressStatus: boolean;
  productStatus: boolean;
  installmentTerm: boolean;
  bankLoanTerm: boolean;
  bonusTerm: boolean;
  userOwner: IUserOwnerRes;
  userContractManager: IUserContractManagerRes;
  category: ICategoryRes;
  cityOrVillage: ICityOrVillageRes;
  galleries: IGalleryRes[];
  documentFiles: IBusinessDocumentFile[];
  products: IProductByFilter[];
  paymentTerms: IBusinessPaymentTerm[];
}

export interface IProductByFilter {
  id: number;
  title: string;
  description: string;
  serialNumber: string;
  sellStrategy: number;
  stockCount: number;
  cost: number;
  minSell: number;
  maxSell: number;
  order: number;
  businessId: number;
  productCategoryId: number;
  discount: number;
  sellingInPerson: boolean;
  sellingByInternet: boolean;
  status: number;
  statusTitle: string;
  totalOrder: number;
  rejectReason: string;
  picture: string;
  visitCount: number;
  productCategory: IProductCategoryRes;
  productGallery: IProductCategoryRes[];
  productGalleryOrdered: IProductGalleryOrderedRes[];
  business: {
    id: number;
    title: string;
    categoryId: number;
    cityOrVillageId: number;
  };
}

//GetBusinessesForLanding
export interface IGetBusinessesForLanding {
  key: IbusinessCategory;
  value: IBusinessProduct[];
}

export interface IbusinessCategory {
  id: number;
  title: string;
}
export interface IBusinessProduct {
  id: number;
  title: string;
  cityOrVillage: ICityOrVillageRes;
  maxDiscount: number;
  minDiscount: number;
  picture: string;
  charterImage: string;
  rating: number;
  domainName: string;
  supplyInPerson: boolean;
  supplyByPhone: boolean;
  supplyByInternet: boolean;
}

//GetBusinesses
export interface IGetBusinessesRes {
  id: number;
  title: string;
  categoryId: number;
  cityOrVillageId: number;
  userOwnerId: number;
  userContractManagerId: number;
  licenseNumber: string;
  supplyInPerson: boolean;
  supplyByPhone: boolean;
  supplyByInternet: boolean;
  isRealBusiness: boolean;
  minDiscount: number;
  maxDiscount: number;
  address: string;
  lat: number;
  lng: number;
  postalCode: string;
  domainName: string;
  picture: string;
  businessCharterImage: string;
  status: number;
  statusTitle: string;
  about: string;
  phoneNumbers: string[];
  description: string;
  feeAmount: number;
  feeStartDateShamsi: string;
  feeEndDateShamsi: string;
  totalOrder: number;
  referee: string;
  baseStatus: boolean;
  contactStatus: boolean;
  addressStatus: boolean;
  productStatus: boolean;
  installmentTerm: boolean;
  bankLoanTerm: boolean;
  bonusTerm: boolean;
  userOwner: IUserOwnerRes;
  userContractManager: IUserContractManagerRes;
  category: ICategoryRes;
  cityOrVillage: ICityOrVillageRes;
  galleries: IGalleryRes[];
  documentFiles: IBusinessDocumentFile[];
  products: IBusinessProduct[];
  paymentTerms: IBusinessPaymentTerm[];
}

export interface IUserOwnerRes {
  id: number;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  documentFiles: IUserOwnerDocumentFile[];
}

export interface IUserOwnerDocumentFile {
  id: number;
  userId: number;
  businessId: number;
  type: number;
  typeTitle: string;
  actorType: number;
  actorTypeTitle: string;
  path: string;
  isActive: boolean;
  startDateShamsi: string;
  endDateShamsi: string;
}

export interface IUserContractManagerRes {
  id: number;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  documentFiles: IUserContractManagerDocumentFile[];
}

export interface IUserContractManagerDocumentFile {
  id: number;
  userId: number;
  businessId: number;
  type: number;
  typeTitle: string;
  actorType: number;
  actorTypeTitle: string;
  path: string;
  isActive: boolean;
  startDateShamsi: string;
  endDateShamsi: string;
}

export interface ICategoryRes {
  id: number;
  title: string;
  parentId: number;
}

export interface IGalleryRes {
  id: number;
  title: string;
  description: string;
  businessId: number;
  status: boolean;
  file: string;
}

export interface IBusinessDocumentFile {
  id: number;
  userId: number;
  businessId: number;
  type: number;
  typeTitle: string;
  actorType: number;
  actorTypeTitle: string;
  path: string;
  isActive: boolean;
  startDateShamsi: string;
  endDateShamsi: string;
}

export interface IBusinessProduct {
  id: number;
  title: string;
  description: string;
  serialNumber: string;
  sellStrategy: number;
  stockCount: number;
  cost: number;
  minSell: number;
  maxSell: number;
  order: number;
  businessId: number;
  productCategoryId: number;
  discount: number;
  sellingInPerson: boolean;
  sellingByInternet: boolean;
  status: number;
  statusTitle: string;
  totalOrder: number;
  rejectReason: string;
  picture: string;
  visitCount: number;
  productCategory: IProductCategoryRes;
  productGallery: IProductGalleryRes[];
  productGalleryOrdered: IProductGalleryOrderedRes[];
  business: {
    id: number;
    title: string;
    categoryId: number;
    cityOrVillageId: number;
  };
}

export interface IProductCategoryRes {
  id: number;
  title: string;
  parentId: number;
  parentBusinessId: number;
}

export interface IProductGalleryRes {
  id: number;
  productId: number;
  isDefault: boolean;
  order: number;
  status: boolean;
  file: string;
}

export interface IProductGalleryOrderedRes {
  id: number;
  productId: number;
  isDefault: boolean;
  order: number;
  status: boolean;
  file: string;
}

export interface IBusinessPaymentTerm {
  businessId: number;
  type: number;
  typeTitle: string;
  comment: string;
  id: number;
}

//GetMyBusiness
export interface IGetMyBusinessResult extends IPageinateListRes {
  items: IGetBusinessesRes[];
}
