import React from 'react';
import Header from '../components/Header/Header';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <StHeader>
        <Header />
      </StHeader>
      <StLayout>
        <div>
          <Outlet />
        </div>
      </StLayout>
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
  max-width: 1400px;
  min-width: 800px;
  margin: 2px auto;
`;
