import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FamilyBlockContainer = styled.div`
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
    left: 1086px;
    top: 175px;
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
    padding: 0px 0px 0px 100px;
    transform: rotate(34deg);
  }
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  color: white;

  ::before {
    content: "06";
    font-size: 15px;
    position: absolute;
    top: 6px;
    left: 10px;
  }

  @media (min-width: 800px) {
    font-size: 30px;

    ::before {
      top: 154px;
      left: 77px;
    }
  }
`;

const FamilyBlock = () => {
  return (
    <Link to="/family">
      <FamilyBlockContainer>
        <Name>
          <H2>Family</H2>
        </Name>
      </FamilyBlockContainer>
    </Link>
  );
};

export default FamilyBlock;
