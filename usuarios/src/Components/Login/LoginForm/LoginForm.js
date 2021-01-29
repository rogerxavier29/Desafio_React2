import React from 'react';
import { Link } from 'react-router-dom';

import { Estrutura, Formulario, Titulo } from './styles';

const LoginForm = () => {
  const [nomeUsuario, setNomeUsuario] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Estrutura>
      <Formulario action="" onSubmit={handleSubmit}>
        <Titulo>Login do Usuário</Titulo>
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
        <button>Entrar</button>
        <Link to="/login/cadastrar">Quero Me Cadastrar</Link>
      </Formulario>
    </Estrutura>
  );
};

export default LoginForm;
