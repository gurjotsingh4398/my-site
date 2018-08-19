import React from "react";
import styled from "styled-components";

const BlogBlockContainer = styled.div`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  width: 400px;
  height: 380px;
  transform: rotate(-34deg);
  left: 755px;
  top: 399px;
  z-index: 2;
  transition: all 0.5s;
  &:hover {
    border: 15px solid rgba(255, 255, 255, 0.1);
  }
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 0px 0px 050px 160px;
  transform: rotate(34deg);
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  font-size: 30px;
  color: white;
`;

const BlogBlock = () => {
  return (
    <BlogBlockContainer>
      <Name>
        <H2>Blog</H2>
      </Name>
    </BlogBlockContainer>
  );
};

export default BlogBlock;
