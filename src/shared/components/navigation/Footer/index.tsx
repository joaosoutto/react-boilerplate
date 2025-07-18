import React from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../../../../../theme/palette";
import { useIsMobile } from "../../../../../hooks/useDimensions";

const Footer = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: palette.branded.mainBg,
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        style={{
          color: palette.branded.lightBg,
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        React Boilerplate 2025 All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
