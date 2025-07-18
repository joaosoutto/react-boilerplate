import React from "react";
import { Box } from "@mui/material";
import { useIsMobile, useIsTablet } from "../../../../hooks/useDimensions";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  const isSmallScreen = useIsTablet();

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flex: 1,
        width: isMobile || isSmallScreen ? "100%" : "90%",
        margin: "0 auto",
        paddingBottom: "24px",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default ContentContainer;
