import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthorizationPage = (props) => {
  const [type, setType] = useState(props.state);

  if (!type) return <></>;

  return (
    <SAuthorizationPage>
      {type === "login" ? (
        <LoginForm location={props.location} />
      ) : (
        <RegisterForm location={props.location} />
      )}
      <img src="./images/hacker_mindset.svg" alt="" />
    </SAuthorizationPage>
  );
};

const SAuthorizationPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

export default AuthorizationPage;
