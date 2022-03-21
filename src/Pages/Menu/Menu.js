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
import Colors from "../../Theme/Color";
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

export default function Menu(props) {
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
                <IconButton
                  onClick={() => props.onClick("profile")}
                  sx={{
                    ...iconButton,
                    backgroundColor: `${
                      props.activeButton === "profile" ? Colors.purple : "white"
                    }`,
                    color: `${
                      props.activeButton === "profile"
                        ? Colors.white
                        : Colors.darkGray
                    }`,
                  }}
                >
                  <InfoOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Profil</Typography>
              </Grid>
              {/* Pengurus */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <IconButton
                  onClick={() => props.onClick("pengurus")}
                  sx={{
                    ...iconButton,
                    backgroundColor: `${
                      props.activeButton === "pengurus"
                        ? Colors.purple
                        : "white"
                    }`,
                    color: `${
                      props.activeButton === "pengurus"
                        ? Colors.white
                        : Colors.darkGray
                    }`,
                  }}
                >
                  <PermIdentityOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Pengurus</Typography>
              </Grid>
              {/* Contact */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <IconButton
                  onClick={() => props.onClick("contact")}
                  sx={{
                    ...iconButton,
                    backgroundColor: `${
                      props.activeButton === "contact" ? Colors.purple : "white"
                    }`,
                    color: `${
                      props.activeButton === "contact"
                        ? Colors.white
                        : Colors.darkGray
                    }`,
                  }}
                >
                  <ContactSupportOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Kontak</Typography>
              </Grid>
              {/* Jadwal */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <IconButton
                  onClick={() => props.onClick("schedule")}
                  sx={{
                    ...iconButton,
                    backgroundColor: `${
                      props.activeButton === "schedule"
                        ? Colors.purple
                        : "white"
                    }`,
                    color: `${
                      props.activeButton === "schedule"
                        ? Colors.white
                        : Colors.darkGray
                    }`,
                  }}
                >
                  <EventNoteOutlinedIcon sx={iconMenu} />
                </IconButton>
                <Typography sx={typographyMenu}>Jadwal</Typography>
              </Grid>
              {/* Biaya */}
              <Grid item alignItems={"center"} textAlign={"center"} xs={2.4}>
                <IconButton
                  onClick={() => props.onClick("cost")}
                  sx={{
                    ...iconButton,
                    backgroundColor: `${
                      props.activeButton === "cost" ? Colors.purple : "white"
                    }`,
                    color: `${
                      props.activeButton === "cost"
                        ? Colors.white
                        : Colors.darkGray
                    }`,
                  }}
                >
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
