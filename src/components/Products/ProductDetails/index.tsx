import React from "react";
import PageSubtitle from "@/components/shared/Typography/PageSubtitle";
import ProductReview from "@/components/Products/ProductDetails/ProductReview";
import ProductSummary from "@/components/Products/ProductDetails/ProductSummary";
import ProductHeader from "@/components/Products/ProductDetails/ProductHeader";
import { IProduct } from "../types";
import MainContainer from "@/components/shared/Container/MainContainer";

const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <MainContainer>
      <ProductHeader product={product} />
      <PageSubtitle title="Product Details" />
      <ProductSummary product={product} />
      <PageSubtitle title="Product Reviews" />
      <ProductReview product={product} />
    </MainContainer>
  );
};

export default ProductDetails;
