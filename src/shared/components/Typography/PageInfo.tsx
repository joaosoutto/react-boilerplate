import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { palette } from "../../../../theme/palette";

const PageInfo = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  const isMobile = useMediaQuery("(max-width: 750px)");
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "16px" : "24px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          margin: 0,
          width: "100%",
          color: palette.branded.darkGray,
          fontSize: isMobile ? "32px" : "40px",
          borderLeft: `${isMobile ? 4 : 8}px solid ${palette.branded.primary}`,
          paddingLeft: isMobile ? 1 : 2,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            fontSize: "16px",
            color: palette.branded.darkGray,
            width: isMobile ? "100%" : "50%",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default PageInfo;
