import MultiSelect from 'MyApp/components/common/MultiSelect';
import React from 'react';
import { Card, FormGroup, FormLabel } from 'react-bootstrap';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);

const ListFilterComponent = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="border-bottom pb-2">Filtrar Por:</Card.Title>
          <FormGroup className="mt-3">
            <FormLabel>Tipo de Operación</FormLabel>
            <MultiSelect />
          </FormGroup>
          <FormGroup className="mt-3">
            <FormLabel>Tipo de Propiedad</FormLabel>
            <MultiSelect />
          </FormGroup>
          <FormGroup className="mt-3">
            <FormLabel>Estado</FormLabel>
            <MultiSelect />
          </FormGroup>
          <FormGroup className="mt-3">
            <FormLabel>Sucursal</FormLabel>
            <MultiSelect />
          </FormGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListFilterComponent;
