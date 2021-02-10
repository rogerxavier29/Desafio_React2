import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Estrutura, Formulario, Titulo, Linky } from './styles';
import Input from '../../Form/Input';
import useForm from '../../../Hooks/useForm';

const LoginForm = () => {
  const nomeUsuario = useForm();
  const email = useForm('email');
  const senha = useForm('password');

  function handleSubmit(event) {
    event.preventDefault();

    if (nomeUsuario.validate() && email.validate() && senha.validate()) {
      axios
        .post('https://desafionodegx2.herokuapp.com/users/', {
          name: nomeUsuario.value,
          email: email.value,
          password: senha.value,
        })
        .then(
          (response) => {
            if (response.data === response.data) {
              window.location.replace('/Login/logar');
            }
          },
          (error) => {
            console.log(error);
          },
        );
    }
  }

  return (
    <Estrutura>
      <Formulario action="" onSubmit={handleSubmit}>
        <Titulo>Cadastro do Usuário</Titulo>
        <Input
          label="Usuário"
          type="text"
          name="nomeUsuario"
          placeholder="Digite seu Nome"
          {...nomeUsuario}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Digite seu E-mail"
          {...email}
        />
        <Input
          label="Senha"
          type="password"
          name="senha"
          placeholder="Digite sua Senha"
          {...senha}
        />
        <button type="submit">Entrar</button>
        <Linky>
          <Link to="/Login/logar">Fazer Login!</Link>
        </Linky>
      </Formulario>
    </Estrutura>
  );
};

export default LoginForm;
