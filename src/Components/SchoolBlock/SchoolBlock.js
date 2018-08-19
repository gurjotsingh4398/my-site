import React from "react";
import styled from "styled-components";

const SchoolBlockContainer = styled.div`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  width: 400px;
  height: 380px;
  transform: rotate(-34deg);
  left: 336px;
  top: 491px;
  z-index: 2;
  transition: all 0.5s;
  &:hover {
    border: 15px solid rgba(255, 255, 255, 0.1);
  }
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 0px 0px 150px 150px;
  transform: rotate(34deg);
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  font-size: 30px;
  color: white;
`;

const SchoolBlock = () => {
  return (
    <SchoolBlockContainer>
      <Name>
        <H2>School</H2>
      </Name>
    </SchoolBlockContainer>
  );
};

export default SchoolBlock;
