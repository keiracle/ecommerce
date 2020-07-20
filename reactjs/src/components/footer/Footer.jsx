import React from "react";
import styled from "styled-components";
import Button from "../commons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <SFooter>
      <SItem>
        <div>Follow Us</div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "facebook-square"]} />}
            fullWidth
          >
            Facebook
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "instagram"]} />}
            fullWidth
          >
            Instagram
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "youtube-square"]} />}
            fullWidth
          >
            Youtube
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "twitter-square"]} />}
            fullWidth
          >
            Twitter
          </Button>
        </div>
      </SItem>
      <SItem>
        <div>Follow Us</div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "facebook-square"]} />}
            fullWidth
          >
            Facebook
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "instagram"]} />}
            fullWidth
          >
            Instagram
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "youtube-square"]} />}
            fullWidth
          >
            Youtube
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "twitter-square"]} />}
            fullWidth
          >
            Twitter
          </Button>
        </div>
      </SItem>
      <SItem>
        <div>Follow Us</div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "facebook-square"]} />}
            fullWidth
          >
            Facebook
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "instagram"]} />}
            fullWidth
          >
            Instagram
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "youtube-square"]} />}
            fullWidth
          >
            Youtube
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FontAwesomeIcon icon={["fab", "twitter-square"]} />}
            fullWidth
          >
            Twitter
          </Button>
        </div>
      </SItem>
      <SLicense>
        Copyright&copy;2020 All rights reserved. Contact @keytoherheart for more
        information
      </SLicense>
    </SFooter>
  );
};

const SItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin: 10px;
    min-width: 130px;
  }
`;

const SLicense = styled.div`
  grid-column: 1/4;
  margin: 10px 0;
`;

const SFooter = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  min-height: 20vh;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
  margin-top: 40px;
  background-image: linear-gradient(
    to bottom,
    #03203c,
    #0e223b,
    #162439,
    #1d2738,
    #222936,
    #232934,
    #252a33,
    #262a31,
    #24282f,
    #23262d,
    #21252c,
    #20232a
  );
  color: #c8c8c8;
`;

export default Footer;
