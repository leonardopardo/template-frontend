import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from './lottie/warning-light.json';
import Flex from 'components/common/Flex';
import FalconCloseButton from 'components/common/FalconCloseButton';

const WizardModal = ({ modal, setModal }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Modal show={modal} centered dialogClassName="wizard-modal">
      <Modal.Body className="p-4">
        <FalconCloseButton
          size="sm"
          className="position-absolute top-0 end-0 me-2 mt-2"
          onClick={() => setModal(!modal)}
        />
        <Flex justifyContent="center" alignItems="center">
          <Lottie options={defaultOptions} style={{ width: '100px' }} />
          <p className="mb-0 flex-1">
            You don't have access to <br />
            the link. Please try again.
          </p>
        </Flex>
      </Modal.Body>
    </Modal>
  );
};

WizardModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired
};

export default WizardModal;
