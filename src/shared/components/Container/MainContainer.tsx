import React from "react";
import { Container } from "@mui/material";
import { palette } from "../../../../theme/palette";

const MainContainer = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: palette.background.container,
        border: `1px solid ${palette.divider}`,
        flex: 1,
        ...style,
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
