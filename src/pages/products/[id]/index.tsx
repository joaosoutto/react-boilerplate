import React from "react";
import { useParams } from "next/navigation";
import useGetProductsDetails from "../../../../query/products/useGetProductsDetails";
import ProductDetails from "../../../components/Products/ProductDetails";
import Loading from "../../../components/shared/Loading";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product, isPending } = useGetProductsDetails(id as string);
  console.log(isPending);

  if (isPending || !product) {
    return <Loading text="Loading product..." />;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
