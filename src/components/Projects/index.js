import React from "react";
import Project from "./Project";
import shopandmall from "../../assets/shopandmall.png";
import wpt from "../../assets/wpt.png";
import realEstate from "../../assets/real-estate.png";
import emi from "../../assets/emi.png";

import "./style.css";

const projects = [
  {
    id: 1,
    title: "Shop and mall management system",
    description:
      "THE SYSTEM ALLOWS USERS TO SEARCH FOR MALLS AND THEIR ASSOCIATED SHOPS. ADMIN CAN ADD DELETE AND EDIT MALL OR SHOP.",
    image: shopandmall,
    url: "http://shops-malls.netlify.app/",
  },
  {
    id: 2,
    title: "Wen Projects Tool Application",
    description:
      "This application is similar to Trello which is used project management.",
    image: wpt,
    url: "https://wpms.netlify.app/",
  },
  {
    id: 3,
    title: "Real-Estate Website",
    description:
      "This is a website to search for properties that are on sale,rent.",
    image: realEstate,
    url: "https://realestate-app-b4cf7.web.app/",
  },
  {
    id: 4,
    title: "Equipement Management International",
    description: "A web application for a Australian company.",
    image: emi,
    url: "",
  },
];
function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <Project
          key={project.id}
          projectDetail={project}
          isLastItem={projects.length - 1 === index}
        />
      ))}
    </div>
  );
}

export default Projects;
