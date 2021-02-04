import React from 'react';
import Input from '../../Form/Input';

import { Estrutura, Formulario, Titulo, Botao } from './styles';

const LoginCreate = () => {
  return (
    <Estrutura>
      <Formulario>
        <Titulo>Login: </Titulo>
        <Input />
        <Input />
        <Botao>Entrar</Botao>
      </Formulario>
    </Estrutura>
  );
};

export default LoginCreate;
