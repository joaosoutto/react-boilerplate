import React from "react";
import MainContainer from "../shared/Container/MainContainer";
import PageInfo from "../shared/Typography/PageInfo";
import { PAGES_INFO } from "../../../contants/pageInfo";
import ComingSoon from "../shared/ComingSoon";


const Cocktails = () => {
  return (
    <MainContainer>
      <PageInfo
        title={PAGES_INFO.cocktails.title}
        description={PAGES_INFO.cocktails.description}
      />
      <ComingSoon />
    </MainContainer>
  );
};

export default Cocktails;
