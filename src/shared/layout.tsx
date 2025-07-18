import React from "react";

import { Box } from "@mui/material";
import { palette } from "../../theme/palette";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";

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
        height: "100vh",
        width: "100%",
        backgroundColor: palette.branded.darkGray,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          backgroundColor: palette.branded.lightBg,
          margin: 2,
          padding: 2,
          overflow: "auto",
        }}
      >
        {props.children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
