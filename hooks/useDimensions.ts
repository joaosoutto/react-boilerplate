import { useMediaQuery } from "@mui/material";

export const useIsMobile = () => {
  return useMediaQuery("(max-width: 768px)");
};

export const useIsTablet = () => {
  return useMediaQuery("(max-width: 1130px)");
};

export const useIsDesktop = () => {
  return useMediaQuery("(min-width: 1025px)");
};
