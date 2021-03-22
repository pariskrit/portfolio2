import React, { useState, useRef } from "react";
import "./navbar.css";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ContactsIcon from "@material-ui/icons/Contacts";

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
      <ul>
        {navitems.map((item) => (
          <a href={item.href}>
            <li key={item.title}>
              {item.icon}
              <p className="navbar__name">{item.title}</p>
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
