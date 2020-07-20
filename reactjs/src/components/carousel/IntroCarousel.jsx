import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/IntroCarousel.css";
import DescriptionCard from "../descriptionCard/DescriptionCard";
import Button from "../commons/Button";

const IntroCarousel = () => {
  return (
    <SIntroCarousel>
      <Carousel draggable="true" dots={false} autoplay>
        <div>
          <DescriptionCard
            title="Imperius Curse"
            message="The fact that the curse can be defended against makes it unique amongst the Unforgivable Curses."
            describe="Describe"
            button={
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<FontAwesomeIcon icon="credit-card" />}
              >
                Go to cart
              </Button>
            }
          />
        </div>
        <div>
          <DescriptionCard
            title="Cruciatus Curse"
            message="When cast successfully the curse inflicts intense, excruciating pain on the victim. 
            The penalty for use of this curse on another human being is a life sentence in Azkaban, 
            unless the caster did so under the influence of the Imperius Curse"
            button={
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<FontAwesomeIcon icon="truck" />}
              >
                Check payment
              </Button>
            }
          />
        </div>
        <div>
          <DescriptionCard
            title="Killing Curse"
            message="The Killing Curse (Avada Kedavra) is a tool of the Dark Arts.
             When cast successfully on a living person or creature the curse causes instantaneous and painless death, 
             without causing any injury to the body, and without any trace of violence."
            button={
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<FontAwesomeIcon icon="truck" />}
              >
                Check payment
              </Button>
            }
          />
        </div>
      </Carousel>
    </SIntroCarousel>
  );
};

const SIntroCarousel = styled.div`
  width: 30%;
  margin: auto;
  background-color: transparent;
`;

export default IntroCarousel;
