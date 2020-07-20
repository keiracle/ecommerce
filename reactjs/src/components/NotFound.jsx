import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const NotFound = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2
  ];

  const transOctopus = (x, y) => `
    translate3d(${x / 5}px, ${y / 5 + 200}px,0)
  `;
  const transBubble = (x, y) => `
    translate3d(${x / 5.5 - 200}px, ${y / 5.5 + 200}px,0)
  `;

  const transSun = (x, y) => `
    translate3d(${x / 8 - 250}px, ${y / 8 - 100}px,0)
  `;

  const transView = (x, y) => `
    translate3d(${x / 12}px,${y / 12}px,0)
  `;

  return (
    <SNotFound
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <SView style={{ transform: props.xy.interpolate(transView) }} />
      <SBubble style={{ transform: props.xy.interpolate(transBubble) }} />
      <SOctopus style={{ transform: props.xy.interpolate(transOctopus) }} />
      <SSun style={{ transform: props.xy.interpolate(transSun) }} />
    </SNotFound>
  );
};

const SNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const SOctopus = styled(animated.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(images/octopus.svg);
`;

const SSun = styled(animated.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://image.flaticon.com/icons/svg/789/789395.svg);
`;

const SView = styled(animated.div)`
  position: absolute;
  width: 700px;
  height: 700px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://image.flaticon.com/icons/svg/146/146427.svg);
`;

const SBubble = styled(animated.div)`
  position: absolute;
  width: 250px;
  height: 230px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(images/notfound.png);
`;

export default NotFound;
