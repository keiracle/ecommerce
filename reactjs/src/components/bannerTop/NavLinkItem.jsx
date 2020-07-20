import React, { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/cartProvider";
import { NavLink } from "react-router-dom";
import Sticky from "../commons/Sticky";
import MiniCartContainer from "./MiniCartContainer";
import styled, { css } from "styled-components";

const NavLinkItem = () => {
  const {
    cart,
    removeCartItem,
    totalPrice,
    isAddedToCart,
    closeAddedItemToCartNoti,
    isSale,
    isHotDeal,
  } = useContext(CartContext);

  const ref = useRef(null);

  const getTotalCartItem = () => {
    let total = 0;
    cart.forEach((item) => {
      const { quantity, product } = item;
      total += quantity;
    });
    return total;
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isAddedToCart === false) return; //prevent re-render when click mouse but same state
      closeAddedItemToCartNoti();
    }
  };

  //Click outside -> handleClickOutside -> closeAddedItem -> addedNewItem
  //event click everywhere -> memoryleak?
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <SNavLinkItem>
      <ul>
        <li>
          <SNavLink activeClassName="selected" to="/products">
            Go shopping
          </SNavLink>
        </li>
        <li style={{ position: "relative" }}>
          <SNavLink activeClassName="selected" to="/cart">
            Check cart
          </SNavLink>
          <Sticky>
            <StickyHolder>
              <SPopUp AddedToCart={isAddedToCart} ref={ref}>
                <PopUp>
                  <span>you have new item in cart</span>
                  <NavLink to="/cart">
                    <button>Check Cart</button>
                  </NavLink>
                </PopUp>
              </SPopUp>
            </StickyHolder>
          </Sticky>
        </li>
        <li style={{ position: "relative" }}>
          <MiniCartContainer
            value={getTotalCartItem()}
            cart={cart}
            removeCartItem={removeCartItem}
            totalPrice={totalPrice}
            isSale={isSale}
            isHotDeal={isHotDeal}
          />
        </li>
      </ul>
    </SNavLinkItem>
  );
};

const SPopUp = styled.div`
  position: absolute;
  top: 10px;
  left: -50%;
  width: 250px;
  height: 100px;
  border-radius: 5px;
  opacity: 0;
  transform: scale(0);
  transition: 0.2s ease-in-out;

  ${(props) =>
    props.isAddedToCart &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

const StickyHolder = styled.div`
  position: relative;
  top: 10px;
  ${(props) =>
    props.modifiers[0] === "stuck-top" &&
    css`
      position: fixed;
      top: 15px;
      left: 50%;
      margin-left: 140px;
    `}

  /* Make sure pop-up will on top all the time */
  z-index: 1000;
`;

const PopUp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  border-radius: 5px;

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 45%;
    border-bottom: 10px solid whitesmoke;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;

const SNavLinkItem = styled.nav`
  margin: 0.5rem auto;

  & > ul {
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
  }

  li {
    padding: 0.5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.md}) {
    display: none;
  }
`;

const SNavLink = styled(NavLink)`
  color: white;
  transform: scale(1);

  &::after {
    content: "";
    background-color: transparent;
    display: block;
    border-bottom: 1px solid white;
    transform: scale(0);
    transition: 0.2s ease-in-out;
  }

  &:hover {
    color: white;

    &::after {
      transform: scale(1);
    }
  }

  &.selected {
    &::after {
      transform: scale(1);
    }
  }
`;

export default NavLinkItem;
