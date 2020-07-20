import React from "react";
import styled from "styled-components";
import Selection from "./Selection";

const Selector = ({ state, handleOnClick }) => {
  return (
    <WrapperSelector className="d-flex">
      <Selection
        name={"register"}
        state={state}
        handleOnClick={handleOnClick}
      />
      <Selection name={"login"} state={state} handleOnClick={handleOnClick} />
    </WrapperSelector>
  );
};

const WrapperSelector = styled.div`
  width: 100%;
`;

export default Selector;
