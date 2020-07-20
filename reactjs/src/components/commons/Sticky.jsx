import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Sticky = props => {
  const [state, setState] = useState({
    height: 0,
    width: 0,
    stuckBottom: false,
    stuckLeft: false,
    stuckRight: false,
    stuckTop: false
  });

  const stickyDiv = useRef(null);
  let frameId = 0;

  const handleScroll = () => {
    const { sides } = props;
    const stickyDivCurrent = stickyDiv.current || null;
    const scrollTarget = props.scrollTarget || window;
    frameId = 0;

    if (!stickyDivCurrent) {
      return;
    }

    //scroll target is the window
    let scrollRect = {
      height: scrollTarget.innerHeight,
      width: scrollTarget.innerWidth,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      x: scrollTarget.scrollX,
      y: scrollTarget.scrollY
    };

    //scroll target is not the window
    if (scrollTarget.getBoundingClientRect) {
      scrollRect = scrollTarget.getBoundingClientRect();
    }

    let stickyRect = stickyDivCurrent.getBoundingClientRect();

    if (!state.height || !state.width) {
      setState({
        ...state,
        height: stickyRect.height,
        width: stickyRect.height
      });
    }

    stickyRect = {
      height: state.height || stickyRect.height,
      width: state.width || stickyRect.width,
      x: stickyRect.x,
      y: stickyRect.y
    };

    if (typeof sides.top === "number") {
      if (stickyRect.y < scrollRect.top + sides.top) {
        setState({ ...state, stuckTop: true });
      } else {
        setState({ ...state, stuckTop: false });
      }
    }

    if (typeof sides.bottom === "number") {
      if (
        stickyRect.y + stickyRect.height >
        scrollRect.height + scrollRect.top - sides.bottom
      ) {
        setState({ ...state, stuckBottom: true });
      } else {
        setState({ ...state, stuckBottom: false });
      }
    }

    if (typeof sides.left === "number") {
      if (stickyRect.x < scrollRect.left + sides.left) {
        setState({ ...state, stuckLeft: true });
      } else {
        setState({ ...state, stuckLeft: false });
      }
    }

    if (typeof sides.right === "number") {
      if (
        stickyRect.x + stickyRect.width >
        scrollRect.width + scrollRect.left - sides.right
      ) {
        setState({ ...state, stuckRight: true });
      } else {
        setState({ ...state, stuckRight: false });
      }
    }
  };

  const debouncedScroll = () => {
    if (!frameId) {
      const _frameId = requestAnimationFrame(handleScroll);
      frameId = _frameId;
    }
  };

  const addEvents = () => {
    //if component doesnt get a scrollTarget, use window instead
    const scrollTarget = props.scrollTarget || window;

    if (scrollTarget && stickyDiv.current) {
      scrollTarget.addEventListener("scroll", debouncedScroll);
    }
  };

  const removeEvents = () => {
    const scrollTarget = props.scrollTarget || window;

    if (scrollTarget) {
      scrollTarget.removeEventListener("scroll", debouncedScroll);
    }

    if (frameId) {
      console.log("cancel animation");
      cancelAnimationFrame(frameId);
    }
  };

  useEffect(() => {
    addEvents();
    return removeEvents;
  });

  const { children } = props;
  const { stuckTop, stuckBottom, stuckRight, stuckLeft } = state;

  const stickyModifiers = [];

  if (stuckBottom) {
    stickyModifiers.push("stuck-bottom");
  }

  if (stuckLeft) {
    stickyModifiers.push("stuck-left");
  }

  if (stuckRight) {
    stickyModifiers.push("stuck-right");
  }

  if (stuckTop) {
    stickyModifiers.push("stuck-top");
  }

  const childrenWithStuckProps = React.Children.map(children, child => {
    const childModifiers = (child.props && child.props.modifiers) || [];

    return React.cloneElement(child, {
      modifiers: [...childModifiers, ...stickyModifiers]
    });
  });

  return (
    <div ref={stickyDiv} style={props.style}>
      {childrenWithStuckProps}
    </div>
  );
};

Sticky.defaultProps = {
  scrollTarget: null,
  sides: {
    top: 0
  }
};

Sticky.propsTypes = {
  /** Pass in a React component, and it will receive `stuckBottom`, `stuckLeft`, `stuckRight`, and/or `stuckTop` modifiers */
  children: PropTypes.node.isRequired,
  /** If you have an internally scrolling component, pass its ref callback to watch for scroll events */
  scrollTarget: PropTypes.object,
  /** These offsets determine how far from the edge of the page an element must be to count as 'stuck' */
  sides: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number
  })
};

export default Sticky;
