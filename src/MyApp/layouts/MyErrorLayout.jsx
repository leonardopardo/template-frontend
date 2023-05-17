import React from 'react';
import { Outlet } from 'react-router-dom';

const MyErrorLayout = () => {
  return (
    <>
      <h3>Error Layout</h3>
      <Outlet />
    </>
  );
};

export default MyErrorLayout;
