import React from "react";
import OneSkill from "./OneSkill";
import "./skills.css";
import reactIcon from "../../assets/reacticon.png";
import htmlIcon from "../../assets/htmlicon.png";
import css from "../../assets/cssicon.png";
import jsIcon from "../../assets/jsicon.png";
import tsIcon from "../../assets/tsicon.png";
import reduxIcon from "../../assets/reduxicon.png";

const Skills = ({ isAtSkills }) => {
  const skills = [
    { title: "HTML", img: htmlIcon },
    { title: "Css", img: css },
    { title: "Javascript", img: jsIcon },
    { title: "React", img: reactIcon },
    { title: "Redux", img: reduxIcon },
    { title: "Typescript", img: tsIcon },
  ];
  console.log(skills);
  return (
    <div id="skills" className="skills">
      <h1>My Skills</h1>
      <ol className="skills__skill">
        {skills.map((skill) => (
          <OneSkill key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </ol>
    </div>
  );
};

export default Skills;
