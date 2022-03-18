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
  activeMenu,
  navLink,
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
import { NavLink } from "react-router-dom";

export default function Menu() {
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
          <CardContent sx={cardContent} alignItems={"center"}>
            <Grid container direction="row" margin="auto">
              {/* Profile */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <NavLink
                  to="/profile-dojo"
                  activeStyle={activeMenu}
                  style={navLink}
                >
                  <IconButton sx={iconButton}>
                    <InfoOutlinedIcon sx={iconMenu} />
                  </IconButton>
                  <Typography sx={typographyMenu}>Profil</Typography>
                </NavLink>
              </Grid>
              {/* Pengurus */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <NavLink
                  to="/pengurus-dojo"
                  activeStyle={activeMenu}
                  style={navLink}
                >
                  <IconButton sx={iconButton}>
                    <PermIdentityOutlinedIcon sx={iconMenu} />
                  </IconButton>
                  <Typography sx={typographyMenu}>Pengurus</Typography>
                </NavLink>
              </Grid>
              {/* Contact */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <NavLink
                  to="/contact-dojo"
                  activeStyle={activeMenu}
                  style={navLink}
                >
                  <IconButton sx={iconButton}>
                    <ContactSupportOutlinedIcon sx={iconMenu} />
                  </IconButton>
                  <Typography sx={typographyMenu}>Kontak</Typography>
                </NavLink>
              </Grid>
              {/* Jadwal */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <NavLink
                  to="/schedule-dojo"
                  activeStyle={activeMenu}
                  style={navLink}
                >
                  <IconButton sx={iconButton}>
                    <EventNoteOutlinedIcon sx={iconMenu} />
                  </IconButton>
                  <Typography sx={typographyMenu}>Jadwal</Typography>
                </NavLink>
              </Grid>
              {/* Biaya */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <NavLink
                  to="/cost-dojo"
                  activeStyle={activeMenu}
                  style={navLink}
                >
                  <IconButton sx={iconButton}>
                    <LocalOfferOutlinedIcon sx={iconMenu} />
                  </IconButton>
                  <Typography sx={typographyMenu}>Biaya</Typography>
                </NavLink>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
