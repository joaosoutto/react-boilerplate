import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { palette } from "../../../theme/palette";
import Image from "next/image";
import { IProduct } from "./types";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useRouter } from "next/router";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import useStore from "../../store/store";
import { handleFavoriteClick } from "./utils";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const { title, thumbnail, category, price, rating, id } = product;
  const { favoriteProducts, setFavoriteProducts } = useStore();
  const isFavorite = favoriteProducts?.some((p) => p.id === product.id);

  const getRating = (rating: number) => {
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
    <Box sx={styles.imageContainer}>
      <Image src={thumbnail} alt={title} width={70} height={70} />
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
              fontSize: "24px",
            }}
          />
        ) : (
          <FavoriteBorderOutlinedIcon
            sx={{
              color: palette.branded.primary,
              fontSize: "24px",
            }}
          />
        )}
      </IconButton>
    </Box>
  );

  const ProductInfo = () => (
    <Box sx={styles.productInfoContainer}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: 600, marginBottom: "-2px" }}
          color={palette.branded.darkGray}
        >
          {title.substring(0, 20)}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 600 }}
          color={palette.branded.gray}
        >
          {category}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 600,
          color: palette.branded.primary,
          fontFamily: "sans-serif",
        }}
      >
        $ {price}
      </Typography>

      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontFamily: "sans-serif",
        }}
      >
        {rating}
        {getRating(rating)}
      </Typography>
    </Box>
  );

  return (
    <Box sx={styles.productCard} onClick={() => router.push(`/products/${id}`)}>
      <ProductImage />
      <ProductInfo />
    </Box>
  );
};

const styles = {
  productCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: palette.white,
    cursor: "pointer",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    elevation: 1,
    borderBottomRightRadius: "20px",
    minHeight: "236px",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: palette.branded.secondary,
    width: "100%",
    height: "84px",
    padding: "12px",
    gap: "12px",
    position: "relative",
  },
  productInfoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    height: "100%",
    padding: "12px",
  },
};

export default ProductCard;
