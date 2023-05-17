import React from 'react';
import GreetingCard from 'components/dashboards/e-commerce/greetings/GreetingCard';
import { notifications, saleItems } from 'data/dashboard/ecom';
import EcomStat from 'components/dashboards/e-commerce/EcomStat';
import { Row, Col } from 'react-bootstrap';

const PrincipalPage = () => {
  return (
    <>
      <Row className="">
        <Col xl={12}>
          <Row>
            <Col>
              <GreetingCard notifications={notifications} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <EcomStat data={saleItems} className="mt-3" />
            </Col>
          </Row>
        </Col>
        <Col xl={4}></Col>
      </Row>
    </>
  );
};

export default PrincipalPage;
