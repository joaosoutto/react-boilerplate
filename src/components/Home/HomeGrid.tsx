import React from "react";

import recipeImage from "../../assets/images/recipes.jpg";
import cocktailsImage from "../../assets/images/cocktails.jpg";
import productsImage from "../../assets/images/products.jpg";
import aboutImage from "../../assets/images/about.png";

import HomeCard from "./HomeCard";
import GridContainer from "../shared/Container/GridContainer";
import PageSubtitle from "../shared/Typography/PageSubtitle";
import ContentContainer from "../shared/Container/ContentContainer";

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

  return (
    <ContentContainer>
      <PageSubtitle title="Discover Our Services" />
      <GridContainer>
        {cards.map((card) => (
          <HomeCard key={card.title} {...card} />
        ))}
      </GridContainer>
    </ContentContainer>
  );
};

export default HomeGrid;
