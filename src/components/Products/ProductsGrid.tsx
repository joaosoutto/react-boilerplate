import React from "react";
import { IProduct } from "./types";
import ProductCard from "./ProductCard";
import useGetProducts from "../../../query/products/useGetProducts";
import GridContainer from "../shared/Container/GridContainer";
import PageSubtitle from "../shared/Typography/PageSubtitle";
import ContentContainer from "../shared/Container/ContentContainer";
import { Box, CircularProgress, Typography } from "@mui/material";
import { palette } from "../../../theme/palette";
import Loading from "../shared/Loading";

const ProductsGrid = () => {
  const { products, isPending } = useGetProducts();

  if (isPending) {
    return (
      <ContentContainer>
        <PageSubtitle title="Discover Our Products" />
        <Loading text="Fetching products..." />
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      <PageSubtitle title="Discover Our Products" />
      <GridContainer columns={4}>
        {products?.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridContainer>
    </ContentContainer>
  );
};

export default ProductsGrid;
