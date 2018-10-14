import React from "react";
import { Route } from "react-router-dom";

import Main from "../Main/Main";
import ResumePage from "../ResumePage/ResumePage";
import SchoolPage from "../SchoolPage/SchoolPage";
import BlogPage from "../BlogPage/BlogPage";
import CollegePage from "../CollegePage/CollegePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import FamilyPage from "../FamilyPage/FamilyPage";

const Links = () => {
  return (
    <React.Fragment>
      {/* <Switch> */}
      <Route path="/" component={Main} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/school" component={SchoolPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/college" component={CollegePage} />
      <Route path="/project" component={ProjectPage} />
      <Route path="/family" component={FamilyPage} />
      {/* </Switch> */}
    </React.Fragment>
  );
};
export default Links;
// {
//   /* <Link to="/">a</Link>
//       <Link to="/family">a</Link>
//       <Link to="/resume">a</Link>
//       <Link to="/school">a</Link>
//       <Link to="/blog">a</Link>
//       <Link to="/college">a</Link>
//       <Link to="/project">a</Link> */
// }
