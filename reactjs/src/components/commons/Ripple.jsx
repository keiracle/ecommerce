import React, { useState, useEffect, useCallback, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import clsx from "clsx";

const Ripple = ({
  styles,
  timeout,
  rippleX,
  rippleY,
  rippleSize,
  in: inProp,
  onExited = () => {}
}) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!inProp) {
      setLeaving(true);

      const timeoutId = setTimeout(() => {
        onExited();
      }, timeout);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [inProp, onExited, timeout]);

  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };

  return (
    <SRipple style={rippleStyles} styles={styles}>
      <SChild leaving={leaving} styles={styles} />
    </SRipple>
  );
};

const SRipple = styled.span`
  ${props => props.styles.ripple}
  ${props => props.styles.rippleVisible}
`;

const SChild = styled.span`
  ${props => props.styles.child}
  ${props => props.leaving && props.styles.childLeaving}
`;

export default Ripple;
