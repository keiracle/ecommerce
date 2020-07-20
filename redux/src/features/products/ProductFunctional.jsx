import React from 'react';
// import MarkWish from "./MarkWish";
import AddToCart from './AddToCart';
import styled from 'styled-components';

const ProductFunctional = React.memo(props => {
  const { product } = props;

  const { _id } = product;

  return (
    <SProductFunctional>
      {/* <MarkWish _id={_id} /> */}
      <AddToCart product={product} />
    </SProductFunctional>
  );
});

const SProductFunctional = styled.div`
  margin-top: 5px;
`;

export default ProductFunctional;
