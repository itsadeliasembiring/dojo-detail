import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// Import Icon
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// Import Styles
import { grid, icon, textContact, editButton } from "./Styles";
// Import Map
import DojoMaps from "../../Component/MapsDojo";

export default function Contact() {
  let Contact = [
    "www.terakoyadojo.org",
    "+6285725252",
    "Tambah",
    "Tambah",
    "Tambah",
  ];
  const [web, whatsapp, twitter, facebook, instagram] = Contact;

  return (
    <>
      <Container>
        <Box mt={2}>
          {/* Dojo Contact */}
          <Grid container spacing={1.5} mb={2}>
            {/* URL Web */}
            <Grid item xs={12} sx={grid} spacing={4}>
              <Grid item xs={1.3}>
                <LanguageIcon sx={icon} />
              </Grid>
              <Grid item xs>
                <Typography sx={textContact}>{web}</Typography>
              </Grid>
            </Grid>
            {/* Whatsapp */}
            <Grid item xs={12} sx={grid} spacing={4}>
              <Grid item xs={1.3}>
                <WhatsAppIcon sx={icon} />
              </Grid>
              <Grid item xs>
                <Typography sx={textContact}>{whatsapp}</Typography>
              </Grid>
            </Grid>
            {/* Twitter */}
            <Grid item xs={12} sx={grid} spacing={4}>
              <Grid item xs={1.3}>
                <TwitterIcon sx={icon} />
              </Grid>
              <Grid item xs>
                <Typography sx={textContact} color={"#F78104"}>
                  {twitter}
                </Typography>
              </Grid>
            </Grid>
            {/* Facebook */}
            <Grid item xs={12} sx={grid} spacing={4}>
              <Grid item xs={1.3}>
                <FacebookIcon sx={icon} />
              </Grid>
              <Grid item xs>
                <Typography sx={textContact} color={"#F78104"}>
                  {facebook}
                </Typography>
              </Grid>
            </Grid>
            {/* Instagram */}
            <Grid item xs={12} sx={grid} spacing={4}>
              <Grid item xs={1.3}>
                <InstagramIcon sx={icon} />
              </Grid>
              <Grid item xs>
                <Typography sx={textContact} color={"#F78104"}>
                  {instagram}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Dojo Map Location */}
          <DojoMaps />

          {/* Edit Button */}
          <Grid container mt={15} mb={3} alignItems="center">
            <Grid item xs={12}>
              <Button sx={editButton} variant="outlined">
                Edit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
