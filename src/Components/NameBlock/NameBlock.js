import React, { Component } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const NameBlockContainer = styled.div`
  position: absolute;
  display: table;
  border: 1px solid rgba(255, 255, 255, 0.4);
  width: 650px;
  height: 650px;
  margin: 0;
  transform: rotate(-34deg);
  left: -180px;
  z-index: 2;
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-left: 250px;
  transform: rotate(34deg);
  h1 {
    margin: 0px 0px 10px 0px;
    color: white;
  }
  h2 {
    margin: 0;
    color: white;
  }
  h1 > span {
    display: block;
    font-size: 20px;
  }
`;

// const H1 = styled.h1`
//   margin: 0px 0px 10px 0px;
//   color: white;
// `;

// const Span = styled.span`
//   display: block;
//   font-size: 20px;
// `;

// const H2 = styled.h2`
//   margin: 0;
//   color: white;
//`;

{
  /* <H1>
  <Span>Hi I'm</Span> GURJOT SINGH
          </H1>
  <H2>Web Developer</H2> */
}

class NameBlock extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "<h1><span>Hi I'm</span>GURJOT SINGH</h1><h2>Web Developer</h2>"
      ],
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
      <NameBlockContainer>
        <Name>
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el;
            }}
          />
        </Name>
      </NameBlockContainer>
    );
  }
}

export default NameBlock;
