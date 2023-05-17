import React from "react";
import { Form, Button } from "react-bootstrap";
import MyButtonSpinner from "MyApp/my-components/MyButtonSpinner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserUpdateValidations from "../validations/UserUpdateValidations";

const UserUpdateForm = ({ user }) => {
  const [loading, setLoading] = React.useState(false);

  const isValid = (value) => {
    return value ? "is-invalid" : "";
  };

  const {
    register: updateUser,
    handleSubmit: handleSubmitUpdateUser,
    formState: { errors },
    reset: updateFormReset,
  } = useForm({
    resolver: yupResolver(UserUpdateValidations),
  });

  const submitUpdateUser = async (data) => {
    setLoading(true);
    try {
      updateFormReset();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmitUpdateUser(submitUpdateUser)}>
      <Form.Group>
        <Form.Label>
          <small>Nombre</small>
        </Form.Label>
        <Form.Control
          {...updateUser("name")}
          type="text"
          placeholder="Ingresa el nombre"
          className={isValid(errors.name)}
          defaultValue={user.name}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          <small>Apellido</small>
        </Form.Label>
        <Form.Control
          {...updateUser("lastname")}
          type="text"
          placeholder="Ingresa el apellido"
          className={isValid(errors.name)}
          defaultValue={user.lastname}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          <small>DNI</small>
        </Form.Label>
        <Form.Control
          {...updateUser("identity")}
          type="text"
          placeholder="Ingresa el documento"
          className={isValid(errors.identity)}
          defaultValue={user.identity}
        />
        <p className="text-danger small">
          {errors.identity && errors.identity.message}
        </p>
      </Form.Group>

      <Form.Group>
        <Form.Label>
          <small>Email</small>
        </Form.Label>
        <Form.Control
          {...updateUser("email")}
          type="text"
          placeholder="Ingresa el email"
          className={isValid(errors.email)}
          defaultValue={user.email}
        />
        <p className="text-danger small">
          {errors.email && errors.email.message}
        </p>
      </Form.Group>

      <Form.Group>
        <Form.Label>
          <small>Teléfono</small>
        </Form.Label>
        <Form.Control
          {...updateUser("phone")}
          type="text"
          className={isValid(errors.phone)}
          defaultValue={user.phone}
        />
        <p className="text-danger small">
          {errors.phone && errors.phone.message}
        </p>
      </Form.Group>

      <div className="d-grid gap-2 mt-4">
        {!loading ? (
          <Button variant="primary" type="submit" size="md">
            Actualizar Usuario
          </Button>
        ) : (
          <MyButtonSpinner />
        )}
      </div>
    </Form>
  );
};
export default UserUpdateForm;
