import React from "react";

import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { palette } from "../../../theme/palette";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";

const ComingSoon = () => {
  const isMobile = useMediaQuery("(max-width: 750px)");
  const isSmallScreen = useMediaQuery("(max-width: 1246px)");
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
          fontSize: "24px",
          fontWeight: 600,
          color: palette.branded.darkGray,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
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
            fontSize: "36px",
            color: palette.branded.primary,
          }}
        />
        Coming Soon
      </Typography>
    </Box>
  );
};

export default ComingSoon;
