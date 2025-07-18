import React from "react";
import { Box, Typography } from "@mui/material";
import ProductDetailItem from "@/components/Products/ProductDetails/ProductDetailItem";
import { palette } from "../../../../theme/palette";
import { IProduct } from "../types";

const ProductSummary = ({ product }: { product: IProduct }) => {
  return (
    <Box
      style={{
        border: `1px dotted ${palette.branded.gray}`,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "24px",
        borderRadius: "12px",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "6px",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <ProductDetailItem title="Brand" value={product?.brand} />
        <ProductDetailItem title="Category" value={product?.category} />
        <ProductDetailItem
          title="Availability"
          value={product?.availabilityStatus}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 600,
          color: palette.branded.primary,
          fontFamily: "sans-serif",
          alignSelf: "flex-end",
        }}
      >
        $ {product?.price} / unit
      </Typography>
    </Box>
  );
};

export default ProductSummary;
