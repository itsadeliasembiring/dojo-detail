import Colors from "../../Theme/Color";
import background from "../../Assets/Images/background-header.png";

export const backgroundHeader = {
  backgroundImage: `url(${background})`,
  overflow: "hidden",
  height: 177,
  backgroundSize: "cover",
};

export const boxMenu = {
  margin: "auto",
  justifyContent: "center",
  mt: -4.7,
  mr: 2,
  ml: 2,
};

export const cardMenu = {
  height: 80,
  borderRadius: 2,
  justifyContent: "center",
  pl: 1,
  pr: 1,
};
export const cardContent = {
  paddingTop: 1.5,
  paddingRight: 0,
  paddingLeft: 0,
  paddingBottom: 0,
  justifyContent: "center",
};

export const typographyMenu = {
  fontSize: 10,
  mt: 0.5,
};

export const iconMenu = {
  width: 25,
  height: 25,
};

export const iconButton = {
  boxShadow: "0px 1px 4px #a1a1a1",
  borderRadius: 2,
  width: 38,
  height: 38,
  "&:hover": {
    backgroundColor: Colors.purple,
    color: Colors.white,
  },
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

export const backIcon = {
  color: Colors.white,
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
