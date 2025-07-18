import axios from "axios";
import { BASE_API_URL } from "../../contants/api";

class ProductsApi {
  static getProducts() {
    return axios.get(`${BASE_API_URL}/products`);
  }

  static getProductById(id: string) {
    return axios.get(`${BASE_API_URL}/products/${id}`);
  }
}

export default ProductsApi;
