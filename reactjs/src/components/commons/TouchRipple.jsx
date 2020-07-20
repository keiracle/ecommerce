import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef
} from "react";
import styled, { css, keyframes } from "styled-components";
import { TransitionGroup } from "react-transition-group";
import Ripple from "./Ripple";

const DURATION = 500;

const enter = keyframes`
  0% {
    opacity: 0.1;
    transform: scale(0);
  }

  100% {
    opacity: 0.3;
    transform: scale(1);
  },
`;

const exit = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const styles = {
  root: css`
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
  `,
  ripple: css`
    opacity: 0;
    position: absolute;
  `,
  rippleVisible: css`
    opacity: 0.3;
    transform: scale(1);
    animation: ${enter} 550ms ease-in-out;
  `,
  child: css`
    display: block;
    opacity: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  `,
  childLeaving: css`
    opacity: 0;
    animation: ${exit} 550ms ease-in-out;
  `
};

const TouchRipple = forwardRef(function TouchRipple(props, ref) {
  const [ripples, setRipples] = useState([]);
  const nextKey = useRef(0);
  const timer = useRef(null);
  const container = useRef(null);

  const startCommit = useCallback(params => {
    const { rippleX, rippleY, rippleSize } = params;

    setRipples(oldRipples => [
      ...oldRipples,
      <Ripple
        key={nextKey.current}
        styles={styles}
        timeout={DURATION}
        rippleX={rippleX}
        rippleY={rippleY}
        rippleSize={rippleSize}
      />
    ]);
    nextKey.current += 1;
  }, []);

  const start = useCallback(
    event => {
      const element = container.current;
      const rect = element
        ? element.getBoundingClientRect()
        : {
            width: 0,
            height: 0,
            top: 0,
            left: 0
          };

      // Get the size of ripple
      let rippleX;
      let rippleY;
      let rippleSize;

      // x coordinate of mouse on client view port
      // y coordinate of mouse on client view port
      const clientX = event.clientX;
      const clientY = event.clientY;

      // x coordinate of rect on client view port
      // y coordinate of rect on client view port
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);

      const sizeX =
        Math.max(Math.abs(element.clientWidth - rippleX), rippleX) * 2 + 2;
      const sizeY =
        Math.max(Math.abs(element.clientHeight - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);

      startCommit({ rippleX, rippleY, rippleSize });
    },
    [startCommit]
  );

  const stop = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = null;

    setRipples(oldRipples => {
      if (oldRipples.length > 0) return oldRipples.slice(1);
      return oldRipples;
    });
  }, [setRipples]);

  useImperativeHandle(
    ref,
    () => ({
      start,
      stop
    }),
    [start, stop]
  );

  return (
    <STouchRipple ref={container}>
      <TransitionGroup component={null} exit>
        {ripples}
      </TransitionGroup>
    </STouchRipple>
  );
});

const STouchRipple = styled.span`
  ${styles.root}
`;

export default TouchRipple;
