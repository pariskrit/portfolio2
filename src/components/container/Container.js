import React, { useState } from "react";
import Aboutme from "../Aboutme/Aboutme";
import Contactme from "../ContactMe/Contactme";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Top from "../Top/Top";
import "./container.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Projects from "../Projects";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ContactsIcon from "@mui/icons-material/Contacts";

function Container() {
  const [showBackground, setShowBackground] = React.useState(false);
  const [navitems, setNavitems] = useState([
    {
      title: "About Me",
      icon: <PersonIcon className="navbar__icon" />,
      href: "#aboutme",
      isActive: true,
    },
    // {
    //   title: "Skills",
    //   icon: <EqualizerIcon className="navbar__icon" />,
    //   href: "#skills",
    // },
    {
      title: "Projects",
      icon: <CalendarTodayIcon className="navbar__icon" />,
      href: "#projects",
      isActive: false,
    },
    {
      title: "Contact",
      icon: <ContactsIcon className="navbar__icon" />,
      href: "#contact",
      isActive: false,
    },
  ]);

  React.useEffect(() => {
    const container = document.querySelector(".container");
    container.onscroll = () => {
      const container = document.querySelector(".container");
      container.scrollTop > 2
        ? setShowBackground(true)
        : setShowBackground(false);

      setNavitems([
        ...navitems?.map((item, index) =>
          (container?.scrollTop < 1200 && index === 0) ||
          (container?.scrollTop > 1200 &&
            container?.scrollTop < 3000 &&
            index === 1) ||
          (container?.scrollTop > 3000 && index === 2)
            ? { ...item, isActive: true }
            : { ...item, isActive: false }
        ),
      ]);
    };
  }, []);
  return (
    <div className="container">
      <Navbar showBackground={showBackground} navItems={navitems} />
      <Top />
      <section className="container__contents">
        <Aboutme />
        {/* <Skills /> */}
        <Projects />
        <Contactme />
      </section>
      <a href="#aboutme">
        <ExpandLessIcon className="up__icon" />
      </a>
    </div>
  );
}

export default Container;
