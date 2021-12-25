import React from "react";

const useFollowCursor = (parentclass, childclass) => {
  React.useEffect(() => {
    const parentElem = document.querySelector(`.${parentclass}`);
    parentElem.addEventListener("mousemove", (e) => {
      const childElem = document.querySelector(`.${childclass}`);
      const rect = childElem.getBoundingClientRect();
      const topPos = rect.top;
      const botPos = rect.bottom;
      const leftPos = rect.left;
      const rightPos = rect.right;
      childElem.style.marginTop =
        e.clientY < topPos ? "-30px" : e.clientY > botPos ? "30px" : "0";
      childElem.style.marginLeft =
        e.clientX < leftPos ? "-30px" : e.clientX > rightPos ? "30px" : "0";
    });
  }, []);
};

export default useFollowCursor;
