import React from "react";
// Import Component MUI
import { Button, Box, Container, Grid, Typography } from "@mui/material";
// Import Icon
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// Import Theme & Styles
import Colors from "../../Theme/Color";
import { grid, icon, textContact, map, editButton } from "./Styles";

export default function Contact() {
  return (
    <>
      <Container>
        <Box mt={3}>
          {/* Dojo Contact */}
          {/* Url Web */}
          <Grid container sx={grid} spacing={4}>
            <Grid item xs={1}>
              <LanguageIcon sx={icon} />
            </Grid>
            <Grid item xs>
              <Typography sx={textContact}>www.terakoyadojo.org</Typography>
            </Grid>
          </Grid>
          {/* Whatsapp */}
          <Grid container sx={grid} spacing={4}>
            <Grid item xs={1}>
              <WhatsAppIcon sx={icon} />
            </Grid>
            <Grid item xs>
              <Typography sx={textContact}>+6285725252</Typography>
            </Grid>
          </Grid>
          {/* Twitter */}
          <Grid container sx={grid} spacing={4}>
            <Grid item xs={1}>
              <TwitterIcon sx={icon} />
            </Grid>
            <Grid item xs>
              <Typography sx={textContact} color={Colors.orange}>
                Tambah
              </Typography>
            </Grid>
          </Grid>
          {/* Facebook */}
          <Grid container sx={grid} spacing={4}>
            <Grid item xs={1}>
              <FacebookIcon sx={icon} />
            </Grid>
            <Grid item xs>
              <Typography sx={textContact} color={Colors.orange}>
                Tambah
              </Typography>
            </Grid>
          </Grid>
          {/* Instagram */}
          <Grid container sx={grid} spacing={4}>
            <Grid item xs={1}>
              <InstagramIcon sx={icon} />
            </Grid>
            <Grid item xs>
              <Typography sx={textContact} color={Colors.orange}>
                Tambah
              </Typography>
            </Grid>
          </Grid>

          {/* Dojo Map Location */}
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.458972588235!2d106.97818672913367!3d-6.285291799715676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8dc72c4db3%3A0xfd3716e5aac1c36a!2sAula%20Ibrahim%20Baitul%20Jihad!5e0!3m2!1sid!2sid!4v1647239375891!5m2!1sid!2sid"
              width="100%"
              height="157"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
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
