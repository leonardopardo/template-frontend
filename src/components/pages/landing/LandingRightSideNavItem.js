import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  Card,
  Modal,
  Nav,
  OverlayTrigger,
  Tooltip,
  NavDropdown
} from 'react-bootstrap';
import Login from 'components/authentication/simple/Login';
import Registration from 'components/authentication/simple/Registration';

const breakpoint = 'lg';

const LandingRightSideNavItem = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  return (
    <Nav navbar className="ms-auto">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="dashboardTooltip">Dashboard</Tooltip>}
          >
            <div>
              <FontAwesomeIcon
                icon="chart-pie"
                id="dashboardTooltip"
                className={`d-none d-${breakpoint}-inline-block`}
              />
            </div>
          </OverlayTrigger>
          <span className={`d-${breakpoint}-none`}>Dashboard</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/documentation/getting-started">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="dashboardTooltip">Documentation</Tooltip>}
          >
            <div>
              <FontAwesomeIcon
                icon="book"
                id="documentationTooltip"
                className={`d-none d-${breakpoint}-inline-block`}
              />
            </div>
          </OverlayTrigger>
          <span className={`d-${breakpoint}-none`}>Documentation</span>
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Login" align="end">
        <Card className="navbar-card-login shadow-none">
          <Card.Body className="fs--1 fw-normal p-4">
            <Login />
          </Card.Body>
        </Card>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="#!"
          onClick={() => setShowRegistrationModal(!showRegistrationModal)}
        >
          Register
        </Nav.Link>
        <Modal
          show={showRegistrationModal}
          centered
          onHide={() => setShowRegistrationModal(false)}
        >
          <Modal.Body className="p-0">
            <Card>
              <Card.Body className="fs--1 fw-normal p-4">
                <Registration />
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </Nav.Item>
    </Nav>
  );
};

export default LandingRightSideNavItem;
