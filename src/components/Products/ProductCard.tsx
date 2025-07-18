import React from "react";
import { Typography, Box } from "@mui/material";
import { palette } from "../../theme/palette";
import Image from "next/image";
import { IProduct } from "./types";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import router from "next/router";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0px",
          marginBottom: "2px",
        }}
      >
        {[...Array(fullStars)].map((_, index) => (
          <StarIcon
            key={index}
            sx={{
              color: palette.gold,
              fontSize: "18px",
            }}
          />
        ))}
        {hasHalfStar && (
          <StarHalfIcon
            sx={{
              color: palette.gold,
              fontSize: "18px",
            }}
          />
        )}
      </Box>
    );
  };

  const ProductImage = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: palette.white,
        width: "100%",
        height: "150px",
        borderRadius: "10px",
      }}
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={120}
        height={120}
      />
    </Box>
  );

  const ProductInfo = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "space-between",
        flex: 1,
        width: "100%",
        padding: "12px",
      }}
    >
      <Typography
        sx={{ fontSize: "16px", fontWeight: 600 }}
        color={palette.text.secondary}
      >
        {product.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            alignSelf: "flex-start",
          }}
        >
          ${product.price}
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            alignSelf: "flex-start",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {product.rating}
          {getRating(product.rating)}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: palette.gray,
        borderRadius: "10px",
        gap: "12px",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
    >
      <ProductImage />
      <ProductInfo />
    </Box>
  );
};

export default ProductCard;
