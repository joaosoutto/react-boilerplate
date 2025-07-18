import React from "react";

import recipeImage from "../assets/images/recipes.jpg";
import cocktailsImage from "../assets/images/cocktails.jpg";
import productsImage from "../assets/images/products.jpg";
import aboutImage from "../assets/images/about.png";

import { Box, Typography } from "@mui/material";
import { palette } from "../../theme/palette";
import HomeCard from "./HomeCard";
import { useIsMobile, useIsTablet } from "../../hooks/useDimensions";

const HomeGrid = () => {
  const cards = [
    {
      title: "Products",
      description:
        "Find the best products in the market with this simulated e-commerce platform",
      image: productsImage,
      path: "/products",
    },
    {
      title: "Recipes",
      description:
        "Find the best recipes for your family with this simulated online recipe platform",
      image: recipeImage,
      path: "/recipes",
    },
    {
      title: "Cocktails",
      description:
        "Find the best cocktails for your and your friends with this simulated online cocktail platform",
      image: cocktailsImage,
      path: "/cocktails",
    },
    {
      title: "About",
      description: "Get to know us and our mission",
      image: aboutImage,
      path: "/about",
    },
  ];

  const isMobile = useIsMobile();
  const isSmallScreen = useIsTablet();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flex: 1,
        width: isMobile || isSmallScreen ? "100%" : "90%",
        margin: "0 auto",
        paddingBottom: "24px",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          color: palette.branded.darkGray,
          borderBottom: `2px solid ${palette.branded.secondary}`,
          paddingLeft: 1,
        }}
      >
        Discover Our Services
      </Typography>
      <Box
        style={{
          gap: isMobile ? "12px" : "24px",
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "grid",
          gridTemplateColumns:
            isMobile || isSmallScreen ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
        }}
      >
        {cards.map((card) => (
          <HomeCard key={card.title} {...card} />
        ))}
      </Box>
    </Box>
  );
};

export default HomeGrid;
