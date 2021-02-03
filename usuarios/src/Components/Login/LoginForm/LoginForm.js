import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Estrutura, Formulario, Titulo, Botao, Linky } from './styles';
import Input from '../../Form/Input';

const LoginForm = () => {
  const [nomeUsuario, setNomeUsuario] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://desafionodegx2.herokuapp.com/swagger/', {
        nomeUsuario,
        email,
        senha,
      })
      .then(
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
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Digite seu Nome"
        />
        <Input
          label="Senha"
          type="password"
          name="senha"
          placeholder="Digite sua Senha"
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
