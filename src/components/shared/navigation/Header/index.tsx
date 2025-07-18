import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { palette } from "../../../../../theme/palette";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "../Logo";
import { useIsMobile } from "../../../../../hooks/useDimensions";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: palette.branded.mainBg,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />

        <HeaderNavigation isMobile={isMobile} />

        {/* User Actions -- disable until we have auth */}
        {/* <AuthHeaderSection /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
