import React from "react";
import styled from "styled-components";
import LoginChoiceButton from "./LoginChoiceButton";
import LoginInformation from "../loginButton/LoginInformation";
import Logo from "./Logo";
import NavLinkItem from "./NavLinkItem";
import Burger from "./Burger";

const NavBarHeader = props => {
  const { user, open, handleOpen, refButton } = props;

  return (
    <SNavBarHeader>
      <Burger ref={refButton} open={open} handleOpen={handleOpen} />
      <Logo />
      <NavLinkItem />
      {user ? <LoginInformation user={user} /> : <LoginChoiceButton />}
    </SNavBarHeader>
  );
};

const SNavBarHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.responsive.xs}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${({ theme }) => theme.responsive.sm}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${({ theme }) => theme.responsive.md}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${({ theme }) => theme.responsive.lg}) {
    max-width: 1140px;
  }
`;

export default NavBarHeader;
