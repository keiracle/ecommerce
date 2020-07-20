import React, { useRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import ButtonBase from "./ButtonBase";

// Color and more still need to split into theme -> make it reuseable & maintainable
const root = css`
  box-sizing: border-box;
  min-width: 60px;
  padding: 6px 16px;
  font-size: 1rem;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.08);

    &:disabled {
      background-color: transparent;
    }
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.26);
  }
`;

// Applied to span element that wrap the children
const label = css`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

// Applied to root element if `variant="text"`
const text = css`
  padding: 6px 8px;
`;
// Applied to root element if `variant="text"` & `color="primary"`
const text_primary = css`
  color: #1976d2;
  background-color: transparent;

  &:hover {
    background-color: rgba(25, 118, 210, 0.08);
  }
`;

// Applied to root element if `variant="text"` & `color="secondary"`
const text_secondary = css`
  color: #dc004e;
  background-color: transparent;

  &:hover {
    background-color: rgba(220, 0, 78, 0.08);
  }
`;

// Applied to root element if `variant="contained"`
const contained = css`
  color: rgba(0, 0, 0, 0.87);
  background-color: #e0e0e0;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #d5d5d5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    &:disabled {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }

  &:disabled {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

// Applied to root element if `variant="contained"` and `color="primary"`
const contained_primary = css`
  color: #fff;
  background-color: #1976d2;

  &:hover {
    background-color: rgb(17, 82, 147);
  }
`;

// Applied to root element if `variant="contained"` and `color="secondary"`
const contained_secondary = css`
  color: #fff;
  background-color: #dc004e;

  &:hover {
    background-color: rgb(154, 0, 54);
  }
`;

// Applied to root element if `variant="contained"`
const outlined = css`
  color: rgba(0, 0, 0, 0.87);
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  &:disabled {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

// Applied to root element if `variant="contained"` && `color="primary"`
const outlined_primary = css`
  color: #1976d2;
  border: 1px solid rgba(25, 118, 210, 0.3);

  &:hover {
    border: 1px solid rgba(25, 118, 210);
    background-color: rgba(25, 118, 210, 0.1);

    &:disabled {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

// Applied to root element if `variant="contained"` && `color="secondary"`
const outlined_secondary = css`
  color: #dc004e;
  border: 1px solid rgb(220, 0, 78, 0.3);

  &:hover {
    border: 1px solid rgb(220, 0, 78);
    background-color: rgb(220, 0, 78, 0.1);

    &:disabled {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

// Applied to root element if `size="small"` & `variant="text"`
const text_small = css`
  padding: 4px 5px;
  font-size: 0.9rem;
`;

// Applied to root element if `size="large"` & `variant="text"`
const text_large = css`
  padding: 8px 11px;
  font-size: 1.1rem;
`;

// Applied to root element if `size="small"` & `variant="outlined"`
const outlined_small = css`
  padding: 3px 9px;
  font-size: 0.9rem;
`;

// Applied to root element if `size="large"` & `variant="outlined"`
const outlined_large = css`
  padding: 7px 21px;
  font-size: 1.1rem;
`;

// Applied to root element if `size="small"` & `variant="contained"`
const contained_small = css`
  padding: 4px 10px;
  font-size: 0.9rem;
`;

// Applied to root element if `size="large"` & `variant="contained"`
const contained_large = css`
  padding: 8px 22px;
  font-size: 1.1rem;
`;

// Applied to root element if true
const fullWidth = css`
  width: 100%;
`;

// Using styles["string"] to call styled css via props
const styles = {
  root,
  label,
  text,
  text_primary,
  text_secondary,
  contained,
  contained_primary,
  contained_secondary,
  outlined,
  outlined_primary,
  outlined_secondary,
  text_small,
  text_large,
  outlined_small,
  outlined_large,
  contained_small,
  contained_large,
  fullWidth
};

const Button = props => {
  const {
    children,
    className,
    component = "button",
    color = "default",
    disabled = false,
    variant = "text",
    startIcon: startIconProp,
    endIcon: endIconProp,
    size = "medium",
    fullWidth = false,
    ...other
  } = props;

  const startIcon = startIconProp && <SStartIcon>{startIconProp}</SStartIcon>;

  const endIcon = endIconProp && <SEndIcon>{endIconProp}</SEndIcon>;

  const buttonRef = useRef(null);

  return (
    <SButtonBase
      className={className}
      component={component}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      {...other}
    >
      <SLabel>
        {startIcon}
        {children}
        {endIcon}
      </SLabel>
    </SButtonBase>
  );
};

const SLabel = styled.span`
  ${label};
`;

const SStartIcon = styled.span`
  margin-left: -4px;
  margin-right: 8px;
`;

const SEndIcon = styled.span`
  margin-left: 8px;
  margin-right: -4px;
`;

const SButtonBase = styled(ButtonBase)`
  ${styles.root};
  ${props => styles[props.variant]}
  ${props => styles[`${props.variant}_${props.color}`]}
  ${props => styles[`${props.variant}_${props.size}`]}
  ${props => props.fullWidth && styles.fullWidth}
`;

Button.propTypes = {
  // The content of the button
  children: PropTypes.node,

  // Override style of component
  style: PropTypes.object,

  className: PropTypes.string,

  // The color of the component. Support those color
  color: PropTypes.oneOf(["default", "primary", "secondary"]),

  // True -> button disabled
  disabled: PropTypes.bool,

  // Element placed before the children
  startIcon: PropTypes.node,

  // Element placed after the children
  endIcon: PropTypes.node,

  // True -> button take full width of container
  fullWidth: PropTypes.bool,

  // Size of the button, medium is default
  size: PropTypes.oneOf(["small", "medium", "large"]),

  // The variant of the button, text is default
  variant: PropTypes.oneOf(["text", "outlined", "contained"])
};

export default Button;
