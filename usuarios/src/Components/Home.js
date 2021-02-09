import React from 'react';
import Input from './Form/Input';

import { Estrutura, Title1, Formulario } from './styles';

const Home = () => {
  return (
    <Estrutura>
      Home
      <p>Bem-vindo, {sessionStorage.getItem('name')}</p>
      <Title1>Adicionar Produtos</Title1>
      <Formulario>
        <Input label="Nome" />
        <Input label="Descrição" />
        <input label="Imagem" />
        <input label="Logo" />
        <button>Add Produto</button>
      </Formulario>
    </Estrutura>
  );
};

export default Home;
