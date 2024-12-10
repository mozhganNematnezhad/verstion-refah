import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { http } from "../../interceptors/http.interceptors";
import { IAxiosResult } from "@/core/models/axios-result.model";
import {
  ICartPaymentPayload,
  IValidationPaymentPayload,
} from "@/core/types/payload/Cart.payload";

//CartPayment
const CartPayment = async (
  payload: ICartPaymentPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.post("/api/Cart/CartPayment", payload);
};
export const useCartPayment = () => {
  return useMutation(CartPayment);
};

//ValidationPayment
const ValidationPayment = async (
  payload: IValidationPaymentPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await http.get(`/api/Cart/ValidationPayment?refNum=${payload.refNum}`);
};
export const useValidationPayment = () => {
  return useMutation(ValidationPayment);
};
