import React from "react";
import MainContainer from "@/components/shared/components/Container/MainContainer";
import { PAGES_INFO } from "../../../contants/pageInfo";
import PageInfo from "@/components/shared/components/Typography/PageInfo";

import Contacts from "./Contacts";

const About = () => {
  return (
    <MainContainer>
      <PageInfo
        title={PAGES_INFO.about.title}
        description={PAGES_INFO.about.description}
      />
      <Contacts />
    </MainContainer>
  );
};

export default About;
