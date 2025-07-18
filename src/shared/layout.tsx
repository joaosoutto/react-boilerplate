import React, { useState } from "react";

import { Box } from "@mui/material";
import Header from "./components/navigation/Header";

interface LayoutProps {
  children: React.ReactNode;
  router?: unknown;
  classes?: unknown;
  width?: unknown;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "100vh",
        // overflow: "hidden",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: 2,
          maxHeight: "100%",
          maxWidth: "100%",
          overflow: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
