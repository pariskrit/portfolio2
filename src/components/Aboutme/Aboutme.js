import React from "react";
import "./aboutme.css";
import me from "../../assets/me.png";
import { motion } from "framer-motion/dist/framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
    },
  },
};

function Aboutme() {
  return (
    <motion.div
      id="aboutme"
      className="aboutme"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="aboutme__header">
        {/* <h1 className="aboutme__hello">Hello!</h1> */}
        {/* <motion.p className="aboutme__content__title" variants={cardVariants}>
          I'm a Full-Stack Developer based in Kathmandu,Nepal.
        </motion.p> */}
      </div>

      <div className="aboutme__content">
        <div className="aboutme__content__description">
          <motion.div className="aboutme__hello" variants={cardVariants}>
            Hello!
          </motion.div>
          <motion.p variants={cardVariants}>
            As a highly skilled and experienced full-stack developer, I
            specialize in utilizing React, Express, Next.js, MongoDB, and React
            Native to create dynamic and responsive web and mobile applications.
            With several years of experience working on various projects, I have
            a deep understanding of React and its ecosystem, including hooks,
            context API, and other advanced features. If you are looking for a
            full-stack developer with a strong focus on React, Express, Next.js,
            MongoDB, and React Native, please don't hesitate to reach out. I
            would be happy to discuss how I can contribute to the success of
            your project.
          </motion.p>
        </div>
        <motion.img src={me} alt="mypic" variants={cardVariants} />
      </div>
    </motion.div>
  );
}

export default Aboutme;
