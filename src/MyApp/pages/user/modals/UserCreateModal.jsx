import React from 'react';
import { Modal } from 'react-bootstrap';
import FalconCloseButton from 'MyApp/components/common/FalconCloseButton';
import { FiUserPlus } from 'react-icons/fi';
import UserCreateForm from '../forms/UserCreateForm';

const UserCreateModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      <Modal
        size="md"
        show={openModal}
        onHide={() => setOpenModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg" className="fw-light">
            <FiUserPlus /> Nuevo Usuario
          </Modal.Title>
          <FalconCloseButton onClick={() => setOpenModal(false)} />
        </Modal.Header>
        <Modal.Body>
          <UserCreateForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserCreateModal;
