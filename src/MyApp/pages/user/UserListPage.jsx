import PageHeader from 'MyApp/components/common/PageHeader';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FiPlus, FiUser } from 'react-icons/fi';
import UserListTable from './tables/UserListTable';
import UserCreateModal from './modals/UserCreateModal';
import MyLoadingComponent from 'MyApp/my-components/MyLoadingComponent';

const UserListPage = () => {
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [loadingTable] = React.useState(false);
  return (
    <>
      <PageHeader
        title="Usuarios del Sistema"
        description="Gestioná los usuarios de tu inmobiliaria y sucursales."
        className="mb-3"
      >
        <Button
          variant="primary"
          size="sm"
          onClick={() => setOpenCreateModal(true)}
        >
          <FiPlus /> Nuevo Usuario
        </Button>
      </PageHeader>
      
      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="fw-light">
            <FiUser /> Listado de Usuarios
          </Card.Title>
          {loadingTable ? <MyLoadingComponent /> : <UserListTable />}
        </Card.Body>
      </Card>
      <UserCreateModal
        openModal={openCreateModal}
        setOpenModal={setOpenCreateModal}
      />
    </>
  );
};

export default UserListPage;
