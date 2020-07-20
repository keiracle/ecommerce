import React from "react";
import styled from "styled-components";
import Button from "../commons/Button";
import { Link } from "react-router-dom";
import * as authService from "../../services/authService";

const LoginInfomationPopUp = ({ isActive, user }) => {
  const handleLogOut = () => {
    authService.logout();
    window.location = "/";
  };

  const handleCheckOrders = () => {
    console.log("orders");
  };

  return (
    <SPopUp isActive={isActive}>
      <Link to="/profile">
        <Button
          variant="text"
          color="default"
        >{`${user.firstName} ${user.lastName}`}</Button>
      </Link>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleCheckOrders}
      >
        Check Orders
      </Button>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </SPopUp>
  );
};

const SPopUp = styled.div`
  position: absolute;
  min-width: 50px;
  min-height: 50px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.primaryLight};
  top: 50px;
  left: -55px;
  border-radius: 5px 5px 5px 5px;
  transform: ${props => (props.isActive ? "scale(1)" : "scale(0)")};
  transition: 0.2s ease-in-out;
  z-index: 1;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(143, 143, 143, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(143, 143, 143, 1);
  box-shadow: 0px 0px 5px 0px rgba(143, 143, 143, 1);

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 10px;
    background-color: transparent;
    border-bottom: 15px solid white;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: -10px;
    left: 55px;
  }

  div,
  button {
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    margin: 5px 0;
  }

  div {
    color: black;
  }
`;

export default LoginInfomationPopUp;
