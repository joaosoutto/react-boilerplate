import React from "react";
import { Card, Typography, useMediaQuery, Box } from "@mui/material";
import { palette } from "../../theme/palette";
import Image from "next/image";
import { IHomeCard } from "./types";
import { useRouter } from "next/navigation";

const HomeCard = ({ title, description, image, path }: IHomeCard) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 750px)");

  return (
    <Card
      sx={{
        width: "100%",
        height: isMobile ? "120px" : "180px",
        maxHeight: "180px",
        display: "flex",
        opacity: 0.8,
        "&:hover": {
          opacity: 1,
          transform: "scale(1.01)",
          animation: "ease-in-out 0.5s",
        },
        cursor: "pointer",
        transition: "opacity 0.3s ease",
      }}
      onClick={() => {
        router.push(path);
      }}
    >
      <Image
        src={image}
        style={{
          width: isMobile ? "200px" : "300px",
          minWidth: isMobile ? "200px" : "300px",
          height: isMobile ? "120px" : "100%",
          objectFit: "cover",
        }}
        alt="card image"
        placeholder="blur"
        onLoad={() => console.log("loaded")}
      />
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "flex-end" : "center",
          alignItems: isMobile ? "flex-end" : "flex-start",
          padding: isMobile ? "8px" : "24px",
          gap: "12px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            color: palette.branded.primary,
          }}
        >
          {title}
        </Typography>
        {!isMobile && (
          <Typography
            sx={{
              color: palette.branded.darkGray,
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default HomeCard;
