import React from "react";
import "./aboutme.css";
import mypic from "../../assets/mypic.jpg";

function Aboutme() {
  return (
    <div id="aboutme" className="aboutme">
      <h1>About Me</h1>
      <div className="aboutme__content">
        <img src={mypic} alt="mypic" />

        <div>
          <p>I'm a React Developer based in Kathmandu,Nepal.</p>

          <p>
            I enjoy coding and developing websites.When I'm not coding you'll
            find me playing guitar or reading books.As a web developer, I enjoy
            making things, and my mission-driven work ethic to literally change
            the world. That's why I’m excited to make a big impact at a high
            growth company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
