import React from "react";
import {
  Box,
} from "@mui/material";
import useGetProducts from "../../query/products/useGetProducts";
import { IProduct } from "./types";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

const ProductsGrid = () => {
  const { products, isPending } = useGetProducts();

  if (isPending) {
    return (
      <Box style={styles.container}>
        {Array.from({ length: 15 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </Box>
    );
  }

  return (
    <Box style={styles.container}>
      {products?.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
};

const styles = {
  container: {
    width: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "12px",
    paddingRight: "6px",
  },
};

export default ProductsGrid;
