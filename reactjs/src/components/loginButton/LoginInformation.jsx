import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginInfomationPopUp from "./LoginInfomationPopUp";

const LoginInformation = ({ user }) => {
  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setIsActive(false);
  };

  useEffect(() => {
    if (isActive) document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isActive]);

  const handleOnClick = () => {
    setIsActive(prev => {
      return !prev;
    });
  };

  return (
    <SLoginInformation isActive={isActive} onClick={handleOnClick} ref={ref}>
      <FontAwesomeIcon icon="user-circle" style={{ fontSize: "2rem" }} />
      <LoginInfomationPopUp isActive={isActive} user={user} />
    </SLoginInformation>
  );
};

const SLoginInformation = styled.div`
  position: relative;
  font-size: 1rem;
  text-transform: capitalize;
  color: white;
  padding: 0 0;
  margin-top: 10px;
  cursor: pointer;
  border: ${props =>
    props.isActive ? "1px solid rgb(31, 104, 168)" : "1px solid transparent"};
  border-radius: 5px;

  &:hover {
    border: 1px solid rgb(31, 104, 168);
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.md}) {
    display: none;
  }
`;

export default LoginInformation;
