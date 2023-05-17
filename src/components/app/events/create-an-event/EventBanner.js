import React from 'react';
import { Card, Form, Image } from 'react-bootstrap';
import eventBanner from 'assets/img/generic/13.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventBanner = () => {
  return (
    <Card className="cover-image">
      <Image src={eventBanner} alt="..." className="card-img-top" />
      <Form.Group controlId="formFile">
        <Form.Label className="cover-image-file-input">
          <FontAwesomeIcon icon="camera" className="me-2" />
          <span>Default file input example</span>
        </Form.Label>
        <Form.Control type="file" className="d-none" />
      </Form.Group>
    </Card>
  );
};

export default EventBanner;
