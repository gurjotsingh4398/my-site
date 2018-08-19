import React from "react";
import styled from "styled-components";

const ProjectBlockContainer = styled.div`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  width: 400px;
  height: 380px;
  transform: rotate(-34deg);
  left: 874px;
  top: -139px;
  transition: all 0.5s;
  z-index: 2;
  &:hover {
    border: 15px solid rgba(255, 255, 255, 0.1);
  }
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 100px 0px 0px 130px;
  transform: rotate(34deg);
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  font-size: 30px;
  color: white;
`;

const ProjectBlock = () => {
  return (
    <ProjectBlockContainer>
      <Name>
        <H2>Project</H2>
      </Name>
    </ProjectBlockContainer>
  );
};

export default ProjectBlock;
