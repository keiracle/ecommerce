import React, { useEffect } from "react";

const withLogProps = WrappedComponent => {
  return function(props) {
    withLogProps.displayName = `WithLogProps(${getDisplayName(
      WrappedComponent
    )})`;

    useEffect(() => {
      console.log("Current Props: ", props);
    }, [props]);

    return <WrappedComponent {...props} />;
  };
};

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withLogProps;
