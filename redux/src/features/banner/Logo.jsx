import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

let randomList = ["star", "star-half-alt", "star-and-crescent", "splotch"];

const Logo = () => {
  const [icon, setIcon] = useState("heart");

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    let changeIcon = null;
    if (isHover) {
      changeIcon = setTimeout(() => {
        const randNum = Math.floor(
          Math.random() * Math.floor(randomList.length)
        );
        const takeIcon = randomList[randNum];

        randomList.push(icon);
        setIcon(takeIcon);
        randomList = _.pull(randomList, takeIcon);
      }, 200);
    }
    return () => {
      clearTimeout(changeIcon);
    };
  }, [icon, isHover]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <SLogo
      href="/"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="logo">
        <SLogoQuote>
          <div>buy anything !</div>
          <FontAwesomeIcon icon={icon} size="sm" color="#f44292" />
        </SLogoQuote>
      </div>
    </SLogo>
  );
};

const SLogo = styled.a`
  text-decoration: none;
  min-width: 160px;
`;

const SLogoQuote = styled.div`
  font-size: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;

  div {
    color: #f44292;
  }
`;

export default Logo;
