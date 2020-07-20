import React, { useRef } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Test = () => {
  const [page, setPage] = useState({ pageX: "", pageY: "" });

  const [rect, setRect] = useState({ x: "", y: "" });

  const [ripple, setRipple] = useState({ x: "", y: "" });

  const ref = useRef(null);

  const handleScroll = event => {
    const element = ref.current;
    const rect = element.getBoundingClientRect();

    const rippleX = Math.round(page.pageX - rect.left);
    const rippleY = Math.round(page.pageY - rect.top);

    setRipple({ x: rippleX, y: rippleY });
  };

  const handleMouseDown = event => {
    setPage({ pageX: event.pageX, pageY: event.pageY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <STest ref={ref} onMouseDown={handleMouseDown}>
      <p>PageX : {page.pageX}</p>
      <p>PageY : {page.pageY}</p>
      <p>RectX: {rect.x}</p>
      <p>RectY: {rect.y}</p>
      <p>RippleX: {ripple.x}</p>
      <p>RippleY: {ripple.y}</p>
    </STest>
  );
};

const STest = styled.div`
  padding: 10px;
  border: 1px solid red;
`;

export default Test;
