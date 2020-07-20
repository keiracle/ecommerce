import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getImageBase64 } from '../../services/utilities';

// The custom comparison function
const comparison = function (prevProps, nextProps) {
  return prevProps._id === nextProps._id;
};

const ProductImage = React.memo(props => {
  const { _id, image, style, ...rest } = props;

  let imageBase64 = getImageBase64(image.data.data);

  return (
    <SProductImage {...rest}>
      <Link to={`/product/${_id}`}>
        <img
          src={`data:image/png;base64,${imageBase64}`}
          alt="product"
          style={style}
        />
      </Link>
    </SProductImage>
  );
}, comparison);

const SProductImage = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
  }
`;

export default ProductImage;
