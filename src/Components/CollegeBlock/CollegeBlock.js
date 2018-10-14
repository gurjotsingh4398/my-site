import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CollegeBlockContainer = styled.div`
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
    left: 543px;
    top: 84px;
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
    padding-left: 130px;
    transform: rotate(34deg);
  }
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  color: white;

  ::before {
    content: "02";
    font-size: 15px;
    position: absolute;
    top: 6px;
    left: 10px;
  }

  @media (min-width: 800px) {
    margin: 0px 0px 10px 0px;
    font-size: 30px;
    color: white;

    ::before {
      top: 155px;
      left: 105px;
    }
  }
`;

const CollegeBlock = () => {
  return (
    <Link to="/college">
      <CollegeBlockContainer>
        <Name>
          <H2>College</H2>
        </Name>
      </CollegeBlockContainer>
    </Link>
  );
};

export default CollegeBlock;
