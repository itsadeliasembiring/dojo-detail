import Colors from "../../Theme/Color";

export const ratingIcon = {
  color: Colors.yellow,
  width: 20,
  height: 20,
};

export const locationIcon = {
  color: Colors.orange,
};

export const textTitle = { fontSize: 14, fontWeight: "bold" };
export const textRating = { fontSize: 12, fontWeight: "bold" };
export const textReview = { fontSize: 12, color: Colors.gray };
export const textLocation = { fontSize: 12, color: Colors.orange };
export const textDetailLocation = { fontSize: 12, color: Colors.gray, mt: 0.5 };
export const textAboutDojo = { fontSize: 12 };

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
