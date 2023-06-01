import React, { useCallback, useEffect, useRef, useState } from "react";
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
  // const ref = useRef(window.scrollY);

  // const handleNavigation = useCallback(
  //   (e) => {
  //     const window = e.currentTarget;
  //     if (ref.current > window.scrollY) {
  //       console.log("scrolling up");
  //     } else if (ref.current < window.scrollY) {
  //       console.log("scrolling down");
  //     }
  //     ref.current = window.scrollY;
  //   },
  //   [ref.current]
  // );
  // console.log(ref.current);
  // useEffect(() => {
  //   ref.current = window.scrollY;

  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  React.useEffect(() => {
    const container = document.querySelector(".container");
    const aboutme = document.querySelector("#aboutme");
    const projects = document.querySelector("#projects");
    container.onscroll = () => {
      const container = document.querySelector(".container");

      // if (container?.scrollTop < 1200)
      // if (container.scrollTop !== 0) {
      //   if (container?.scrollTop < 700)
      //     container.scrollTo({
      //       top: 700,
      //       behavior: "instant",
      //     });

      //   if (container?.scrollTop > 700 && container?.scrollTop < 1200)
      //     container.scrollTo({
      //       top: 1400,
      //       behavior: "instant",
      //     });
      // }

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
      {/* <Aboutme /> */}
      {/* <Skills /> */}
      {/* <Projects />
      <Contactme /> */}
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
