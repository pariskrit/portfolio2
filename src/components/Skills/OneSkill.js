import React from "react";
import "./oneskill.css";
function OneSkill({ title, img }) {
  return (
    <li className="oneskill">
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </li>
  );
}

export default OneSkill;
