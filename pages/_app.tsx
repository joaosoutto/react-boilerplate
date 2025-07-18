import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";

import Layout from "../src/shared/layout";
import { Box } from "@mui/material";
import { palette } from "../theme/palette";

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  // Create a custom theme with your desired background color and typography
  const theme = createTheme({
    palette: {
      background: {
        default: palette.background.default, // Change this to your desired background color
      },
    },
    typography: {
      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <Box>
      <Head>
        <title>React Boilerplate</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
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
