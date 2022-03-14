import React from "react";
// Import Component MUI
import {
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
export default function cardDialog(props) {
  //   const emails = ["username@gmail.com", "user02@gmail.com"];

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContent>
        <p>Isi Dialog</p>
      </DialogContent>
    </Dialog>
  );
}
