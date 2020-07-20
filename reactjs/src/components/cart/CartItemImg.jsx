import React from "react";
import { getImageBase64 } from "../../services/utilities";

const CartItemImg = React.memo(({ image }) => {
  let imageBase64 = getImageBase64(image.data.data);

  return (
    <img
      src={`data:image/png;base64,${imageBase64}`}
      alt=""
      style={{ width: "5rem", height: "5rem" }}
    />
  );
});

export default CartItemImg;
