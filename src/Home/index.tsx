import React from "react";
import MainContainer from "@/shared/components/Container/MainContainer";
import PageInfo from "@/shared/components/Typography/PageInfo";
import { PAGES_INFO } from "../../contants/pageInfo";

import HomeGrid from "./HomeGrid";

const Home = () => {
  return (
    <MainContainer>
      <PageInfo
        title={PAGES_INFO.home.title}
        description={PAGES_INFO.home.description}
      />

      <HomeGrid />
    </MainContainer>
  );
};

export default Home;
