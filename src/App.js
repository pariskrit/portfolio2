import "./App.css";
import Container from "./components/container/Container";
import React, { useEffect } from "react";

function App() {
  const moveCursor = (e) => {
    const cursorRounded = document.querySelector(".rounded");
    const cursorPointed = document.querySelector(".pointed");
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };
  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
  return (
    <div className="App">
      <div class="cursor rounded"></div>
      <div class="cursor pointed"></div>
      <Container />
    </div>
  );
}

export default App;
