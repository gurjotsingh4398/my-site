import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlogBlockContainer = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  width: 100%;
  height: 5rem;
  z-index: 2;
  transition: all 0.5s;

  @media (min-width: 800px) {
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
  }
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 20px 20px 20px 40px;

  @media (min-width: 800px) {
    display: table-cell;
    vertical-align: middle;
    padding: 0px 0px 050px 160px;
    transform: rotate(34deg);
  }
`;

const H2 = styled.h2`
  margin: 0px 0px 10px 0px;
  color: white;

  ::before {
    content: "04";
    font-size: 15px;
    position: absolute;
    top: 6px;
    left: 10px;
  }

  @media (min-width: 800px) {
    font-size: 30px;

    ::before {
      top: 130px;
      left: 135px;
    }
  }
`;

const BlogBlock = () => {
  return (
    <Link to="/blog">
      <BlogBlockContainer>
        <Name>
          <H2>Blog</H2>
        </Name>
      </BlogBlockContainer>
    </Link>
  );
};

export default BlogBlock;
