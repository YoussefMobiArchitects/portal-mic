

import { ProductResult } from "../models/product";
import axios from "./http-common";
import APIEndpoint from "./APIEndpoint";

export const getListProductService = async () => {
  const url = `${APIEndpoint.list().list_product_url}`;
  const response = await axios.get<ProductResult>(url);
  console.log("the list ====> :", response)
  return response.data
};


export const fetchListProduct = async (): Promise<ProductResult> => {
  const url = `${APIEndpoint.list().list_product_url}`;
  const response = await fetch(url);
  const data = await response.json()
  console.log("the data products : ", data)
  return data
}