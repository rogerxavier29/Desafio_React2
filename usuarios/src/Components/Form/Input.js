import React from 'react';

const Input = ({ label, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type}></input>
    </div>
  );
};

export default Input;
