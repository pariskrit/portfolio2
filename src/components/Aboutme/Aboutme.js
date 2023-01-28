import React from "react";
import "./aboutme.css";
import me from "../../assets/me.png";

function Aboutme() {
  return (
    <div id="aboutme" className="aboutme">
      <div className="aboutme__header">
        <h1 className="aboutme__hello">Hello!</h1>
        <p className="aboutme__content__title">
          I'm a Full-Stack Developer based in Kathmandu,Nepal.
        </p>
      </div>

      <div className="aboutme__content">
        <div className="aboutme__content__description">
          <p>
          As a highly skilled and experienced full-stack developer, I specialize in utilizing React, Express, Next.js, MongoDB, and React Native to create dynamic and responsive web and mobile applications.

With several years of experience working on various projects, I have a deep understanding of React and its ecosystem, including hooks, context API, and other advanced features. I have also worked on projects that required integrating with other libraries and frameworks such as Redux and Material-UI.

My expertise in Express and Next.js allows me to create scalable and performant server-side applications, implementing features such as server-side rendering, custom routes, and API endpoints.

I have extensive experience working with MongoDB and am comfortable with all aspects of the database, from data modeling and indexing to advanced aggregation. I have experience working with Mongoose, which is a MongoDB object modeling tool that helps to interact with MongoDB databases easily.

Additionally, I have experience working with React Native, which I have used to build cross-platform mobile applications. I have a solid understanding of the React Native ecosystem and I am comfortable with all aspects of mobile development, from navigation and styling to integrating with native modules.

I am a highly motivated, results-driven professional, who is dedicated to delivering high-quality solutions that meet the needs of my clients. I am always eager to take on new challenges and to continuously improve my skills.

If you are looking for a full-stack developer with a strong focus on React, Express, Next.js, MongoDB, and React Native, please don't hesitate to reach out. I would be happy to discuss how I can contribute to the success of your project.
          </p>
        </div>
        <img src={me} alt="mypic" />
      </div>
    </div>
  );
}

export default Aboutme;
