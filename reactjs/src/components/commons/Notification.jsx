import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notification = props => {
  const { children, width = 0, height = 0 } = props;

  const [isPop, setIsPop] = useState(true);

  const handleClick = event => {
    setIsPop(prev => !prev);
  };

  return (
    <SNotification width={width} height={height} isPop={isPop}>
      <SFlow onClick={handleClick} isPop={isPop}>
        <FontAwesomeIcon icon="arrow-right" size="3x" />
      </SFlow>
      <SPlaceholder />
      {children}
    </SNotification>
  );
};

const SNotification = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: white;
  transition: 0.5s cubic-bezier(0.49, 0.83, 0.65, 0.29);

  transform: ${props => (props.isPop ? `translate(0)` : `translate(-100%)`)};
`;

const SFlow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 100%;
  cursor: pointer;
  user-select: none;
  padding: 5px;
  background-color: white;
  transition: 0.5s linear;
  transform: ${props => (props.isPop ? `rotate(180deg)` : `rotate(0)`)};

  &:nth-child(1) {
  }
`;

const SPlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default Notification;
