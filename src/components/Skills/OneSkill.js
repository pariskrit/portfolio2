import React from "react";
import "./oneskill.css";
function OneSkill({ title, width, isAtSkills }) {
  const [perc, setPerc] = React.useState(0);
  const [styles, setStyles] = React.useState({});
  let perc1 = 1;

  React.useEffect(() => {
    let id = null;

    const incrementBar = () => {
      if (perc1 >= width) {
        clearInterval(id);
      }

      setPerc((prev) => prev + 1);
      perc1++;
    };

    if (isAtSkills) {
      setStyles({ width: `${width}%`, transition: "width 1s ease-out" });
      id = setInterval(incrementBar, 15);
    }
  }, [isAtSkills]);

  return (
    <div className="oneskill">
      <h2>{title}</h2>
      <div className="skill__bar" style={styles}>
        {`${perc}%`}
      </div>
    </div>
  );
}

export default OneSkill;
