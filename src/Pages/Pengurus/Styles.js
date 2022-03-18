import Colors from "../../Theme/Color";

export const cardPengurus = {
  backgroundColor: Colors.lightGray,
  height: 62,
  alignItems: "center",
  justifyContent: "center",
  mb: 1.5,
  pr: 2,
};
export const cardContent = {
  padding: 0,
  justifyContent: "center",
};

export const grid = {
  justifyContent: "center",
  margin: "auto",
  direction: "row",
};

export const fontSize = {
  fontSize: 12,
};

export const detailIcon = { color: Colors.black };

export const buttonCard = {
  color: Colors.black,
  borderRadius: 3,
  backgroundColor: Colors.grayButton,
  "&:hover": {
    backgroundColor: Colors.grayButton,
  },
  fontSize: 10,
  textTransform: "capitalize",
  width: 80,
  height: 22,
  fontWeight: "normal",
};

export const buttonGroup = {
  borderRadius: 3,
  boxShadow: "none",
  "& .MuiButtonGroup-grouped:not(:last-of-type)": {
    borderColor: "#CFCFCF",
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
  height: 45,
  fontSize: 25,
  textTransform: "capitalize",
  textDecoration: "none",
  bottom: 0,
};
