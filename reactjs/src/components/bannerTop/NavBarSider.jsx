import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarSider = React.forwardRef((props, ref) => {
  const { open } = props;

  return (
    <SNavBarSider ref={ref} open={open}>
      <SNavLinkItem>
        <ul>
          <li>
            <SNavLink to="/not-found" activeClassName="selected">
              What is?
            </SNavLink>
          </li>
          <li>
            <SNavLink to="/products" activeClassName="selected">
              Go shopping
            </SNavLink>
          </li>
          <li style={{ position: "relative" }}>
            <SNavLink to="/cart" activeClassName="selected">
              Check thu'm cart
            </SNavLink>
          </li>
        </ul>
      </SNavLinkItem>
    </SNavBarSider>
  );
});

const SNavBarSider = styled.div`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  font-size: 1.5rem;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100vh;
  background: rgb(2, 21, 41);
  z-index: 1;
  transition: 300ms ease-in-out;

  transform: ${({ open }) => (open ? `translateX(300px)` : `translateX(0)`)};
`;

const SNavLinkItem = styled.nav`
  margin: 0;
  margin-top: 5rem;
  height: 100%;
  width: 100%;

  & > ul {
    display: flex;
    padding: 0;
    flex-flow: column nowrap;
    list-style: none;
  }

  li {
  }
`;

const SNavLink = styled(NavLink)`
  display: block;
  color: white;
  padding: 0.5rem;

  &:hover {
    color: white;
  }

  &.selected {
    border-left: 5px solid rgb(37, 210, 35);
    background-color: rgb(45, 36, 66);
  }
`;

export default NavBarSider;
