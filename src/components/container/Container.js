import React from "react";
import Aboutme from "../Aboutme/Aboutme";
import Contactme from "../ContactMe/Contactme";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Top from "../Top/Top";
import "./container.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Projects from "../Projects";

function Container() {
  const [showBackground, setShowBackground] = React.useState(false);

  React.useEffect(() => {
    const container = document.querySelector(".container");
    container.onscroll = () => {
      const container = document.querySelector(".container");

      container.scrollTop > 2
        ? setShowBackground(true)
        : setShowBackground(false);
    };
  }, []);
  return (
    <div className="container">
      <Navbar showBackground={showBackground} />
      <Top />
      <section className="container__contents">
        <Aboutme />
        <Skills />
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
