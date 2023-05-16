import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./contactme.css";

function Contactme() {
  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <div className="socialmedia">
        <a
          href="https://www.facebook.com/profile.php?id=100013460048720"
          target="_blank"
          rel="noreferrer"
        >
          <div className="socialmedia__block">
            <FacebookIcon className="socialmedia__icon facebook" />
            <p className="facebook">Send Me Request</p>
          </div>
        </a>

        <a
          href="https://www.instagram.com/pariskrit07/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="socialmedia__block">
            <InstagramIcon className="socialmedia__icon instagram" />
            <p className="instagram">Follow Me</p>
          </div>
        </a>
        <a href="https://github.com/pariskrit" target="_blank" rel="noreferrer">
          <div className="socialmedia__block">
            <GitHubIcon className="socialmedia__icon" />
            <p>See My Work</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/pariskrit-moktan-697bb0187/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="socialmedia__block">
            <LinkedInIcon className="socialmedia__icon linkedIn" />
            <p className="linkedIn">Let's Connect</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contactme;
