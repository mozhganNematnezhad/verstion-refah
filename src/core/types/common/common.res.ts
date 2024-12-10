// ریسپانس هایی که با پیجینشن هستن
export interface IPageinateListRes {
  count: number;
  totalCount: number;
  currentPage: number;
}

//key and value res
export interface IKeyValueRes {
  key: number;
  value: string;
}

//city or village
export interface ICityOrVillageRes {
  id: number;
  title: string;
  part: IPartRes;
}

export interface IPartRes {
  id: number;
  title: string;
  county: ICountyRes;
}

export interface ICountyRes {
  id: number;
  title: string;
  province: IProvinceRes;
}

export interface IProvinceRes {
  id: number;
  title: string;
  mainLocation: IMainLocationRes;
}

export interface IMainLocationRes {
  id: number;
  title: string;
}
