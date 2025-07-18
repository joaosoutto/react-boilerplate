import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import CodeIcon from "@mui/icons-material/Code";
import { palette } from "../../../../theme/palette";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: palette.background.appBar,
        borderBottom: `1px solid ${palette.divider}`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: palette.gray,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          onClick={() => handleNavigation("/")}
        >
          <CodeIcon fontSize="large" color="primary" />
          React Boilerplate
        </Typography>

        <HeaderNavigation />

        {/* User Actions -- disable until we have auth */}
        {/* <AuthHeaderSection /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
