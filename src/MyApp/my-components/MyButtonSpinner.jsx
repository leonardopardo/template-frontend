import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const MyButtonSpinner = props => {
  return (
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Espere...</span>
      </Button>{' '}
    </>
  );
};

export default MyButtonSpinner;
