import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { http } from "../../interceptors/http.interceptors";
import { IGetWishlistsPayload } from "@/core/types/payload/Wishlists.payload";

//GetWishlists
const GetWishlists = async (
  payload: IGetWishlistsPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post("/api/Wishlist/GetWishlists", payload);
};

export const useGetWishlists = () => {
  return useMutation(GetWishlists);
};

//RemoveWishlist
const RemoveWishlist = async (
  id: number
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.delete(`/api/Wishlist/RemoveWishlist?ProductId=${id}`);
};

export const useRemoveWishlist = () => {
  return useMutation(RemoveWishlist);
};

//SetWishlist
const SetWishlist = async (
  id: number
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post(`/api/Wishlist/SetWishlist?ProductId=${id}`);
};

export const useSetWishlist = () => {
  return useMutation(SetWishlist);
};

//GetWishlistsForDropDown
const GetWishlistsForDropDown = async (
  payload: IGetWishlistsPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get(`/api/Wishlist/GetWishlistsProductIdForDropDown`);
};

export const useGetWishlistsForDropDown = () => {
  return useMutation(GetWishlistsForDropDown);
};
