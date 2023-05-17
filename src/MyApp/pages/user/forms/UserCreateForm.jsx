import React from "react";
import { useForm } from "react-hook-form";
import { FiUserCheck, FiMail, FiLock, FiHome } from "react-icons/fi";
import { Form, Row, Col, Button } from "react-bootstrap";
import UserCreateValidations from "../validations/UserCreateValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import MyButtonSpinner from "MyApp/my-components/MyButtonSpinner";

const UserCreateForm = () => {
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserCreateValidations),
  });

  const registerFormSubmit = async (data) => {
    setLoading(true);
    try {
      reset();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const isValid = (value) => {
    return value ? "is-invalid" : "";
  };

  return (
    <>
      <Form onSubmit={handleSubmit(registerFormSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>
            <FiUserCheck /> Nombre
          </Form.Label>
          <Form.Control
            {...register("name")}
            type="text"
            placeholder="Ingresa tu nombre"
            size="md"
            className={isValid(errors.name)}
          />
          <p className="text-danger small">
            {errors.name && errors.name.message}
          </p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            {...register("lastname")}
            type="text"
            placeholder="Ingresa tu Apellido"
            size="md"
            className={isValid(errors.lastname)}
          />
          <p className="text-danger small">
            {errors.lastname && errors.lastname.message}
          </p>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                {...register("identity")}
                type="text"
                placeholder="Ingresa tu DNI"
                size="md"
                className={isValid(errors.identity)}
              />
              <p className="text-danger small">
                {errors.identity && errors.identity.message}
              </p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                {...register("phone")}
                type="text"
                placeholder="Ingresa tu teléfono"
                size="md"
                className={isValid(errors.phone)}
              />
              <p className="text-danger small">
                {errors.phone && errors.phone.message}
              </p>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>
            <FiMail /> Email <small>(1)</small>
          </Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            placeholder="Ingresa tu email"
            size="md"
            className={isValid(errors.email)}
          />
          <p className="text-danger small">
            {errors.email && errors.email.message}
          </p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <FiHome /> Sucursal
          </Form.Label>
          <Form.Select
            {...register("sucursal")}
            size="md"
            className={isValid(errors.sucursal)}
          >
            <option value="0">--Seleccionar Sucursal --</option>
            <option value="1">Sucursal 1</option>
            <option value="2">Sucursal 2</option>
            <option value="3">Sucursal 3</option>
            <option value="4">Todas</option>
          </Form.Select>
          <p className="text-danger small">
            {errors.sucursal && errors.sucursal.message}
          </p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <FiLock /> Permisos <small>(2)</small>
          </Form.Label>
          <Form.Select
            {...register("permiso")}
            size="md"
            className={isValid(errors.permiso)}
          >
            <option value="0">-- Seleccionar Permisos-- </option>
            <option value="1">Operador</option>
            <option value="3">Administrador</option>
          </Form.Select>
          <p className="text-danger small">
            {errors.permiso && errors.permiso.message}
          </p>
          <Form.Text className="text-muted">
            <small>(1)</small> Te enviaremos un mail, por favor revisalo. <br />
            <small>(2)</small> Puede modificar los permisos luego.
          </Form.Text>
        </Form.Group>

        <div className="d-grid gap-2 mb-2">
          {!loading ? (
            <Button variant="primary" type="submit" size="md">
              Registrar Usuario
            </Button>
          ) : (
            <MyButtonSpinner />
          )}
        </div>
      </Form>
    </>
  );
};
export default UserCreateForm;
