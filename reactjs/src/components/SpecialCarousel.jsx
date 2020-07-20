import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { ProductsContext } from "../context/productsProvider";
import Product from "./product/Product";
import styled, { css, keyframes } from "styled-components";

const SpecialCarousel = React.memo(({ label = "", ...other }) => {
  const { products } = useContext(ProductsContext);

  const [isGrabbing, setIsGrabbing] = useState(false);

  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // padding + margin not working on Slider
  const divStyle = {
    width: "300px"
  };

  return (
    <SSpecialCarousel
      isGrabbing={isGrabbing}
      onMouseDown={() => {
        setIsGrabbing(true);
      }}
      onMouseUp={() => {
        setIsGrabbing(false);
      }}
      onMouseLeave={() => {
        setIsGrabbing(false);
      }}
    >
      {label && (
        <SLabel>
          <p>{label}</p>
        </SLabel>
      )}
      <Slider {...settings} {...other}>
        {products.map(product => (
          <div key={product._id} style={divStyle}>
            <Product product={product} carousel />
          </div>
        ))}
      </Slider>
    </SSpecialCarousel>
  );
});

const SSpecialCarousel = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  padding: 0px 0;
  cursor: ${props => (props.isGrabbing ? "grabbing" : "grab")};
  transition: border 0.2s linear;
  border-radius: 5px;

  /* First div is label */
  & > div:first-of-type {
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      transition: 1s cubic-bezier(0.23, 1, 0.32, 1);
      border-bottom: 1px solid rgba(30, 153, 255);
      transform: scale(0.3);
    }
  }

  /* First div is label */
  &:hover {
    & > div:first-of-type {
      & > p {
        font-size: 1.6rem;
        top: 20px;
        padding: 0 10px;
        color: rgba(2, 112, 203);
      }

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border-bottom: 1px solid rgba(30, 153, 255);
        transform: scale(1);
      }
    }
  }
`;

const SLabel = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  text-align: center;
  font-size: 1.8rem;
  user-select: none;
  text-transform: capitalize;

  & > p {
    position: relative;
    font-size: 1.3rem;
    top: 0;
    left: 0;
    display: inline-block;
    padding: 0;
    margin: 0;

    /* Need background-color same as root color  */
    /* and z-index to over border */
    background-color: #edf4fa;
    z-index: 1;
    transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export default SpecialCarousel;
