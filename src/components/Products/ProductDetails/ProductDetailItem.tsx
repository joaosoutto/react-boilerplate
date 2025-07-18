import React from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../../../../theme/palette";

const ProductDetailItem = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: `1px dotted ${palette.branded.darkGray}`,
        paddingBottom: "6px",
        gap: "4px",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          color: palette.branded.darkGray,
        }}
      >
        {title}:
      </Typography>
      <Typography
        sx={{ fontSize: "14px", fontWeight: 600, color: palette.branded.gray }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default ProductDetailItem;
