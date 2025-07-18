import React from "react";

import { Box } from "@mui/material";
import { palette } from "../../theme/palette";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import { useIsMobile } from "../../hooks/useDimensions";

interface LayoutProps {
  children: React.ReactNode;
  router?: unknown;
  classes?: unknown;
  width?: unknown;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const isMobile = useIsMobile();
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
          padding: isMobile ? 2 : 4,
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
