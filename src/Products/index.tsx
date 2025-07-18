import React from "react";
import MainContainer from "@/shared/components/Container/MainContainer";
import ProductsGrid from "./ProductsGrid";
import { PAGES_INFO } from "../../contants/pageInfo";
import PageInfo from "@/shared/components/Typography/PageInfo";

const Products = () => {
  return (
    <MainContainer>
      <PageInfo
        title={PAGES_INFO.products.title}
        description={PAGES_INFO.products.description}
      />
      <ProductsGrid />
    </MainContainer>
  );
};

export default Products;
