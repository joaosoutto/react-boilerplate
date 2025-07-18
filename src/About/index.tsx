import React from "react";
import MainContainer from "@/shared/components/Container/MainContainer";
import { PAGES_INFO } from "../../contants/pageInfo";
import PageInfo from "@/shared/components/Typography/PageInfo";
import ComingSoon from "@/shared/components/ComingSoon";

const About = () => {
  return (
    <MainContainer>
      <PageInfo
        title={PAGES_INFO.about.title}
        description={PAGES_INFO.about.description}
      />
      <ComingSoon />
    </MainContainer>
  );
};

export default About;
