import React, { useRef, useState, useContext } from "react";
import DraggableItem from "./DraggableItem";
import { useSprings, animated, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import { Context } from "../ContextAPI";
import styled from "styled-components";
import _ from "lodash";

export default function DraggableList() {
  const { bucketBrands: stateBucketBrands, handleBucketBrands } = useContext(
    Context
  );
  const [bucketBrands, setBucketBrands] = useState(stateBucketBrands);
  const [order, setOrder] = useState(bucketBrands.map((_, index) => index));
  const [isPressed, setIsPressed] = useState(false);

  const jumpShot = 70;
  const fn = (order, down, y, originalIndex, currentIndex) => index =>
    down && index === originalIndex
      ? {
          y: currentIndex * jumpShot + y,
          scale: 1.1,
          zIndex: 80,
          shadow: 15,
          immediate: n => n === "y" || n === "zIndex"
        }
      : {
          y: order.indexOf(index) * jumpShot,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false
        };

  const [springs, setSprings] = useSprings(order.length, fn(order));

  const move = (arrOrder, moveIndex, toIndex) => {
    const item = arrOrder[moveIndex];
    const length = arrOrder.length;
    const diff = moveIndex - toIndex;

    if (diff > 0) {
      //move to left
      return [
        ...arrOrder.slice(0, toIndex),
        item,
        ...arrOrder.slice(toIndex, moveIndex),
        ...arrOrder.slice(moveIndex + 1, length)
      ];
    } else if (diff < 0) {
      //move to right
      const targetIndex = toIndex + 1;
      return [
        ...arrOrder.slice(0, moveIndex),
        ...arrOrder.slice(moveIndex + 1, targetIndex),
        item,
        ...arrOrder.slice(targetIndex, length)
      ];
    } else return arrOrder;
  };

  const bind = useDrag(({ args: [originalIndex], down, movement: [, y] }) => {
    setIsPressed(true);

    const currentIndex = order.indexOf(originalIndex);
    const currentRow = _.clamp(
      Math.round((currentIndex * jumpShot + y) / jumpShot),
      0,
      order.length - 1
    );
    const newOrder = move(order, currentIndex, currentRow);
    const newBucketBrands = move(bucketBrands, currentIndex, currentRow);
    setSprings(fn(newOrder, down, y, originalIndex, currentIndex));
    if (!down) {
      setIsPressed(false);
      setOrder(newOrder);
      // setBucketBrands(newBucketBrands);
      handleBucketBrands(newBucketBrands);
    }
  });

  return (
    <WrapperDraggableList className="col-10 col-sm-4 col-lg-3 mx-0 px-0">
      {springs.map(({ y, scale, zIndex, shadow }, index) => {
        return (
          <DraggableItem
            key={index}
            y={y}
            scale={scale}
            zIndex={zIndex}
            shadow={shadow}
            index={index}
            bind={bind}
            order={order}
            brand={bucketBrands[index]}
            isPressed={isPressed}
          />
        );
      })}
    </WrapperDraggableList>
  );
}

const WrapperDraggableList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;
