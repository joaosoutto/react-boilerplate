import React from "react";
import { Container } from "@mui/material";
import { useIsMobile } from "../../../../hooks/useDimensions";

const MainContainer = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  const isMobile = useIsMobile();
  return (
    <Container
      style={{
        flex: 1,
        width: "100%",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "24px",
        maxHeight: "100%",
        height: "100%",
        padding: isMobile ? 0 : "16px",
        ...style,
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
