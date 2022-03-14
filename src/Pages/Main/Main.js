import React from "react";
// Import Component MUI
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
// Import Icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
// Import Styles
import {
  backgroundHeader,
  backIconButton,
  backIcon,
  boxMenu,
  cardMenu,
  cardContent,
  typographyMenu,
  iconMenu,
  iconButton,
} from "./Styles";
// Import React router
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      {/* Background */}
      <Box sx={backgroundHeader}>
        <Grid container>
          <Grid item xs={12} alignItems={"left"} sx={{ mt: 1.5, ml: 1.5 }}>
            <IconButton sx={backIconButton}>
              <ArrowBackIcon sx={backIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      {/* Menu */}
      <Box sx={boxMenu}>
        <Card sx={cardMenu}>
          <CardContent sx={cardContent} alignItem="center">
            <Grid container direction="row" margin="auto" xs={12}>
              {/* Profile */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <IconButton sx={iconButton}>
                    <InfoOutlinedIcon sx={iconMenu} />
                  </IconButton>
                  <Typography sx={typographyMenu}>Profil</Typography>
                </Link>
              </Grid>
              {/* Pengurus */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <Link to="/pengurus-dojo" style={{ textDecoration: "none" }}>
                  <IconButton sx={iconButton}>
                    <PermIdentityOutlinedIcon sx={iconMenu} />
                  </IconButton>
                  <Typography sx={typographyMenu}>Pengurus</Typography>
                </Link>
              </Grid>
              {/* Contact */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <Link to="/contact-dojo" style={{ textDecoration: "none" }}>
                  <IconButton sx={iconButton}>
                    <ContactSupportOutlinedIcon sx={iconMenu} />
                  </IconButton>
                  <Typography sx={typographyMenu}>Kontak</Typography>
                </Link>
              </Grid>
              {/* Jadwal */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <IconButton sx={iconButton}>
                  <EventNoteOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Jadwal</Typography>
              </Grid>
              {/* Biaya */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <IconButton sx={iconButton}>
                  <LocalOfferOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Biaya</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
