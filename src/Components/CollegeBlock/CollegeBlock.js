import React from "react";
import styled from "styled-components";

const CollegeBlockContainer = styled.div`
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
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-left: 130px;
  transform: rotate(34deg);
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  font-size: 30px;
  color: white;
`;

const CollegeBlock = () => {
  return (
    <CollegeBlockContainer>
      <Name>
        <H2>College</H2>
      </Name>
    </CollegeBlockContainer>
  );
};

export default CollegeBlock;
