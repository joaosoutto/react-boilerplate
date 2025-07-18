import React from "react";
import { useIsMobile, useIsTablet } from "../../../../hooks/useDimensions";
import { Box } from "@mui/material";

const GridContainer = ({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns?: number;
}) => {
  const isMobile = useIsMobile();
  const isSmallScreen = useIsTablet();

  return (
    <Box
      style={{
        gap: isMobile ? "12px" : "24px",
        width: "100%",
        justifySelf: "center",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        display: "grid",
        gridTemplateColumns:
          isMobile || isSmallScreen
            ? "repeat(1, 1fr)"
            : `repeat(${columns || 2}, 1fr)`,
      }}
    >
      {children}
    </Box>
  );
};

export default GridContainer;
