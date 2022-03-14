import Colors from "../../Theme/Color";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  paper: { minWidth: 287, height: 194, borderRadius: 20 },
  avatar: {
    width: 80,
    height: 80,
  },
  DialogContent: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 25,
    paddingLeft: 25,
  },
}));

export const cardPengurus = {
  backgroundColor: Colors.lightGray,
  height: 62,
  alignItems: "center",
  justifyContent: "center",
  mb: 1.5,
};

export const grid = {
  alignItems: "center",
  margin: "auto",
  direction: "row",
};

export const fontSize = {
  fontSize: 12,
};

export const detailIcon = { color: Colors.black };

export const dialog = {
  "& .MuiPaper-root .MuiDialog-paper": {
    width: 302,
    height: 171,
  },
};
export const addButton = {
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

export const dialogIcon = {
  width: 20,
  height: 20,
  color: Colors.black,
  padding: 0,
  mr: 1,
};

export const dialogName = {
  fontSize: 16,
  fontWeight: "bold",
  mt: 1,
};

export const dialogPosition = { fontSize: 14, color: Colors.darkGray };

export const dialogContent = {
  "& .MuiDialogContent-root": {
    padding: 0,
  },
};
