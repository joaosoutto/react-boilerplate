import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "../src/shared/layout";
import { Box } from "@mui/material";
import { palette } from "../theme/palette";

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  // Create a custom theme with your desired background color
  const theme = createTheme({
    palette: {
      background: {
        default: palette.background.default, // Change this to your desired background color
      },
    },
  });

  return (
    <Box>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
