import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Selector from "../Selector";

const MergeForm = ({ location }) => {
  const [state, setstate] = useState("login");

  const handleOnClick = choseState => {
    setstate(choseState);
  };

  return (
    <WrapperMergeForm>
      <Selector handleOnClick={handleOnClick} state={state} />
      {state === "login" ? (
        <LoginForm location={location} />
      ) : (
        <RegisterForm location={location} />
      )}
    </WrapperMergeForm>
  );
};

const AbsoluteSwitch = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 300px;
`;

const WrapperMergeForm = styled.div`
  position: relative;
  width: 450px;
  margin: auto;
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
  //   -webkit-box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);
  //   -moz-box-shadow: 1px 0px 12px 0px rgba(158, 158, 158, 1);
  //   box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);

  div:first-of-type {
  }
`;

export default MergeForm;
