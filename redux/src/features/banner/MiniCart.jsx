import React from 'react';
import styled from 'styled-components';
import MiniProduct from './MiniProduct';

const MiniCart = props => {
  const { cart, totalPrice } = props;

  return (
    <SMiniCart>
      {cart.length === 0 ? (
        <SEmptyCart>
          <p>Your cart is current empty</p>
        </SEmptyCart>
      ) : (
        <>
          <SWrapMiniProduct>
            {cart.map(item => (
              <MiniProduct key={item.product._id} item={item} />
            ))}
          </SWrapMiniProduct>
          <SOption>
            <p>
              Total Price :<span>${totalPrice}</span>
            </p>
          </SOption>
        </>
      )}
    </SMiniCart>
  );
};

const SMiniCart = styled.div`
  width: 300px;
  height: 300px;

  & > * {
    color: black;
  }
`;

// const SMiniCartPopUp = styled.div`
//   position: absolute;
//   top: 50px;
//   left: -190%;
//   padding-top: 10px;
//   width: 300px;
//   height: 300px;
//   background-color: rgba(240, 240, 240);

//   border-radius: 5px;
//   transition: 0.2s linear;
//   transform: scale(0);
//   opacity: 0;

//   ${props =>
//     props.isActive &&
//     css`
//       transform: scale(1);
//       opacity: 1;
//     `}

//   &::after {
//     position: absolute;
//     content: "";
//     bottom: 100%;
//     left: 45%;
//     width: 15px;
//     height: 15px;
//     border-bottom: 15px solid rgba(240, 240, 240);
//     border-left: 15px solid transparent;
//     border-right: 15px solid transparent;
//   }

//   & > * {
//     color: black;
//   }
// `;

const SWrapMiniProduct = styled.div`
  width: 100%;
  height: 80%;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #cccccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff4343;
    border-radius: 5px;
  }
`;

const SEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > p {
    font-size: 1.2rem;
    margin: 10px;
  }
`;

const SOption = styled.div`
  width: 100%;
  padding: 5px 20px;

  & > p {
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 10px;

    box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
      -2px -2px 12px rgba(255, 255, 255, 0.5),
      inset 2px 2px 4px rgba(255, 255, 255, 0.1),
      2px 2px 8px rgba(0, 0, 0, 0.25);

    &:hover {
      box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.25);
      font-size: 1.19rem;
      span {
        transform: scale(0.98);
      }
    }
  }

  span {
    font-size: 1.2rem;
    color: red;
    float: right;
  }
`;

export default MiniCart;
