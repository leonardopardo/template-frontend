import React from "react";
import { Spinner } from "react-bootstrap";
const MyLoadingComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status" variant="primary" className="mx-2" >
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
      <span> Cargando...</span>
    </div>
  );
};
export default MyLoadingComponent;
