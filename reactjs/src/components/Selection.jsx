import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Selection = ({ name, handleOnClick, state }) => {
  return (
    <WrapperSelection
      state={state}
      name={name}
      onClick={event => {
        handleOnClick(event.target.innerText.toLowerCase());
      }}
    >
      {name}
    </WrapperSelection>
  );
};

const WrapperSelection = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
  user-select: none;
  padding: 10px;
  margin: 5px;
  text-transform: capitalize;
  transform: scale(1);
  transition: all 0.2s;
  background-color: rgb(162, 162, 162);

  ${props => (props.state === props.name ? SelectionEffect : "")}

  &:hover {
  }
`;

const SelectionEffect = `background-color: rgb(83, 219, 52);
  transform: scale(1.05);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);`;

export default Selection;
