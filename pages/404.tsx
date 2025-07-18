import React from "react";
import { Typography } from "@mui/material";
import { palette } from "../theme/palette";
import { NotFound as NotFoundIcon } from "@/assets/svgs/NotFound";
import MainContainer from "../src/components/shared/Container/MainContainer";

const NotFoundPage = () => {
  return (
    <MainContainer style={{ gap: "20px" }}>
      <NotFoundIcon width="400px" height="400px" />
      <Typography variant="h3" color={palette.gray}>
        Ops...
      </Typography>
      <Typography variant="h5" color={palette.gray}>
        The page you are looking for does not exist.
      </Typography>
    </MainContainer>
  );
};

export default NotFoundPage;
