import React, { Component } from "react";

import CentralStore from "./Store/store";
import Main from "./Components/Main/Main";

class App extends Component {
  render() {
    return (
      <CentralStore>
        <Main />
      </CentralStore>
    );
  }
}

export default App;
