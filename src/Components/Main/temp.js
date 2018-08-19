import React, { Component } from "react";
import styled from "styled-components";
import Typed from "typed.js";

// const Type = styled.div`
//   background: bl;
//   height: 100vh;
// `;

class Main extends Component {
  componentDidMount() {
    const strings = [
      "Some <i>strings</i> are slanted",
      "Some <strong>strings</strong> are bold",
      "HTML characters &times; &copy;"
    ];

    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div>
        <h1>Typed.js</h1>
        <div className="type-wrap">
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
        <button onClick={() => this.typed.toggle()}>Toggle</button>
        <button onClick={() => this.typed.start()}>Start</button>
        <button onClick={() => this.typed.stop()}>Stop</button>
        <button onClick={() => this.typed.reset()}>Reset</button>
        <button onClick={() => this.typed.destroy()}>Destroy</button>
      </div>
    );
  }
}

export default Main;
