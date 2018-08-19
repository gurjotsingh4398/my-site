import React from "react";
import styled from "styled-components";

const ResumeBlockContainer = styled.div`
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
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 250px 0px 0px 150px;
  transform: rotate(34deg);
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  color: white;
`;

const ResumeBlock = () => {
  return (
    <ResumeBlockContainer>
      <Name>
        <H2>Resume</H2>
      </Name>
    </ResumeBlockContainer>
  );
};

export default ResumeBlock;
