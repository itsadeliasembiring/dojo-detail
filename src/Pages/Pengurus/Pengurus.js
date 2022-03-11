import React from "react";
// Import Component MUI
import {
  Avatar,
  Button,
  Box,
  Card,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
// Import Theme & Styles
import Colors from "../../Theme/Color";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import hanafi from "../../Assets/Images/hanafi.png";
import pengurusData from "./Data";

const addButton = {
  color: Colors.white,
  backgroundColor: Colors.orange,
  borderRadius: 3,
  "&:hover": {
    backgroundColor: Colors.orange,
  },
  minWidth: 48,
  height: 48,
  fontSize: 25,
  textTransform: "capitalize",
  textDecoration: "none",
  bottom: 0,
};
export default function Pengurus() {
  return (
    <>
      <Container>
        <Box mt={3}>
          {pengurusData.map((data) => (
            <Card
              sx={{
                backgroundColor: Colors.lightGray,
                height: 62,
                alignItems: "center",
                justifyContent: "center",
                mb: 1.5,
              }}
              elevation={1}
            >
              <Grid
                container
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", margin: "auto", boxShadow: "none" }}
              >
                <Grid item xs={2}>
                  <Avatar alt="hanafi" src={data.img} />
                </Grid>
                <Grid item xs={8}>
                  <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
                    {data.name}
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>{data.position}</Typography>
                </Grid>
                <Grid item xs>
                  <IconButton>
                    <MoreVertIcon sx={{ color: Colors.black }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Card>
          ))}

          {/* Button */}
          <Grid container mt={7} mb={3} align="right">
            <Grid item xs={12}>
              <Button sx={addButton} variant="contained">
                +
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
