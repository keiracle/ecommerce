import React from "react";
import styled from "styled-components";
import { Icon, Spin } from "antd";

const spinIcon = <Icon style={{ fontSize: 24 }} spin type="loading" />;

const Loading = props => {
  const { icon = spinIcon, ...rest } = props;

  return (
    <SLoading {...rest}>
      <Spin indicator={spinIcon} />
    </SLoading>
  );
};

const SLoading = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export default Loading;
