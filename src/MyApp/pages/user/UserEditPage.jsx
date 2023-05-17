import React from "react";
import {
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import PageHeader from "MyApp/components/common/PageHeader";
import UserUpdateForm from "./forms/UserUpdateForm";
import UserUpdatePasswordForm from "./forms/UserUpdatePasswordForm";
import Background from "MyApp/components/common/Background";
import corner4 from "assets/img/illustrations/authentication-corner.png";

const UserEditPage = () => {
  const user = {
    id: 1,
    name: "Anna",
    lastname: "Smith",
    email: "anna@example.com",
    identity: "12345678",
    phone: 113214971,
    created_at: "2021-01-01",
    sucursal: ["Sucursal 1", "Sucursal 2"],
    role: "Administrador",
    status: "Activo",
    fullname: ({ name, lastname }) => {
      return name + " " + lastname;
    },
  };

  return (
    <>
      <PageHeader
        title={user.fullname(user)}
        description="Edite los datos del usuario y sus permisos en el sistema."
        className="mb-3"
      ></PageHeader>
      <Row className="g-3">
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card>
            <Card.Header className="border-bottom">
              <Card.Title>Ficha Personal</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Información Personales de{" "}
                <span className="text-decoration-underline fw-bold">
                  {user.fullname(user)}
                </span>
              </Card.Text>
              <Card className="mb-3" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Background
                  image={corner4}
                  className="bg-card"
                  style={{
                    borderTopRightRadius: "0rem",
                    borderBottomRightRadius: "0rem",
                  }}
                />
                <Card.Body className="p-0">
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={5}>
                      <img
                        src="/static/media/3.b3477e97.jpg"
                        alt="user"
                        className="img-fluid rounded my-3 ps-3"
                      />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={7}>
                      <ListGroup
                        variant="flush"
                        className="fw-light small my-3"
                      >
                        <ListGroupItem className="bg-transparent">
                          <strong>Nombre:</strong> {user.name}
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent">
                          <strong>Apellido:</strong> {user.lastname}
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent">
                          <strong>DNI:</strong> {user.identity}
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent">
                          <strong>Email:</strong> {user.email}
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent">
                          <strong>Teléfono:</strong> {user.phone}
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent">
                          <strong>Fecha de Creación:</strong> {user.created_at}
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row>
                <Col>
                  <UserUpdateForm user={user} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Header className="border-bottom">
              <Card.Title>Cambiar Contraseña</Card.Title>
            </Card.Header>
            <Card.Body>
              <UserUpdatePasswordForm user={user} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Roles y Permisos</Card.Title>
              <Card.Text>
                Asigne los roles y permisos de{" "}
                <span className="text-decoration-underline fw-bold">
                  {user.fullname(user)}
                </span>
              </Card.Text>
              <Button variant="primary" className="mb-3">
                Nuevo Permiso
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UserEditPage;
