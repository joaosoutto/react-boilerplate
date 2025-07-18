import React from "react";
import { Typography } from "@mui/material";
import { palette } from "../../../../theme/palette";

const PageSubtitle = ({ title }: { title: string }) => (
  <Typography
    sx={{
      fontSize: "18px",
      fontWeight: 600,
      color: palette.branded.darkGray,
      borderBottom: `2px solid ${palette.branded.secondary}`,
      paddingLeft: 1,
      width: "100%",
    }}
  >
    {title}
  </Typography>
);

export default PageSubtitle;
