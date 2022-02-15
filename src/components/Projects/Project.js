import React from "react";
import "./style.css";

function Project({ projectDetail, isLastItem }) {
  const [showUnderline, setShowUnderline] = React.useState(false);

  const { title, description, image, url } = projectDetail;

  const toggleUnderline = () => setShowUnderline(!showUnderline);

  return (
    <div className={`project ${isLastItem ? "" : "bottom-border"}`}>
      <div className="project_left">
        <h1 className="project_title">{title.toUpperCase()}</h1>
        <p className="project_para">{description.toUpperCase()}</p>
      </div>
      <div className="project_right">
        <img src={image} alt="Project" />
        {url ? (
          <a
            href={url}
            onMouseOver={toggleUnderline}
            onMouseOut={toggleUnderline}
            className="check"
            target="_blank"
            rel="noreferrer"
          >
            SEE PROJECT
            <span className={`span ${showUnderline ? "underline" : ""}`}></span>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
