import React, { useState, useEffect } from "react";
import { Icon } from "antd";

const StuffContext = React.createContext();

const StuffProvider = props => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {}, []);

  return (
    <StuffContext.Provider value={{ isFetching, setIsFetching }}>
      {props.children}
    </StuffContext.Provider>
  );
};

export { StuffProvider, StuffContext };
