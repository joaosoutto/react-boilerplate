import React from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import CodeIcon from "@mui/icons-material/Code";
import { palette } from "../../../../theme/palette";
import { useIsMobile } from "../../../../hooks/useDimensions";

const Logo = ({ color }: { color?: string }) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Typography
      sx={{
        fontWeight: 600,
        color: color || palette.gray,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 1,
        fontSize: isMobile ? "16px" : "24px",
      }}
      onClick={() => handleNavigation("/")}
    >
      <CodeIcon
        fontSize={isMobile ? "medium" : "large"}
        style={{ color: palette.branded.primary }}
      />
      React Boilerplate
    </Typography>
  );
};

export default Logo;
