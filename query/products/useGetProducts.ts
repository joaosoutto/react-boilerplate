import { useQuery } from "@tanstack/react-query";
import ProductsApi from "../../services/api/ProductsApi";
import { QUERY_KEYS } from "../constants";

const useGetProducts = () => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: async () => {
      const response = await ProductsApi.getProducts();
      return response.data;
    },
  });
  return {
    products: data?.products,
    ...rest,
  };
};

export default useGetProducts;
