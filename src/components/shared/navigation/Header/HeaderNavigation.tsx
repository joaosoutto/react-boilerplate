import React, { useState } from "react";
import { Button, Box, Drawer, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { palette } from "../../../../../theme/palette";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo";
import MenuIcon from "@mui/icons-material/Menu";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import PersonPinIcon from "@mui/icons-material/PersonPin";

interface Route {
  path: string;
  icon: React.ReactNode;
  label: string;
}

const routes: Route[] = [
  {
    path: "/",
    icon: <HomeIcon />,
    label: "Home",
  },
  {
    path: "/products",
    icon: <CategoryIcon />,
    label: "Products",
  },
  {
    path: "/recipes",
    icon: <FastfoodIcon />,
    label: "Recipes",
  },
  {
    path: "/cocktails",
    icon: <LocalBarIcon />,
    label: "Cocktails",
  },
  {
    path: "/about",
    icon: <PersonPinIcon />,
    label: "About",
  },
];

const MobileNavigation: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleNavigation: (path: string) => void;
}> = ({ isOpen, setIsOpen, handleNavigation }) => (
  <Box sx={{ display: "flex", gap: 4 }}>
    <Button onClick={() => setIsOpen(!isOpen)}>
      <MenuIcon style={{ color: palette.branded.white }} />
    </Button>
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100vw",
          height: "100vh",
          backgroundColor: palette.branded.white,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: palette.branded.mainBg,
            padding: "24px 16px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <IconButton
            style={{ alignSelf: "flex-end", padding: "0px" }}
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon
              style={{
                padding: "0px",
                margin: "0px",
                color: palette.branded.lightBg,
              }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {routes.map((route) => (
            <Button
              key={route.path}
              onClick={() => handleNavigation(route.path)}
              sx={{
                color: palette.branded.primary,
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              {route.label}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: palette.branded.mainBg,
            padding: "24px 16px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Logo />
        </Box>
      </Box>
    </Drawer>
  </Box>
);

const DesktopNavigation: React.FC<{
  handleNavigation: (path: string) => void;
}> = ({ handleNavigation }) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    {routes.map((route) => (
      <Button
        key={route.path}
        color="inherit"
        startIcon={route.icon}
        onClick={() => handleNavigation(route.path)}
        sx={{
          color: palette.gray,
          textTransform: "none",
          position: "relative",
          "&:hover": {
            "&::after": {
              content: '""',
              position: "absolute",
              top: "100%",
              display: "block",
              height: "2px",
              backgroundColor: palette.branded.primary,
              animation: "hoverAnimation 0.2s forwards",
            },
          },
          "@keyframes hoverAnimation": {
            from: {
              width: "0",
              left: "50%",
            },
            to: {
              width: "100%",
              left: "0",
            },
          },
        }}
      >
        {route.label}
      </Button>
    ))}
  </Box>
);

const HeaderNavigation: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return isMobile ? (
    <MobileNavigation
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleNavigation={handleNavigation}
    />
  ) : (
    <DesktopNavigation handleNavigation={handleNavigation} />
  );
};

export default HeaderNavigation;
