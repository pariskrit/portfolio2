import React from "react";
import "./navbar.css";

import Navbaritem from "./Navbaritem";

const Navbar = React.forwardRef((props, ref) => {
  return (
    <nav className="navbar" ref={ref}>
      <div
        className="navbar__back"
        style={{ top: props.showBackground ? "0" : "-100px" }}
      ></div>
      <ul style={{ width: props.showBackground ? "40%" : "50%" }}>
        {props?.navItems.map((item) => (
          <Navbaritem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
