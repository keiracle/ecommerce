import React from "react";
import _ from "lodash";
import styled from "styled-components";
import PropTypes from "prop-types";

const Pagination = ({
  pageSize,
  itemsCount,
  currentPage,
  onPageChange,
  onPageIncrement,
  onPageDecrement,
  ...rest
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  // No pagination
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <SPagination {...rest}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item" onClick={onPageDecrement}>
            <button
              className="page-link"
              href="#"
              disabled={currentPage <= 1 ? true : false}
            >
              Previous
            </button>
          </li>
          {pages.map(page => (
            <li
              key={page}
              className={`page-item ${currentPage === page && `active`}`}
            >
              <button
                className="page-link"
                disabled={currentPage === page ? true : false}
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </button>
            </li>
          ))}
          <li className="page-item" onClick={onPageIncrement}>
            <button
              className="page-link"
              href="#"
              disabled={currentPage === pagesCount ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </SPagination>
  );
};

const SPagination = styled.div``;

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageIncrement: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default Pagination;
