import React from "react";
import MainContainer from "@/components/shared/components/Container/MainContainer";
import { PAGES_INFO } from "../../../contants/pageInfo";
import PageInfo from "@/components/shared/components/Typography/PageInfo";
import ComingSoon from "@/components/shared/components/ComingSoon";

const Recipes = () => {
  return (
    <MainContainer>
      <PageInfo
        title={PAGES_INFO.recipes.title}
        description={PAGES_INFO.recipes.description}
      />
      <ComingSoon />
    </MainContainer>
  );
};

export default Recipes;
