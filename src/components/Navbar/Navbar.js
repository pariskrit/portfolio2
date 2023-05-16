import React, { useState, useRef } from "react";
import "./navbar.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ContactsIcon from "@mui/icons-material/Contacts";
import Navbaritem from "./Navbaritem";

const Navbar = React.forwardRef((props, ref) => {
  const [navitems, setNavitems] = useState([
    {
      title: "About Me",
      icon: <PersonIcon className="navbar__icon" />,
      href: "#aboutme",
    },
    {
      title: "Skills",
      icon: <EqualizerIcon className="navbar__icon" />,
      href: "#skills",
    },
    {
      title: "Projects",
      icon: <CalendarTodayIcon className="navbar__icon" />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <ContactsIcon className="navbar__icon" />,
      href: "#contact",
    },
  ]);

  return (
    <nav className="navbar" ref={ref}>
      <div
        className="navbar__back"
        style={{ top: props.showBackground ? "0" : "-100px" }}
      ></div>
      <ul style={{ width: props.showBackground ? "60%" : "80%" }}>
        {navitems.map((item) => (
          <Navbaritem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
