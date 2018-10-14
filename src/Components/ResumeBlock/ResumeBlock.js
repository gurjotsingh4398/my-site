import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ResumeBlockContainer = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  width: 100%;
  height: 5rem;
  transition: all 0.5s;
  z-index: 2;

  @media (min-width: 800px) {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.4);
    display: table;
    width: 400px;
    height: 380px;
    transform: rotate(-34deg);
    left: 331px;
    top: -230px;
    transition: all 0.5s;
    z-index: 2;
    &:hover {
      border: 15px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 20px 20px 20px 40px;

  @media (min-width: 800px) {
    display: table-cell;
    vertical-align: middle;
    padding: 250px 0px 0px 150px;
    transform: rotate(34deg);
  }
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  color: white;

  ::before {
    content: "01";
    font-size: 15px;
    position: absolute;
    top: 6px;
    left: 10px;
  }

  @media (min-width: 800px) {
    font-size: 30px;

    ::before {
      top: 280px;
      left: 128px;
    }
  }
`;

const ResumeBlock = () => {
  return (
    <Link to="/resume">
      <ResumeBlockContainer>
        <Name>
          <H2>Resume</H2>
        </Name>
      </ResumeBlockContainer>
    </Link>
  );
};

export default ResumeBlock;
