import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Code as CodeIcon, Rocket as RocketIcon } from "@mui/icons-material";
import MainContainer from "@/shared/components/Container/MainContainer";
import { palette } from "../../theme/palette";

const Home = () => {
  return (
    <MainContainer>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: palette.gray,
          mb: 2,
        }}
      >
        Welcome to my React Boilerplate
      </Typography>
      <Typography
        variant="h5"
        color={palette.gray}
        sx={{ mb: 4, maxWidth: 600, mx: "auto", textAlign: "center" }}
      >
        A modern, scalable React application template with Next.js, TypeScript,
        and Material-UI
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<RocketIcon />}
          sx={{ px: 4, py: 1.5 }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<CodeIcon />}
          sx={{ px: 4, py: 1.5 }}
        >
          View Documentation
        </Button>
      </Box>
    </MainContainer>
  );
};

export default Home;
