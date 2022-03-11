import React from "react";
// Import Component MUI
import {
  Button,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
// Import React router
import { Link } from "react-router-dom";
// Import Icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// Import Theme & Styles
import {
  useStyles,
  backgroundHeader,
  backIconButton,
  boxMenu,
  cardMenu,
  typographyMenu,
  iconMenu,
  iconButton,
} from "./Styles";
import Colors from "../../Theme/Color";

export default function Main() {
  const classes = useStyles();
  return (
    <>
      <Box sx={backgroundHeader}>
        <Grid container>
          <Grid item xs={12} alignItems={"left"} sx={{ mt: 1.5, ml: 1.5 }}>
            <IconButton sx={backIconButton}>
              <ArrowBackIcon sx={{ color: Colors.white }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <Box sx={boxMenu} margin="auto">
        <Card sx={cardMenu} justifyContent={"center"}>
          <Grid container direction="row" spacing={2} mt={-0.5} ml={0.1}>
            <Grid item alignItems={"center"} textAlign={"center"}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <IconButton sx={iconButton}>
                  <InfoOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Profil</Typography>
              </Link>
            </Grid>

            <Grid item alignItems={"center"} textAlign={"center"}>
              <Link to="/pengurus-dojo" style={{ textDecoration: "none" }}>
                <IconButton sx={iconButton}>
                  <PermIdentityOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Pengurus</Typography>
              </Link>
            </Grid>

            <Grid item alignItems={"center"} textAlign={"center"}>
              <Link to="/contact-dojo" style={{ textDecoration: "none" }}>
                <IconButton sx={iconButton}>
                  <ContactSupportOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Kontak</Typography>
              </Link>
            </Grid>

            <Grid item alignItems={"center"} textAlign={"center"}>
              <IconButton sx={iconButton}>
                <EventNoteOutlinedIcon sx={iconMenu} />
              </IconButton>
              <Typography sx={typographyMenu}>Jadwal</Typography>
            </Grid>

            <Grid item alignItems={"center"} textAlign={"center"}>
              <IconButton sx={iconButton}>
                <LocalOfferOutlinedIcon sx={iconMenu} />
              </IconButton>
              <Typography sx={typographyMenu}>Biaya</Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
