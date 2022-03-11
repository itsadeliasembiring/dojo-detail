import React from "react";
// Import Component MUI
import { Button, Box, Container, Grid, Typography } from "@mui/material";
// Import Theme & Styles
import Colors from "../../Theme/Color";
// Import Icon
import { FiTwitter } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { IconContext } from "react-icons";
import Maps from "../../Assets/Images/maps.png";
const editButton = {
  color: Colors.orange,
  borderColor: Colors.orange,
  borderRadius: 2,
  "&:hover": {
    borderColor: Colors.orange,
  },
  width: "100%",
  height: 32,
  fontSize: 14,
  textTransform: "capitalize",
  textDecoration: "none",
  bottom: 0,
};

export default function Contact() {
  return (
    <>
      <Container>
        <Box mt={3}>
          {/* Dojo Contact */}
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            mb={2}
          >
            <Grid item xs={1}>
              <LanguageIcon sx={{ fontSize: 22 }} />
            </Grid>
            <Grid item xs>
              <Typography sx={{ fontSize: 14 }}>
                www.terakoyadojo.org
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            mb={2}
          >
            <Grid item xs={1}>
              <IconContext.Provider value={{ size: 22 }}>
                <FaWhatsapp />
              </IconContext.Provider>
            </Grid>
            <Grid item xs>
              <Typography sx={{ fontSize: 14 }}>+6285725252</Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            mb={2}
          >
            <Grid item xs={1}>
              <IconContext.Provider value={{ size: 22 }}>
                <FiTwitter />
              </IconContext.Provider>
            </Grid>
            <Grid item xs>
              <Typography sx={{ fontSize: 14, color: Colors.orange }}>
                Tambah
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            mb={2}
          >
            <Grid item xs={1}>
              <IconContext.Provider value={{ size: 22 }}>
                <FaFacebookF />
              </IconContext.Provider>
            </Grid>

            <Grid item xs>
              <Typography sx={{ fontSize: 14, color: Colors.orange }}>
                Tambah
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            mb={2}
          >
            <Grid item xs={1}>
              <InstagramIcon sx={{ fontSize: 22 }} />
            </Grid>
            <Grid item xs>
              <Typography sx={{ fontSize: 14, color: Colors.orange }}>
                Tambah
              </Typography>
            </Grid>
          </Grid>

          <img
            src={Maps}
            alt="maps dojo"
            style={{ width: "100%", height: "100%" }}
          />
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
