import React, { useState } from 'react';
import Estrutura from './Estrutura/Estrutura';

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisible ? (
        <Estrutura onClose={() => setIsModalVisible(false)}>
          <h1>Modal</h1>
        </Estrutura>
      ) : null}
    </div>
  );
};

export default Modal;
