import React, { useState } from "react";
import { animated, interpolate } from "react-spring";
import styled from "styled-components";
import "./css/DraggableItem.css";
import { StarBox } from "./StarBox";

export default function DraggableItem({
  index,
  y,
  scale,
  zIndex,
  shadow,
  bind,
  order,
  brand,
  isPressed
}) {
  return (
    <React.Fragment>
      <div className="placeholder"></div>
      <animated.div
        className="animated"
        style={{
          boxShadow: shadow.interpolate(
            shadow => `rgba(0, 0, 0, 0.15) 0px 0px ${2 * shadow}px 0px`
          ),
          transform: interpolate(
            [y, scale],
            (y, scale) => `translate3d(0,${y}px,0) scale(${scale})`
          ),
          zIndex
        }}
        // children={`${order[index]}  `}
      >
        <StarBox />
        <div className="name">{brand.name}</div>
        <DraggableZone
          className="draggableZone"
          {...bind(index)}
          isPressed={isPressed}
          draggable={false}
        />
      </animated.div>
    </React.Fragment>
  );
}

const DraggableZone = styled.div`
  cursor: ${props => (props.isPressed ? "grabbing" : "grab")};
`;
