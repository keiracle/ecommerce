import _ from 'lodash';

export const getImageBase64 = binaryData => {
  return btoa(
    new Uint8Array(binaryData).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, '')
  );
};

export const paginate = (items, pageNumber, pageSize) => {
  // items === array of items
  // pageNumber === number of current page
  // pageSize === number of items in 1 page

  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
};

// Check if product is on sale
export const isSale = salePrice => {
  return salePrice === 0 ? false : true;
};

// Check if product is on hot deal
export const isHotDeal = saleExpired => {
  return Date.now() < new Date(saleExpired.endDate) &&
    Date.now() >= new Date(saleExpired.startDate)
    ? true
    : false;
};
