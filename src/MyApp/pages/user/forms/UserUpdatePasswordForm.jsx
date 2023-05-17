import React from "react";
import { Form, Button } from "react-bootstrap";
import MyButtonSpinner from "MyApp/my-components/MyButtonSpinner";
import UserUpdatePasswordValidations from "../validations/UserUpdatePasswordValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UserUpdatePasswordForm = ({ user }) => {
  const [loading, setLoading] = React.useState(false);

  const isValid = (value) => {
    return value ? "is-invalid" : "";
  };

  const {
    register: updatePass,
    handleSubmit: handleSubmitPass,
    formState: { errors },
    reset: passwordReset,
  } = useForm({
    resolver: yupResolver(UserUpdatePasswordValidations),
  });

  const submitPass = async (data) => {
    setLoading(true);
    try {
      passwordReset();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmitPass(submitPass)}>
        <Form.Control {...updatePass("id")} type="hidden" value={user.id} />
        <Form.Group>
          <Form.Label>
            <small>Contraseña</small>
          </Form.Label>
          <Form.Control
            {...updatePass("password")}
            type="password"
            placeholder="nueva contraseña ..."
            className={isValid(errors?.password)}
          />
          <p className="text-danger small">
            {errors.password && errors.password.message}
          </p>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <small>Confirmar Contraseña</small>
          </Form.Label>
          <Form.Control
            {...updatePass("repassword")}
            type="password"
            placeholder="confirmar nueva contraseña..."
            className={isValid(errors.repassword)}
          />
          <p className="text-danger small">
            {errors.repassword && errors.repassword.message}
          </p>
        </Form.Group>
        <div className="d-grid gap-2 mt-4">
          {!loading ? (
            <Button variant="primary" type="submit" size="md">
              Actualizar Contraseña
            </Button>
          ) : (
            <MyButtonSpinner />
          )}
        </div>
      </Form>
    </>
  );
};

export default UserUpdatePasswordForm;
