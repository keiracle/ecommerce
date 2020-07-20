import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import TouchRipple from "./TouchRipple";

const root = css`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: inherit;

  &:focus {
    outline: 0;
  }

  &:disabled {
    pointer-events: none;
    cursor: default;
  }
`;

let ComponentProp = "button";

const ButtonBase = props => {
  const { children, className, component, disabled, ...other } = props;

  const [focusVisible, setFocusVisible] = useState(false);

  if (disabled && focusVisible) setFocusVisible(false);

  // For using func at TouchRipple
  const rippleRef = useRef(null);

  const handleMouseDown = event => {
    if (rippleRef.current === null) return;
    rippleRef.current.start(event);
  };

  const handleMouseUp = event => {
    if (rippleRef.current === null) return;
    rippleRef.current.stop(event);
  };

  const handleMouseLeave = event => {
    // A bug trigger disabled button still here
    if (rippleRef.current === null) return;
    rippleRef.current.stop(event);
  };

  ComponentProp = component;

  if (ComponentProp === "button" && other.href) {
    ComponentProp = "a";
  }

  // A bug that disabled button can trigger onMouseLeave (move mouse fast enough to cause this)
  // The explain issue: https://github.com/facebook/react/issues/4251#issuecomment-132119842
  // Solution here: https://github.com/bcrumbs/reactackle/issues/61#issue-270701032
  return (
    <SButtonBase
      as={ComponentProp}
      className={className}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      disabled={disabled}
      {...other}
    >
      {children}
      {!disabled && <TouchRipple ref={rippleRef} />}
    </SButtonBase>
  );
};

const SButtonBase = styled[ComponentProp]`
  ${root}
`;

export default ButtonBase;
