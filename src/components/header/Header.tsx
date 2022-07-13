import React, { useState } from "react";
import { skills } from "../../constants/constants";
import "./header.css";

const Header = ({
  handleClick,
  topic,
}: {
  handleClick: (skill: string) => void;
  topic: string;
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
      <div id="topic">{topic} Questions</div>

      <div id="skills" style={switchMenu ? { display: "flex" } : undefined}>
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
