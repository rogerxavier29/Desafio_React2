import React from 'react';

import { Modal, Container } from './styles';

const Estrutura = ({ id = 'modal', onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <Modal id="modal" onClick={handleOutsideClick}>
      <Container>
        <button onClick={onClose}>Close</button>
        <div>{children}</div>
      </Container>
    </Modal>
  );
};

export default Estrutura;
