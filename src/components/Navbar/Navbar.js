import React, { useState, useRef } from "react";
import "./navbar.css";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ContactsIcon from "@material-ui/icons/Contacts";
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
          <Navbaritem key={item} item={item} />
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
