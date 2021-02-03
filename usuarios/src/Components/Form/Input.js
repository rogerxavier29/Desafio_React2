import React from 'react';

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} value={value} onChange={onChange}></input>
    </div>
  );
};

export default Input;
