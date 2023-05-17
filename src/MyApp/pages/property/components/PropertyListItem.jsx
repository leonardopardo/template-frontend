import IconButton from "components/common/IconButton";
import React from "react";
import {
  Card,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
} from "react-bootstrap";
import { FiActivity, FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PropertyListItem = () => {
  const [isPublished] = React.useState(true);

  return (
    <>
      <Card className="mt-2">
        <Card.Body>
          <Row>
            <Col xs={12} sm={1}>
              <Image src="https://via.placeholder.com/100" fluid />
            </Col>
            <Col xs={12} sm={4}>
              <span className="d-block fw-bold">
                Casa tipo PH Villa Lugano, Capital Federal
              </span>
              <span className="d-block small">
                Operación: <strong>Venta</strong> Precio:
                <strong> USD 79000.-</strong>
              </span>
              <span className="d-block small mt-3">
                Dirección: <strong>Montiel 3833, Villa Lugano</strong>
              </span>
            </Col>
            <Col xs={12} sm={7}>
              <Row className="mb-3">
                <Col className="">
                  <Row>
                    <Col>
                      <span className="small">
                        <FiActivity /> <strong>Actividad</strong>
                      </span>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <span className="small">
                        Estado: <strong>Publicado</strong>
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="border-end">
                  <span className="d-block small">
                    Visualizaciones{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip id={`tooltip-top`} className="small">
                          Visualizaciones de la propiedad en el sitio web en el
                          último mes.
                        </Tooltip>
                      }
                    >
                      <span>
                        <FiInfo />
                      </span>
                    </OverlayTrigger>
                  </span>
                  <span className="d-block">1400</span>
                </Col>
                <Col className="border-end">
                  <span className="d-block small">
                    Interesados{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip id={`tooltip-top`} className="small">
                          Interesados de la propiedad en el sitio web en el
                          último mes.
                        </Tooltip>
                      }
                    >
                      <span>
                        <FiInfo />
                      </span>
                    </OverlayTrigger>
                  </span>
                  <span className="d-block">600</span>
                </Col>
                <Col>
                  <span className="d-block small">
                    Consultas{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip id={`tooltip-top`} className="small">
                          Consultas de la propiedad en el sitio web en el último
                          mes.
                        </Tooltip>
                      }
                    >
                      <span>
                        <FiInfo />
                      </span>
                    </OverlayTrigger>
                  </span>
                  <span className="d-block">
                    134{" "}
                    <Link className="small" to="/">
                      Ver consultas
                    </Link>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="small">
                    Calidad <span className="fw-bolder">{90}%</span>
                  </span>
                  <ProgressBar
                    style={{ height: 10 }}
                    className="shadow-none rounded-3"
                  >
                    <ProgressBar
                      variant="primary"
                      now={60}
                      className="border-end border-2 border-white"
                    />

                    <ProgressBar
                      variant="info"
                      now={20}
                      className="border-end border-2 border-white"
                    />

                    <ProgressBar
                      variant="success"
                      now={10}
                      className="border-end border-2 border-white"
                    />
                  </ProgressBar>
                  <Col
                    xs="auto"
                    as="flex"
                    alignItems="center"
                    className="pe-2 small"
                  >
                    <FontAwesomeIcon
                      icon="circle"
                      className={`text-primary fs--2 me-2`}
                    />
                    <span>Información</span>
                  </Col>

                  <Col
                    xs="auto"
                    as="flex"
                    alignItems="center"
                    className="pe-2 small"
                  >
                    <FontAwesomeIcon
                      icon="circle"
                      className={`text-info fs--2 me-2`}
                    />
                    <span>Multimedia</span>
                  </Col>

                  <Col
                    xs="auto"
                    as="flex"
                    alignItems="center"
                    className="pe-2 small"
                  >
                    <FontAwesomeIcon
                      icon="circle"
                      className={`text-success fs--2 me-2`}
                    />
                    <span>Características</span>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="border-top">
          <Row>
            <Col className="m-0">
              <span className="m-1">
                <small className="text-muted">
                  <strong>ID:</strong> 3345433
                </small>
              </span>
              <span className="m-1">
                <small className="text-muted">
                  <strong>Creado:</strong> Last updated 3 mins ago
                </small>
              </span>
            </Col>
            <Col className="d-flex align-items-end justify-content-end m-0">
              {!isPublished ? (
                <IconButton
                  className="m-1"
                  size="sm"
                  variant="light"
                  icon="chevron-right"
                />
              ) : (
                <IconButton className="m-1" size="sm" variant="light" icon="">
                  <strong>II</strong>
                </IconButton>
              )}

              <IconButton
                className="m-1"
                size="sm"
                variant="light"
                icon="edit"
              />

              <IconButton
                className="m-1"
                size="sm"
                variant="light"
                icon="external-link-alt"
              />

              <IconButton
                className="m-1"
                size="sm"
                variant="danger"
                icon="trash-alt"
              />
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default PropertyListItem;
