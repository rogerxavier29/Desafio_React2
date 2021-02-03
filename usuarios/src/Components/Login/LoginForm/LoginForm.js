import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Estrutura, Formulario, Titulo, Botao, Linky } from './styles';
import Input from '../../Form/Input';
import useForm from '../../../Hooks/useForm';

const LoginForm = () => {
  const nomeUsuario = useForm();
  const email = useForm('email');
  const senha = useForm('password');

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('https://desafionodegx2.herokuapp.com/swagger/', {}).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
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

        <Botao type="submit">Entrar</Botao>
        <Linky>
          <Link to="/cadastrar/login">Ja Cadastrado!</Link>
        </Linky>
      </Formulario>
    </Estrutura>
  );
};

export default LoginForm;
