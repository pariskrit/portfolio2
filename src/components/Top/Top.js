import React from "react";
import "./top.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Top() {
  const [name, setName] = React.useState("Pariskrit");

  const handleHoverEffect = () => {
    setName(name.split("").reverse().join(""));
  };

  React.useEffect(() => {
    if (name !== "Pariskrit") {
      setTimeout(() => setName(name.split("").reverse().join("")), 30);
    }
  }, [name]);
  return (
    <div className="top">
      <div className="top__content">
        <h1 onMouseOver={handleHoverEffect} onMouseOut={handleHoverEffect}>
          {name} Moktan
        </h1>
        <p>Resume</p>
      </div>
      <a href="#aboutme">
        <ArrowDropDownIcon className="downicon" />
      </a>
    </div>
  );
}

export default Top;
