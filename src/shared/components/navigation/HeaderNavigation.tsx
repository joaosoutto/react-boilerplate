import React from "react";
import { Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import { palette } from "../../../../theme/palette";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";

const HeaderNavigation: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const routes = [
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
  ];

  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      {routes.map((route) => (
        <Button
          key={route.path}
          color="inherit"
          startIcon={route.icon}
          onClick={() => handleNavigation(route.path)}
          sx={{
            color: palette.gray,
            textTransform: "none",
          }}
        >
          {route.label}
        </Button>
      ))}
    </Box>
  );
};

export default HeaderNavigation;
