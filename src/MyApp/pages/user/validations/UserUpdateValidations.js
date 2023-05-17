import * as yup from 'yup';

const UserUpdateValidations = yup.object().shape({
  name: yup.string().required('El nombre es requerido.'),
  lastname: yup.string().required('El apellido es requerido.'),
  identity: yup
    .number()
    .typeError('Ingrese solo números.')
    .required('El número de documento es requerido.'),
  phone: yup
    .number()
    .typeError('Ingrese solo números.')
    .required('El número de teléfono es requerido.'),
  email: yup
    .string()
    .email('El email no es válido.')
    .required('El email es requerido.')
});

export default UserUpdateValidations;
