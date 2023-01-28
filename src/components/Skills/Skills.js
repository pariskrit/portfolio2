import React from "react";
import OneSkill from "./OneSkill";
import "./skills.css";
import reactIcon from "../../assets/react.svg";
import htmlIcon from "../../assets/html.svg";
import css from "../../assets/css.svg";
import jsIcon from "../../assets/javascript.svg";
import tsIcon from "../../assets/typescript.svg";
import reduxIcon from "../../assets/redux.svg";
import nodeIcon from "../../assets/node.svg";
import mongodbIcon from "../../assets/mongodb.svg";

const Skills = ({ isAtSkills }) => {
  const skills = [
    { title: "HTML", img: htmlIcon },
    { title: "Css", img: css },
    { title: "Javascript", img: jsIcon },
    { title: "React", img: reactIcon },
    { title: "Redux", img: reduxIcon },
    { title: "Typescript", img: tsIcon },
    { title: "Node", img: nodeIcon },
    { title: "MongoDB", img: mongodbIcon },
    { title: "React Native", img: reactIcon },
  ];
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
