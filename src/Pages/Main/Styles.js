import { makeStyles } from "@mui/styles";
import Colors from "../../Theme/Color";
import background from "../../Assets/Images/background-header.png";

export const useStyles = makeStyles(() => ({}));

export const backgroundHeader = {
  backgroundImage: `url(${background})`,
  overflow: "hidden",
  height: 177,
  backgroundSize: "cover",
};

export const backIconButton = {
  backgroundColor: Colors.black,
  "&:hover": {
    backgroundColor: Colors.black,
  },
  opacity: 0.6,
  borderRadius: "100%",
  width: 28,
  height: 28,
};

export const boxMenu = {
  justifyContent: "center",
  mr: 2,
  ml: 2,
  mt: -4.7,
};

export const cardMenu = {
  maxWidth: 300,
  height: 80,
  borderRadius: 2,
  justifyContent: "center",
};

export const iconButton = {
  backgroundColor: Colors.lightGray,
  color: Colors.darkGray,
  "&:focus": {
    backgroundColor: Colors.purple,
    color: Colors.white,
  },
  boxShadow: "0px 1px 4px #a1a1a1",
  borderRadius: 2,
  width: 38,
  height: 38,
};

export const typographyMenu = {
  fontSize: 10,
  mt: 0.5,
  "&:focus": {
    color: Colors.purple,
  },
};

export const iconMenu = {
  width: 25,
  height: 25,
};

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
