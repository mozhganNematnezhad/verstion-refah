//SelectOption
export interface ISelectOption {
  label: string;
  value: number;
}
export type ISingleSelectOption = ISelectOption | null;
export type IMultiSelectOption = ISelectOption[] | null;

//map data type
export type IMapFeildType = {
  lat: number;
  lng: number;
} | null;
