import React from 'react';
import { Outlet } from 'react-router-dom';

const MyAuthLayout = () => {
  return (
    <>
      <h3>Auth Layout</h3>
      <Outlet />
    </>
  );
};

export default MyAuthLayout;
