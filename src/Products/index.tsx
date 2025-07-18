import React from "react";
import { Typography } from "@mui/material";
import MainContainer from "@/shared/components/Container/MainContainer";
import { palette } from "../../theme/palette";
import ProductsGrid from "./ProductsGrid";

const Products = () => {
  return (
    <MainContainer
      style={{
        gap: "20px",
        overflow: "auto",
        padding: "20px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: palette.gray,
          mb: 2,
        }}
      >
        Products
      </Typography>
      <ProductsGrid />
    </MainContainer>
  );
};

export default Products;
