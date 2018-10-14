import React from "react";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";

// import kute from "kute.js";

const rotate = keyframes`
  from {
  }

  to {
    transform: rotate(0deg);
    width:75%;
    height:100%;
    top:0;
    left:25%
  }
`;

const ProjectContainer = styled.div`
  position: absolute;
  background-color: white;
  z-index: 100;
  width: 400px;
  height: 380px;
  transform: rotate(-34deg);
  left: 874px;
  top: -139px;
  animation: ${rotate} 1s;
  animation-fill-mode: forwards;
`;

export default () => {
  return (
    <ProjectContainer>
      <h1>Project page</h1>
      <Link to="/">
        <button>close</button>
      </Link>
    </ProjectContainer>
  );
};
