import React from "react";

function Navbaritem({ item }) {
  const [showUnderline, setShowUnderline] = React.useState(false);
  return (
    <a
      href={item.href}
      onMouseOver={() => setShowUnderline(true)}
      onMouseOut={() => setShowUnderline(false)}
    >
      <li key={item.title}>
        {item.icon}
        <p className="navbar__name">
          {item.title}
          <span
            className={`span ${
              item?.isActive || showUnderline ? "underline" : ""
            }`}
          ></span>
        </p>
      </li>
    </a>
  );
}

export default Navbaritem;
