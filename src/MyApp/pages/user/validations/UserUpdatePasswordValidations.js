import * as yup from 'yup';

const UserUpdatePasswordValidations = yup.object().shape({
  password: yup.string().required('El campo Contraseña es requerido'),
  repassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben ser iguales.')
});

export default UserUpdatePasswordValidations;
