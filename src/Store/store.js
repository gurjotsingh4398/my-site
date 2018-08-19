import React, { Component } from "react";
import Store from "./context";

class CentralStore extends Component {
  render() {
    return <Store.Provider>{this.props.children}</Store.Provider>;
  }
}

export default CentralStore;
