import React, { Component } from "react";
import "./css/OuterContainer.css";
import Notification from "./commons/Notification";

export default class OuterContainer extends Component {
  render() {
    return (
      <div className="hoveringWorkspaceOuterContainer">
        <img
          id="hoveringWorkspaceOne"
          className="hoveringWorkspaceCommon"
          src="/images/hoverOne.png"
          alt=""
        ></img>
        <img
          id="hoveringWorkspaceTwo"
          className="hoveringWorkspaceCommon"
          src="/images/hoverTwo.png"
          alt=""
        ></img>
        <img
          id="hoveringWorkspaceThree"
          className="hoveringWorkspaceCommon"
          src="/images/hoverThree.png"
          alt=""
        ></img>
      </div>
    );
  }
}
