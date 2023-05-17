import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeedDropdown = () => {
  return (
    <Dropdown className="font-sans-serif btn-reveal-trigger">
      <Dropdown.Toggle variant="link" size="sm" className="px-1 text-600">
        <FontAwesomeIcon icon="ellipsis-h" />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        <Dropdown.Item href="#!">View</Dropdown.Item>
        <Dropdown.Item href="#!">Edit</Dropdown.Item>
        <Dropdown.Item href="#!">Report</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#!" className="text-warning">
          Archive
        </Dropdown.Item>
        <Dropdown.Item href="#!" className="text-danger">
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

FeedDropdown.propTypes = {};

export default FeedDropdown;
