import React from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../../../theme/palette";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useIsMobile } from "../../../hooks/useDimensions";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LinkedinIcon from "@/assets/svgs/LinkedinIcon";
import GithubIcon from "@/assets/svgs/GithubIcon";

import Link from "next/link";
import { CONTACTS } from "../../../contants/contacts";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        marginTop: isMobile ? "24px" : "72px",
        alignItems: "flex-start",
        justifyContent: isMobile ? "flex-start" : "space-between",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "48px" : "0px",
        justifyItems: isMobile ? "flex-start" : "space-between",
      }}
    >
      <Box
        sx={{
          ...styles.sectionWrapper,
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <Typography sx={styles.title}>
          <LocalPhoneOutlinedIcon sx={styles.icon} />
          Contact
        </Typography>
        <Typography style={styles.text}>{CONTACTS.email.primary}</Typography>
        <Typography style={styles.text}>{CONTACTS.email.secondary}</Typography>
        <Typography style={styles.text}>{CONTACTS.phone}</Typography>
      </Box>

      <Box
        sx={{
          ...styles.sectionWrapper,
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <Typography sx={styles.title}>
          <FmdGoodOutlinedIcon sx={styles.icon} />
          Location
        </Typography>
        <Typography style={styles.text}>{CONTACTS.location}</Typography>
      </Box>

      <Box
        sx={{
          ...styles.sectionWrapper,
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <Typography sx={styles.title}>
          <AlternateEmailOutlinedIcon sx={styles.icon} />
          Socials
        </Typography>
        <Box style={{ display: "flex", gap: "12px" }}>
          <Link target="_blank" href={CONTACTS.socials.linkedin}>
            <LinkedinIcon
              height="32px"
              width="32px"
              color={palette.branded.darkGray}
            />
          </Link>
          <Link target="_blank" href={CONTACTS.socials.github}>
            <GithubIcon
              height="32px"
              width="32px"
              color={palette.branded.darkGray}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  title: {
    fontSize: "24px",
    fontWeight: 600,
    color: palette.branded.darkGray,
    position: "relative",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    "&::after": {
      position: "absolute",
      content: "''",
      left: 0,
      bottom: "-2px",
      width: "65px",
      borderBottom: `4px solid ${palette.branded.secondary}`,
    },
  },
  text: {
    fontSize: "14px",
    fontWeight: 600,
    color: palette.branded.gray,
  },
  icon: {
    fontSize: "18px",
    color: palette.branded.darkGray,
  },

  sectionWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

export default About;
