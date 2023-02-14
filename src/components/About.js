import React from "react";
import Card from "./Card";
import Projects from "./Projects";

function About() {
  return (
    <div className="skillsd">
      <div className="heading">
        <h1>SKILLS</h1>
      </div>
      <Card />
      <div className="heading">
        <h1>PROJECTS</h1>
      </div>
      <Projects />
    </div>
  );
}

export default About;
