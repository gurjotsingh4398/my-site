import React, { Component, Fragment } from "react";
import styled from "styled-components";

import img from "../../images/bg.jpg";
import NameBlock from "../NameBlock/NameBlock";
import ResumeBlock from "../ResumeBlock/ResumeBlock";
import CollegeBlock from "../CollegeBlock/CollegeBlock";
import SchoolBlock from "../SchoolBlock/SchoolBlock";
import BlogBlock from "../BlogBlock.js/BlogBlock";
import ProjectBlock from "../ProjectBlock/ProjectBlock";
import FamilyBlock from "../FamilyBlock.js/FamilyBlock";

const Background = styled.div`
  background-image: url(${img});
  position: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Background />
        <Overlay />
        <NameBlock />
        <ResumeBlock />
        <CollegeBlock />
        <SchoolBlock />
        <BlogBlock />
        <ProjectBlock />
        <FamilyBlock />
      </Fragment>
    );
  }
}

export default Main;
