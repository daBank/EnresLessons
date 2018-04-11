import React, { Component } from "react";
import ReactDOM from "react-dom";

import TaskAppContainer from "./TaskAppContainer";

if (document.getElementById("example")) {
  ReactDOM.render(<TaskAppContainer />, document.getElementById("example"));
}