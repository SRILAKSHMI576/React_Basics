import React from "react";
import "./style.css";

function GridLayout() {
  return (
    <div>
      <h1>Grid Layout</h1>
      <p>This grid layout contains six columns and three rows:</p>
      <div className="grid-container">
        <header>Header</header>
        <nav>Navigation</nav>
        <main>Main area</main>
        <footer>Footer</footer>
      </div>
    </div>
  );
}

export default GridLayout;
