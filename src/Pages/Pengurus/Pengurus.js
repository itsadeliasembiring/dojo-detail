import React from "react";
import { useState } from "react";
// Import Component MUI
import {
  Avatar,
  Button,
  ButtonGroup,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
// Import Icon
import MoreVertIcon from "@mui/icons-material/MoreVert";
// Import Styles
import {
  cardPengurus,
  cardContent,
  grid,
  fontSize,
  detailIcon,
  buttonCard,
  addButton,
  buttonGroup,
} from "./Styles";
// Import Data
import pengurusData from "./Data";

export default function Pengurus() {
  const [buttonDetail, setButtonDetail] = useState(false);
  const [selectedID, setSelectedID] = useState("");

  const handlebuttonDetail = () => {
    setButtonDetail(!buttonDetail);
  };
  const buttons = [
    <Button sx={buttonCard} key="edit">
      Edit
    </Button>,
    <Button sx={buttonCard} key="delete">
      Delete
    </Button>,
  ];

  return (
    <>
      <Container>
        <Box mt={3}>
          {pengurusData.map((data) => (
            <Card
              sx={cardPengurus}
              elevation={1}
              onClick={() => handlebuttonDetail(data.id)}
            >
              <CardContent sx={cardContent}>
                <Grid container spacing={1} sx={grid}>
                  {/* Avatar */}
                  <Grid item xs={2.2} mt={0.3}>
                    <Avatar alt={data.name} src={data.img} />
                  </Grid>
                  {/* Name & Position*/}
                  <Grid item xs={6} mt={0.3}>
                    <Typography sx={fontSize} fontWeight="bold">
                      {data.name}
                    </Typography>
                    <Typography sx={fontSize}>{data.position}</Typography>
                  </Grid>
                  {/* Detail Icon */}
                  <Grid item xs align={"right"}>
                    {buttonDetail ? (
                      <ButtonGroup
                        orientation="vertical"
                        variant="contained"
                        sx={buttonGroup}
                      >
                        {buttons}
                      </ButtonGroup>
                    ) : (
                      <IconButton onClick={() => handlebuttonDetail(data.id)}>
                        <MoreVertIcon sx={detailIcon} />
                      </IconButton>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}

          {/* Add Button */}
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
