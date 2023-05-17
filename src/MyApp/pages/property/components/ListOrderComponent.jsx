import React from 'react';
import { Card, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Flex from 'components/common/Flex';

const ListOrderComponent = () => {
  const [isList] = React.useState(true);
  const [isGrid] = React.useState(false);
  const [isAsc, setIsAsc] = React.useState(true);
  const [setSortBy] = React.useState('price');
  const [itemsPerPage, setItemsPerPage] = React.useState(2);
  const [totalItems] = React.useState(0);
  const [from] = React.useState(0);
  const [to] = React.useState(0);
  const [setProductPerPage] = React.useState(0);

  return (
    <>
      <Card className="mb-1">
        <Card.Body>
          <Row className="flex-between-center">
            <Col
              sm="auto"
              as={Flex}
              alignItems="center"
              className="mb-2 mb-sm-0"
            >
              <Form.Select
                size="sm"
                value={itemsPerPage}
                onChange={({ target }) => {
                  setItemsPerPage(target.value);
                  setProductPerPage(target.value);
                }}
                style={{ maxWidth: '4.875rem' }}
              >
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={totalItems}>todo</option>
              </Form.Select>
              <h6 className="mb-0 ms-2">
                Mostrando {from}-{to} de {totalItems} Publicaciones
              </h6>
            </Col>
            <Col sm="auto">
              <Row className="gx-2 align-items-center">
                <Col xs="auto">
                  <Form as={Row} className="gx-2">
                    <Col xs="auto">
                      <small>Ordernar por:</small>
                    </Col>
                    <Col xs="auto">
                      <InputGroup size="sm">
                        <Form.Select
                          className="pe-5"
                          defaultValue="price"
                          onChange={({ target }) => setSortBy(target.value)}
                        >
                          <option value="price">Precio</option>
                          <option value="rating">Más Vistas</option>
                          <option value="review">Más Consultadas</option>
                        </Form.Select>
                        <InputGroup.Text
                          as={Button}
                          variant="secondary"
                          onClick={() => setIsAsc(!isAsc)}
                        >
                          <FontAwesomeIcon
                            icon={isAsc ? 'sort-amount-up' : 'sort-amount-down'}
                          />
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Form>
                </Col>
                <Col xs="auto" className="pe-0">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>Product {isList ? 'Grid' : 'List'}</Tooltip>
                    }
                  >
                    <Link
                      to={`/e-commerce/product/product-${
                        isList ? 'grid' : 'list'
                      }`}
                      className="text-600 px-1"
                    >
                      <FontAwesomeIcon
                        icon={classNames({ th: isList, 'list-ul': isGrid })}
                      />
                    </Link>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListOrderComponent;
