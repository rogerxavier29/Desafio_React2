import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LoginCreate from './LoginCreate/LoginCreate';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="./LoginForm/LoginForm" element={<LoginForm />} />
          <Route path="/LoginCreate/LoginCreate" element={<LoginCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Login;
