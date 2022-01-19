import React from "react";
import OneSkill from "./OneSkill";
import "./skills.css";
const Skills = React.forwardRef(({ isAtSkills }, ref) => {
  const skills = [
    { title: "HTML", width: "80" },
    { title: "Css", width: "50" },
    { title: "Javascript", width: "70" },
    { title: "React", width: "70" },
    { title: "Redux", width: "50" },
    { title: "Typescript", width: "70" },
  ];

  return (
    <div id="skills" className="skills" ref={ref}>
      <h1>My Skills</h1>
      <div className="skills__skill">
        {skills.map((skill) => (
          <OneSkill
            key={skill.title}
            title={skill.title}
            width={skill.width}
            isAtSkills={isAtSkills}
          />
        ))}
      </div>
    </div>
  );
});

export default Skills;
