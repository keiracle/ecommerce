// import React, { useState, useContext, useEffect } from "react";
// import styled, { css } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { WishListContext } from "../../context/wishListProvider";
// import _ from "lodash";

// const icon_small = css`
//   font-size: 16px;
// `;

// const icon_medium = css`
//   font-size: 18px;
// `;

// const icon_large = css`
//   font-size: 20px;
// `;

// const styles = {
//   icon_small,
//   icon_medium,
//   icon_large
// };

// const MarkWish = React.memo(props => {
//   const { _id, size = "medium" } = props;

//   const { wishList, markWishItem } = useContext(WishListContext);

//   const [loved, setLoved] = useState(() => {
//     let wishListIds = [];
//     wishList.forEach(i => {
//       wishListIds.push(i._id);
//     });

//     if (_.includes(wishListIds, _id)) {
//       return true;
//     }
//     return false;
//   });

//   const handleMarkWish = () => {
//     const response = markWishItem(_id);
//     // if (response.status === 200) setLoved(prev => !prev);
//     setLoved(prev => !prev);
//   };

//   return (
//     <SHeart onClick={handleMarkWish} size={size}>
//       {loved ? (
//         <FontAwesomeIcon icon="heart" />
//       ) : (
//         <FontAwesomeIcon icon={["far", "heart"]} />
//       )}
//     </SHeart>
//   );
// });

// const SHeart = styled.span`
//   ${({ size }) => styles[`icon_${size}`]};
//   cursor: pointer;
//   margin-right: 10px;
//   color: ${({ theme }) => theme.color.primaryRed};
// `;

// export default MarkWish;
