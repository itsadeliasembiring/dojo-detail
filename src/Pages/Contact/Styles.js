import Colors from "../../Theme/Color";

export const grid = {
  direction: "row",
  justifyContent: "center",
  display: "flex",
};

export const icon = {
  color: Colors.semiBlack,
  fontSize: 22,
};

export const textContact = {
  fontSize: 14,
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
