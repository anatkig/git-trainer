import React from "react";
import "./header.css";

const Header = ({
  handleClick,
  topic,
}: {
  handleClick: (skill: string) => void;
  topic: string;
}) => {
  const skills = ["CSS", "Git"];

  return (
    <header id="header">
      <div>{topic} Questions</div>
      <div id="skills">
        {skills.map((skill) => (
          <div
            className="skill"
            key={skill}
            onClick={() => handleClick(skill)}
            style={topic === skill ? { transform: "scale(1.2)" } : undefined}
          >
            {skill}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
