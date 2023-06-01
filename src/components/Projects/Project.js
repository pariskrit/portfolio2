import React from "react";
import "./style.css";
import { motion } from "framer-motion/dist/framer-motion";

function Project({ projectDetail, isLastItem, isParentVisible, index }) {
  const [showUnderline, setShowUnderline] = React.useState(false);
  const [onHover, setOnHover] = React.useState(false);

  const { title, description, image, url } = projectDetail;

  const toggleUnderline = () => setShowUnderline(!showUnderline);
  return (
    <motion.div
      className={`project ${isLastItem ? "" : "bottom-border"}`}
      style={{ backgroundImage: `url(${image})`, borderRadius: "20px" }}
      onMouseEnter={(e) => {
        e.stopPropagation();
        setOnHover(true);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();

        setOnHover(false);
      }}
      initial={false}
      animate={{
        opacity: isParentVisible ? 1 : 0,
        y: isParentVisible ? 0 : 300,
      }}
      transition={{
        duration: 1,
        delay: index * 0.5,
        easeInOut: [0, 0.71, 0.2, 1.01],
      }}
    >
      <motion.div
        className="project__details__container"
        initial={false}
        animate={{ opacity: onHover ? 1 : 0, backgroundColor: "#0000004a" }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          easeInOut: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          className="project__details"
          initial={false}
          animate={{ opacity: onHover ? 1 : 0, y: onHover ? 0 : 30 }}
          transition={{
            duration: 0.2,
            easeInOut: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2 className="project_title">{title.toUpperCase()}</h2>
          <p className="project_para">{description.toUpperCase()}</p>
          <div>
            <p>React</p>
            <p>Firebase</p>
            <p>React-Form-Hook</p>
          </div>
        </motion.div>
      </motion.div>
      {/* <div className="project_left">
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
      </div> */}
    </motion.div>
  );
}

export default Project;
