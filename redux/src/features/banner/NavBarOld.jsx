import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import Sticky from "../commons/Sticky";
import "../css/NavBar.css";
import LoginChoiceButton from "./LoginChoiceButton";
import LoginInformation from "../loginButton/LoginInformation";
import MiniCart from "./MiniCart";

const NavBarOld = ({ user }) => {
  const {
    cart,
    removeCartItem,
    totalPrice,
    isAddedToCart,
    closeAddedItemToCartNoti
  } = useContext(CartContext);

  const ref = useRef(null);

  const getTotalCartItem = () => {
    let total = 0;
    cart.forEach(item => {
      const { quantity, product } = item;
      total += quantity;
    });
    return total;
  };

  const handleClickOutside = event => {
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
    <div className="container bg-transparent navbar-expand-lg mb-5 pt-2">
      <div
        className="collapse navbar-collapse align-items-start"
        id="navbarNav"
      >
        <a href="/" className="text-decoration-none">
          <div className="logo">
            <div className="logo-quote">
              <p className="h1 text-capitalize">e-commerce</p>
              <div className="text-capitalize">fell free to buy anything !</div>
            </div>
          </div>
        </a>
        <nav className="nav navbar-expand-sm navbar-ligh mx-auto mt-2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/not-found"
                className="nav-link text-white font-weight-light nav-link-self"
              >
                What is?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/landing"
                className="nav-link text-white font-weight-light nav-link-self"
              >
                Meet the team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className="nav-link text-white font-weight-light nav-link-self"
              >
                Go shopping
              </NavLink>
            </li>
            <li className="nav-item" style={{ position: "relative" }}>
              <NavLink
                to="/cart"
                className="nav-link text-white font-weight-light nav-link-self mycart-popup"
              >
                Check thu'm cart
              </NavLink>
              <Sticky>
                <StickyHolder>
                  <WrapperPopUp isAddedToCart={isAddedToCart} ref={ref}>
                    <PopUp>
                      <span className="text-capitalize">
                        you have new item in cart
                      </span>
                      <NavLink to="/cart">
                        <button className="btn btn-danger mt-3">
                          Check Cart
                        </button>
                      </NavLink>
                    </PopUp>
                  </WrapperPopUp>
                </StickyHolder>
              </Sticky>
            </li>
            <li className="nav-item" style={{ position: "relative" }}>
              <MiniCart
                value={getTotalCartItem()}
                cart={cart}
                removeCartItem={removeCartItem}
                totalPrice={totalPrice}
              />
            </li>
          </ul>
        </nav>
        {user ? <LoginInformation user={user} /> : <LoginChoiceButton />}
      </div>
    </div>
  );
};

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

const WrapperPopUp = styled.div`
  position: absolute;
  top: 10px;
  left: -50%;
  width: 250px;
  height: 100px;
  border-radius: 5px;
  opacity: 0;
  transform: scale(0);
  transition: 0.2s ease-in-out;

  ${props =>
    props.isAddedToCart &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

const StickyHolder = styled.div`
  position: relative;
  top: 10px;
  ${props =>
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

export default NavBarOld;
