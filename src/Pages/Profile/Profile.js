import React from "react";
// Import Component MUI
import { Button, Box, Container, Grid, Typography } from "@mui/material";
// Import Icon
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// Import Theme & Styles
import { useStyles, editButton, fontTitle } from "./Styles";
import Colors from "../../Theme/Color";

export default function Profile() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Box mt={3}>
          <Grid container direction="row" alignItems={"center"}>
            <Grid item xs>
              <Typography sx={fontTitle}>Dojo Intelektika</Typography>
            </Grid>
            <Grid item textAlign="right">
              <StarOutlinedIcon
                sx={{ color: Colors.yellow, width: 20, height: 20 }}
              />
            </Grid>
            <Grid item textAlign="right">
              <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
                4.2
              </Typography>
            </Grid>
            <Grid item textAlign="right">
              <Typography sx={{ fontSize: 12, color: Colors.gray }}>
                / (70 review)
              </Typography>
            </Grid>
          </Grid>

          {/* Dojo Location */}
          <Grid container direction="row" spacing={2}>
            <Grid item xs={1}>
              <LocationOnIcon sx={{ color: Colors.orange }} />
            </Grid>
            <Grid item xs>
              <Typography sx={{ fontSize: 12, color: Colors.orange }}>
                Kota Bekasi, Jawa Barat (2.8 km)
              </Typography>

              <Typography sx={{ fontSize: 12, color: Colors.gray }} mt={0.5}>
                Aula Ibrahim Baitul Jihad, Jl.Kemang Dahlia Raya Blok ZZ No.1,
                RT.007/RW.036, Bojong Rawalumbu, Kec.Rawalumbu, Kota Bks, Jawa
                Barat 17116
              </Typography>
            </Grid>
          </Grid>

          <Typography sx={{ fontSize: 12, fontWeight: "bold" }} mt={2}>
            Berdiri sejak 1 November 2001
          </Typography>

          {/* About Dojo */}
          <Typography sx={{ fontSize: 12, fontWeight: "bold" }} mt={1.5}>
            Tentang Dojo
          </Typography>
          <Typography sx={{ fontSize: 12 }} mt={0.5}>
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
