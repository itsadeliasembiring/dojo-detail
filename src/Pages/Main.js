import React from "react";
import { useState } from "react";
import Menu from "./Menu/Menu";
import Profile from "./Profile/Profile";
import Pengurus from "./Pengurus/Pengurus";
import Contact from "./Contact/Contact";
import Schedule from "./Schedule";
import Cost from "./Cost";

export default function Main() {
  const [activeButton, setActiveButton] = useState("profile");
  const handleonClick = (e) => {
    setActiveButton(e);
    console.log(e);
  };

  return (
    <>
      <Menu onClick={handleonClick} activeButton={activeButton} />
      {activeButton === "profile" ? (
        <Profile />
      ) : activeButton === "pengurus" ? (
        <Pengurus />
      ) : activeButton === "contact" ? (
        <Contact />
      ) : activeButton === "schedule" ? (
        <Schedule />
      ) : activeButton === "cost" ? (
        <Cost />
      ) : null}
    </>
  );
}
