import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { palette } from "../../../theme/palette";

const Loading = ({ text }: { text?: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: "24px",
      }}
    >
      <CircularProgress
        sx={{
          justifySelf: "center",
          alignSelf: "center",
          color: palette.branded.primary,
          fontSize: "18px",
          fontWeight: 600,
        }}
        size={32}
      />
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          color: palette.branded.gray,
        }}
      >
        {text || "Loading..."}
      </Typography>
    </Box>
  );
};

export default Loading;
