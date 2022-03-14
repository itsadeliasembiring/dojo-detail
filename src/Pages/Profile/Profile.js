import React from "react";
// Import Component MUI
import { Button, Box, Container, Grid, Typography } from "@mui/material";
// Import Icon
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// Import Theme & Styles
import {
  ratingIcon,
  locationIcon,
  detailLocation,
  textTitle,
  textRating,
  textReview,
  textLocation,
  textAboutDojo,
  editButton,
} from "./Styles";

export default function Profile() {
  return (
    <>
      <Container>
        <Box mt={3}>
          <Grid container direction="row" alignItems={"center"} mb={1}>
            {/* Title */}
            <Grid item xs>
              <Typography sx={textTitle}>Dojo Intelektika</Typography>
            </Grid>
            {/* Rating & Review */}
            <Grid item textAlign="right">
              <StarOutlinedIcon sx={ratingIcon} />
            </Grid>
            <Grid item textAlign="right">
              <Typography sx={textRating} mr={0.5}>
                4.2
              </Typography>
            </Grid>
            <Grid item textAlign="right">
              <Typography sx={textReview}>/ (70 review)</Typography>
            </Grid>
          </Grid>

          {/* Dojo Location */}
          <Grid container direction="row" spacing={2}>
            <Grid item xs={1}>
              <LocationOnIcon sx={locationIcon} />
            </Grid>
            <Grid item xs>
              <Typography sx={textLocation}>
                Kota Bekasi, Jawa Barat (2.8 km)
              </Typography>
              <Typography sx={detailLocation} mt={0.5}>
                Aula Ibrahim Baitul Jihad, Jl.Kemang Dahlia Raya Blok ZZ No.1,
                RT.007/RW.036, Bojong Rawalumbu, Kec.Rawalumbu, Kota Bks, Jawa
                Barat 17116
              </Typography>
            </Grid>
          </Grid>

          {/* About Dojo */}
          <Typography sx={textAboutDojo} fontWeight="bold" mt={2}>
            Berdiri sejak 1 November 2001
          </Typography>
          <Typography sx={textAboutDojo} fontWeight="bold" mt={1.5}>
            Tentang Dojo
          </Typography>
          <Typography sx={textAboutDojo} mt={0.5}>
            Dojo Intelektika merupakan salah satu dojo Lemkari Cabang Kota
            Bekasi yang didirikan untuk mencetak atlet berprestasi dan
            berkualitas.
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
