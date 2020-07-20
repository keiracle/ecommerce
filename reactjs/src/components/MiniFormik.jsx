import React from "react";

const MiniFormik = props => {
  const [state, setState] = React.useState({ username: "", password: "" });

  return props.children({ ...state });
};

const Using = props => {
  return (
    <div>
      <MiniFormik>
        {state => <p>{JSON.stringify(state, null, 2)}</p>}
      </MiniFormik>
    </div>
  );
};

export default Using;
