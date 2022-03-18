import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// Import Icon
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// Import Styles
import {
  ratingIcon,
  locationIcon,
  textDetailLocation,
  textTitle,
  textRating,
  textReview,
  textLocation,
  textAboutDojo,
  editButton,
} from "./Styles";

export default function Profile() {
  const dojoName = "Dojo Intelektika";
  let Rating = [4.2, 70];
  const [rate, review] = Rating;
  let Location = [
    "Kota Bekasi, Jawa Barat (2.8 km)",
    "Aula Ibrahim Baitul Jihad, Jl.Kemang Dahlia Raya Blok ZZ No.1, RT.007/RW.036, Bojong Rawalumbu, Kec.Rawalumbu, Kota Bks, Jawa Barat 17116",
  ];
  const [nameLocation, detailLocation] = Location;
  let About = [
    "1 November 2001",
    "Dojo Intelektika merupakan salah satu dojo Lemkari Cabang Kota Bekasi yang didirikan untuk mencetak atlet berprestasi dan berkualitas.",
  ];
  const [since, description] = About;

  return (
    <>
      <Container>
        <Box mt={3}>
          <Grid container direction="row" alignItems={"center"} mb={1}>
            {/* Title */}
            <Grid item xs>
              <Typography sx={textTitle}>{dojoName}</Typography>
            </Grid>
            {/* Rating & Review */}
            <Grid item textAlign="right">
              <StarOutlinedIcon sx={ratingIcon} />
            </Grid>
            <Grid item textAlign="right" mr={0.5}>
              <Typography sx={textRating}>{rate}</Typography>
            </Grid>
            <Grid item textAlign="right">
              <Typography sx={textReview}>/ ({review} review)</Typography>
            </Grid>
          </Grid>

          {/* Dojo Location */}
          <Grid container direction="row" spacing={2}>
            <Grid item xs={1}>
              <LocationOnIcon sx={locationIcon} />
            </Grid>
            <Grid item xs>
              <Typography sx={textLocation}>{nameLocation}</Typography>
              <Typography sx={textDetailLocation}>{detailLocation}</Typography>
            </Grid>
          </Grid>

          {/* About Dojo */}
          <Typography sx={textAboutDojo} fontWeight="bold" mt={2}>
            Berdiri sejak {since}
          </Typography>
          <Typography sx={textAboutDojo} fontWeight="bold" mt={1.5}>
            Tentang Dojo
          </Typography>
          <Typography sx={textAboutDojo} mt={0.5}>
            {description}
          </Typography>

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
