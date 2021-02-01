import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Estrutura, Formulario, Titulo, Botao, Linky } from './styles';

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
      <Formulario onSubmit={handleSubmit}>
        <Titulo>Cadastro do Usuário</Titulo>
        <label htmlFor="nomeUsuario">Usuario</label>
        <input
          type="text"
          placeholder="Digite seu Nome"
          value={nomeUsuario}
          onChange={({ target }) => setNomeUsuario(target.value)}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="Senha">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={({ target }) => setSenha(target.value)}
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
