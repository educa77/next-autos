import React from "react";
import styled from "styled-components";

function index() {
  return (
    <>
      <PageTitleDetail>Elija un modelo</PageTitleDetail>
    </>
  );
}

export default index;

const PageTitleDetail = styled.h2`
  font-stretch: normal;
  font-style: normal;
  color: #373737;
  font-family: "Montserrat";
  padding: 100px;
  font-size: 40px;
  color: #eb0a1e;
`;
