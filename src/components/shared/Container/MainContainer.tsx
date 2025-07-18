import React from "react";
import { Container } from "@mui/material";

const MainContainer = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
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
        padding: 0,
        gap: "24px",
        maxHeight: "100%",
        height: "100%",
        ...style,
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
