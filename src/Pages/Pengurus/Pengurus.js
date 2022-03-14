import React from "react";
// Import Component MUI
import {
  Avatar,
  Button,
  Box,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
// Import Icon
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// Import Styles
import {
  cardPengurus,
  grid,
  fontSize,
  detailIcon,
  dialogIcon,
  dialogName,
  dialogPosition,
  dialogContent,
  useStyles,
  addButton,
} from "./Styles";
// Import Data
import pengurusData from "./Data";

export default function Pengurus() {
  const classes = useStyles();
  // Dialog
  const [open, setOpen] = React.useState(false);
  // const [avatar, setAvatar] = useState("");
  // const [name, setName] = useState("");
  // const [position, setPosition] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Box mt={3}>
          {pengurusData.map((data) => (
            <Card sx={cardPengurus} elevation={1} onClick={handleClickOpen}>
              <Grid container spacing={1} sx={grid}>
                {/* Avatar */}
                <Grid item xs={2}>
                  <Avatar alt={data.name} src={data.img} />
                </Grid>
                {/* Name & Position*/}
                <Grid item xs={8}>
                  <Typography sx={fontSize} fontWeight="bold">
                    {data.name}
                  </Typography>
                  <Typography sx={fontSize}>{data.position}</Typography>
                </Grid>
                {/* Detail Icon */}
                <Grid item xs>
                  <IconButton>
                    <MoreVertIcon sx={detailIcon} />
                  </IconButton>
                </Grid>
              </Grid>
            </Card>
          ))}

          <Dialog
            open={open}
            onClose={handleClose}
            classes={{ paper: classes.paper }}
          >
            <DialogContent sx={dialogContent} className={classes.DialogContent}>
              <div align={"center"}>
                <Avatar className={classes.avatar}></Avatar>
              </div>

              <Typography sx={dialogName}>Hanafi</Typography>
              <Typography sx={dialogPosition}>Ketua Umum</Typography>

              <div align={"right"}>
                <IconButton onClick={handleClose}>
                  <EditIcon sx={dialogIcon} />
                </IconButton>
                <IconButton onClick={handleClose}>
                  <DeleteIcon sx={dialogIcon} />
                </IconButton>
              </div>
            </DialogContent>
          </Dialog>

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
