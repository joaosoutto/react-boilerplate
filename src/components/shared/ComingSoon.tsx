import React from "react";

import { Box, Typography } from "@mui/material";
import { palette } from "../../../theme/palette";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import { useIsMobile, useIsTablet } from "../../../hooks/useDimensions";

const ComingSoon = () => {
  const isMobile = useIsMobile();
  const isSmallScreen = useIsTablet();
  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: isMobile || isSmallScreen ? "flex-start" : "center",
        gap: "12px",
        paddingTop: isMobile || isSmallScreen ? "128px" : "0px",
      }}
    >
      <Typography
        sx={{
          fontSize: isMobile ? "18px" : "24px",
          fontWeight: 600,
          color: palette.branded.darkGray,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "8px" : "12px",
          animation: "spin 1.5s linear infinite",
          "@keyframes spin": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.05)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
      >
        <HandymanRoundedIcon
          sx={{
            fontSize: isMobile ? "24px" : "36px",
            color: palette.branded.primary,
          }}
        />
        Coming Soon
      </Typography>
    </Box>
  );
};

export default ComingSoon;
