import React from "react";
import { Button, Box } from "@mui/material";

const AuthHeaderSection: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, ml: 2 }}>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        sx={{
          borderColor: "#1976d2",
          color: "#1976d2",
          "&:hover": {
            borderColor: "#1565c0",
            backgroundColor: "rgba(25, 118, 210, 0.04)",
          },
        }}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default AuthHeaderSection;
