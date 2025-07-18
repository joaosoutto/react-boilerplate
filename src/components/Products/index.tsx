import React from "react";
// import ProductsGrid from "./ProductsGrid";
import { PAGES_INFO } from "../../../contants/pageInfo";
import PageInfo from "../shared/Typography/PageInfo";
import MainContainer from "../shared/Container/MainContainer";

const Products = () => {
  return (
    <MainContainer>
      <PageInfo
        title={PAGES_INFO.products.title}
        description={PAGES_INFO.products.description}
      />
      {/* <ProductsGrid /> */}
    </MainContainer>
  );
};

export default Products;
