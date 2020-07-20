import React from "react";
import styled from "styled-components";
import withLogProps from "../utils/withLogProps";

const DescriptionCard = ({ title, message, describe = "", button }) => {
  return (
    <SDescriptionCard>
      <h2>{title}</h2>
      <p>{message}</p>
      <SGoTo>
        {describe && <p> {describe} </p>}
        {button}
      </SGoTo>
    </SDescriptionCard>
  );
};

const SDescriptionCard = styled.div`
  padding: 20px;
  color: white;
  cursor: grab;
  user-select: none;
  font-size: 1rem;

  & > * {
    color: white;
    padding: 10px;
    font-size: 1.2rem;
  }

  & > h2 {
    font-size: 2rem;
  }
`;

const SGoTo = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 40px;
  /* line-height of button is inherit */
  line-height: 50px;
  padding: 10px;

  & > * {
    padding: 0 50px;
    margin: 0;
  }
`;
export default DescriptionCard;
