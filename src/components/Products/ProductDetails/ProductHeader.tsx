import React from "react";
import { IconButton, Box, Typography } from "@mui/material";
import { palette } from "../../../../theme/palette";
import Image from "next/image";
import { IProduct } from "@/components/Products/types";
import useStore from "@/store/store";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { handleFavoriteClick } from "@/components/Products/utils";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PageInfo from "@/components/shared/Typography/PageInfo";
import { useIsMobile, useIsTablet } from "../../../../hooks/useDimensions";

const ProductHeader = ({ product }: { product: IProduct }) => {
  const { favoriteProducts, setFavoriteProducts } = useStore();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const isFavorite = favoriteProducts?.some((p) => p.id === product?.id);

  const getRating = (rating: number) => {
    if (!rating) return null;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0px",
          marginBottom: "2px",
        }}
      >
        {[...Array(fullStars)]?.map((_, index) => (
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

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        gap: "24px",
        alignItems: isMobile ? "flex-start" : "center",
        position: "relative",
        flexDirection: isMobile ? "column" : isTablet ? "row" : "row",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          width={200}
          height={200}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: palette.branded.darkGray,
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: "sans-serif",
          }}
        >
          {product?.rating}
          {getRating(product?.rating)}
        </Typography>
      </Box>

      <PageInfo title={product?.title} description={product?.description} />

      <IconButton
        onClick={(e) =>
          handleFavoriteClick(e, product, favoriteProducts, setFavoriteProducts)
        }
        sx={{ position: "absolute", top: "4px", right: "4px" }}
      >
        {isFavorite ? (
          <FavoriteOutlinedIcon
            sx={{
              color: palette.branded.primary,
              fontSize: "32px",
            }}
          />
        ) : (
          <FavoriteBorderOutlinedIcon
            sx={{
              color: palette.branded.primary,
              fontSize: "32px",
            }}
          />
        )}
      </IconButton>
    </Box>
  );
};

export default ProductHeader;
