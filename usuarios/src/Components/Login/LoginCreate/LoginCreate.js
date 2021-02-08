import React from 'react';
import Input from '../../Form/Input';
import axios from 'axios';
import useForm from '../../../Hooks/useForm';

import { Estrutura, Formulario, Titulo, Botao } from './styles';

const LoginCreate = () => {
  const email = useForm('email');
  const senha = useForm('password');

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://desafionodegx2.herokuapp.com/sessions/', {
        email: email.value,
        password: senha.value,
      })
      .then(
        (response) => {
          console.log(response);
          if (response.data.token) {
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('id', response.data.user.id);
            sessionStorage.setItem('name', response.data.user.name);
            sessionStorage.setItem('email', response.data.user.email);
            console.log(sessionStorage);
            window.location.replace('/');
          }
        },
        (error) => {
          console.log(error);
        },
      );
  }

  return (
    <Estrutura>
      <Formulario onSubmit={handleSubmit}>
        <Titulo>Login: </Titulo>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Digite seu email"
          {...email}
        />
        <Input
          label="Senha"
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          {...senha}
        />
        <Botao>Entrar</Botao>
      </Formulario>
    </Estrutura>
  );
};

export default LoginCreate;
