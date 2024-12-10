import { IGetMyBusinessMembership } from "./FollowingBusiness.res";

export interface IBusinessProductDeatils {
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
  productCategoryId: number;
  businessId: number;
  discount: number;
  sellingInPerson: boolean;
  sellingByInternet: boolean;
  status: number;
  statusTitle: string;
  totalOrder: number;
  rejectReason: string;
  picture: string;
  visitCount: number;
  productCategory: IBusinessProductCategory[];
  productGallery: IBussinesProductGalleries[];
  productGalleryOrdered: IBussinesProductGalleries[];
  business: IGetMyBusinessMembership;
}

//BussinesProductGalleries
export interface IBussinesProductGalleries {
  file: string;
  id: number;
  title: string;
  description: string;
  businessId: number;
  status: boolean;
}
// BusinessProductCategory
export interface IBusinessProductCategory {
  id: number;
  title: string;
  parentId: number;
  parentBusinessId: number;
}
