import React from "react";
import styled from "styled-components";
import DraggableList from "./DraggableList";

export default function BucketContainer() {
  return (
    <WrapperBucketContainer className="row mx-auto">
      <DraggableList />
    </WrapperBucketContainer>
  );
}

const WrapperBucketContainer = styled.div`
  width: 100%;
  padding-top: 200px;
  max-width: 1600px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
