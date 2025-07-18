import React from "react";
import MainContainer from "../shared/Container/MainContainer";
import { PAGES_INFO } from "../../../contants/pageInfo";
import PageInfo from "../shared/Typography/PageInfo";

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
