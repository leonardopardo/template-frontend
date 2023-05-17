import * as yup from 'yup';
// obtener las sucursales y los permisos de forma dinámica.
const UserCreateValidations = yup.object().shape({
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
    .required('El email es requerido.'),
  sucursal: yup.mixed().oneOf(['1', '2', '3', '4'], 'Seleccione una sucursal.'),
  permiso: yup.mixed().oneOf(['1', '2', '3'], 'Seleccione un permiso.')
});

export default UserCreateValidations;
