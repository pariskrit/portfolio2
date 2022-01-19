import React from "react";
import "./aboutme.css";
import mypic from "../../assets/mypic.jpg";

function Aboutme() {
  return (
    <div id="aboutme" className="aboutme">
      <div className="aboutme__header">
        <h1 className="aboutme__hello">Hello!</h1>
        <p className="aboutme__content__title">
          I'm a React Developer based in Kathmandu,Nepal.
        </p>
      </div>

      <div className="aboutme__content">
        <div className="aboutme__content__description">
          <p>
            I enjoy coding and developing websites.When I'm not coding you'll
            find me playing guitar or reading books.As a web developer, I enjoy
            making things, and solving problems. My mission-driven work ethic is
            to make lives of other people easier.
          </p>
        </div>
        <img src={mypic} alt="mypic" />
      </div>
    </div>
  );
}

export default Aboutme;
