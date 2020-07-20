import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { StuffContext } from "../../context/stuffProvider";
import { Icon, Spin } from "antd";

const spinIcon = <Icon style={{ fontSize: 40 }} spin type="loading" />;

const FetchingScreen = () => {
  const { isFetching } = useContext(StuffContext);

  const disableScroll = e => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isFetching) {
      document.addEventListener("wheel", disableScroll, { passive: false });
      document.addEventListener("touchmove", disableScroll, { passive: false });
    }

    return () => {
      document.removeEventListener("wheel", disableScroll, { passive: false });
      document.addEventListener("touchmove", disableScroll, { passive: false });
    };
  }, [isFetching]);

  return isFetching ? (
    <SFetchingScreen>
      <SIcon>
        <Spin indicator={spinIcon} />
      </SIcon>
    </SFetchingScreen>
  ) : (
    <></>
  );
};

const SFetchingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;

const SIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default FetchingScreen;
