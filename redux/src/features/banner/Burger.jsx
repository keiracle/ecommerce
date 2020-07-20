import React from "react";
import styled from "styled-components";

const Burger = React.forwardRef(({ open, handleOpen }, ref) => {
  return (
    <SBurger ref={ref} open={open} onClick={handleOpen}>
      <div />
      <div />
      <div />
    </SBurger>
  );
});

const SBurger = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  top: 5%;
  left: 2rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  cursor: pointer;
  z-index: 10;

  & > div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: 0.3s linear;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.responsive.md}) {
    display: none;
  }
`;

export default Burger;
