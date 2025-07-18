import React from "react";
import { Typography, Box } from "@mui/material";
import { palette } from "../../../../theme/palette";
import { useIsMobile } from "../../../../hooks/useDimensions";

const PageInfo = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  const isMobile = useIsMobile();
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "16px" : "24px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          margin: 0,
          width: "100%",
          color: palette.branded.darkGray,
          fontSize: isMobile ? "32px" : "40px",
          borderLeft: `8px solid ${palette.branded.primary}`,
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
          paddingLeft: 1,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            fontSize: "16px",
            color: palette.branded.darkGray,
            width: isMobile ? "100%" : "50%",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default PageInfo;
