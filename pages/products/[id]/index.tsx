import React from "react";
import { Typography } from "@mui/material";
import MainContainer from "../../../../src/components/shared/Container/MainContainer";
import { palette } from "../../../../src/theme/palette";
import { useParams } from "next/navigation";
import useGetProductsDetails from "../../../../src/query/products/useGetProductsDetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product } = useGetProductsDetails(id as string);

  console.log(product);
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
    </MainContainer>
  );
};

export default ProductDetailsPage;
