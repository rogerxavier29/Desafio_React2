import React from 'react';

const Estrutura = ({ onClose = () => {}, children }) => {
  return (
    <div>
      <div>
        <button onClick={onClose}>Close</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Estrutura;
