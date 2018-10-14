import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import CentralStore from "./Store/store";
import LinkComp from "./Components/Links/Links";

class App extends Component {
  render() {
    return (
      <Router>
        <CentralStore>
          <LinkComp />
        </CentralStore>
      </Router>
    );
  }
}

export default App;
