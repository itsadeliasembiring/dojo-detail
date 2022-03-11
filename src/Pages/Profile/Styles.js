import { makeStyles } from "@mui/styles";
import Colors from "../../Theme/Color";

export const useStyles = makeStyles(() => ({
  fontTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
}));

export const editButton = {
  color: Colors.orange,
  borderColor: Colors.orange,
  borderRadius: 2,
  "&:hover": {
    borderColor: Colors.orange,
  },
  width: "100%",
  height: 32,
  fontSize: 14,
  textTransform: "capitalize",
  textDecoration: "none",
  bottom: 0,
};

export const fontTitle = { fontSize: 14, fontWeight: "bold" };
