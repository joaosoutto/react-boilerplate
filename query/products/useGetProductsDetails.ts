import { useQuery } from "@tanstack/react-query";
import ProductsApi from "../../services/api/ProductsApi";
import { QUERY_KEYS } from "../constants";

const useGetProductsDetails = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEYS.products, id],
    queryFn: async () => {
      const response = await ProductsApi.getProductById(id);
      return response.data;
    },
  });
  return {
    product: data,
    ...rest,
  };
};

export default useGetProductsDetails;
