export interface IBusinessCartProp {
  href: string;
  image: string | null;
  title: string;
  location: string;
  rate: number;
  discount: number;
  category?: string;
  width?: string;
  btnTitle?: string;
  supplyInPerson?: boolean;
  supplyByPhone?: boolean;
  supplyByInternet?: boolean;
}
