import React from "react";
import Aboutme from "../Aboutme/Aboutme";
import Contactme from "../ContactMe/Contactme";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Top from "../Top/Top";
import "./container.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Container() {
  const skillRef = React.useRef();
  const [isAtSkills, setIsAtSkills] = React.useState(false);

  React.useEffect(() => {
    const skillTop = skillRef.current.getBoundingClientRect().top;
    const container = document.querySelector(".container");
    container.onscroll = () => {
      if (document.querySelector(".container").scrollTop >= skillTop) {
        setIsAtSkills(true);
      }
    };
  }, []);

  return (
    <div className="container">
      <Top />
      <div className="container__contents">
        <Navbar />
        <Aboutme />

        <Skills ref={skillRef} isAtSkills={isAtSkills} />
        <Contactme />
      </div>
      <a href="#aboutme">
        <ExpandLessIcon className="up__icon" />
      </a>
    </div>
  );
}

export default Container;
