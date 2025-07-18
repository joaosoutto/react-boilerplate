import React from "react";
import { Box, Typography } from "@mui/material";
import { IProduct, IProductReview } from "@/components/Products/types";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { palette } from "../../../../theme/palette";
import { useIsMobile, useIsTablet } from "../../../../hooks/useDimensions";

const ProductReview = ({ product }: { product: IProduct }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const ReviewQuote = () => {
    return (
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 600,
          color: palette.branded.gray,
          display: "inline",
          fontStyle: "italic",
        }}
      >
        &quot;
      </Typography>
    );
  };

  const ReviewCard = ({ review }: { review: IProductReview }) => {
    return (
      <Box
        key={review.id}
        style={{
          border: `1px dotted ${palette.branded.gray}`,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          height: isMobile || isTablet ? "150px" : "250px",
          padding: "24px",
          borderRadius: "12px",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: palette.branded.darkGray,
            }}
          >
            <ReviewQuote />
            {review.comment}
            <ReviewQuote />
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "16px",
              fontWeight: 600,
              color: palette.branded.primary,
            }}
          >
            <AccountCircleOutlinedIcon /> {review?.reviewerName}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: palette.branded.gray,
            }}
          >
            {review?.date.split("T")[0]}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        gap: "24px",
        borderRadius: "12px",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "32px",
        flexDirection: isMobile ? "column" : isTablet ? "row" : "row",
      }}
    >
      {product?.reviews?.map((review: IProductReview) => (
        <ReviewCard key={review?.id} review={review} />
      ))}
    </Box>
  );
};

export default ProductReview;
