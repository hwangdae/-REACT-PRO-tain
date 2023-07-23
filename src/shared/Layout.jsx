import React from "react";
import Header from "../components/Header/Header";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      {/* <StHeader>
        <Header />
      </StHeader>     */}
      {/* <StLayout> */}
        <div>{children}</div>
      {/* </StLayout> */}
    </>
  );
};

export default Layout;
const StHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`;

const StLayout = styled.div`
  max-width: 800px;
  min-width: 800px;
  margin: 0px auto;
`;
