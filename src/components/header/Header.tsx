import React, { useState } from "react";
import { skills } from "../../constants/constants";
import "./header.css";

const Header = ({
  handleClick,
  topic,
  displayMode,
  setDisplayMode,
}: {
  handleClick: (skill: string) => void;
  topic: string;
  displayMode: string;
  setDisplayMode: React.Dispatch<string>;
}) => {
  const [switchMenu, setSwitchMenu] = useState(false);

  const handleMenuClick = () => {
    setSwitchMenu(!switchMenu);
  };
  return (
    <header id="header">
      <div id="mobile-switcher" onClick={handleMenuClick}>
        <div className="switcher-item"></div>
        <div className="switcher-item"></div>
        <div className="switcher-item"></div>
      </div>
      <div id="headings">
        <div
          className="topic"
          onClick={() => setDisplayMode("questions")}
          style={
            displayMode === "questions"
              ? { transform: "scale(1.2)", background: "rgb(0, 0, 230)" }
              : undefined
          }
        >
          {topic} Questions
        </div>
        <div id="app-title">Skills Trainer</div>
        <div
          className="topic"
          onClick={() => setDisplayMode("statistics")}
          style={
            displayMode === "statistics"
              ? { transform: "scale(1.2)", background: "rgb(0, 0, 230)" }
              : undefined
          }
        >
          {topic} Statistics
        </div>
      </div>

      <div id="skills" style={switchMenu ? { display: "flex" } : undefined}>
        {skills.map((skill) => (
          <div
            className="skill"
            key={skill}
            onClick={() => handleClick(skill)}
            style={topic === skill ? { transform: "scale(1.3)" } : undefined}
          >
            {skill}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
