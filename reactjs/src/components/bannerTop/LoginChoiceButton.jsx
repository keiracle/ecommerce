import React from "react";
import styled from "styled-components";
import Button from "../commons/Button";
import { Popover, notification } from "antd";
import { Link } from "react-router-dom";
import { login } from "../../services/authService";

const LoginChoiceButton = () => {
  const handleLoginDemoAccount = async () => {
    const values = { email: "kenny@gmail.com", password: "123456" };
    try {
      await login(values.email, values.password);
      // window.location = location.state ? location.state.from.pathname : "/";
      window.location = "/";
    } catch (error) {
      notification.error({ message: "Login fail", description: error.message });
    }
  };

  const content = (
    <SContent>
      <Link to="login">
        <Button variant="contained" color="primary" fullWidth>
          With Your Account
        </Button>
      </Link>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={handleLoginDemoAccount}
      >
        With Demo Account
      </Button>
    </SContent>
  );

  return (
    <SLoginChoiceButton>
      <Popover content={content} trigger="click">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Popover>
    </SLoginChoiceButton>
  );
};

const SLoginChoiceButton = styled.div`
  position: relative;
  font-size: 1rem;
  text-transform: capitalize;
  color: white;
  padding: 0;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const SContent = styled.div`
  width: 200px;
  & > * {
    margin-top: 10px;
  }
`;

export default LoginChoiceButton;
