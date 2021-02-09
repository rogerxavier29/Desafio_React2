import React from 'react';
import useForm from '../Hooks/useForm';
import Input from './Form/Input';
import axios from 'axios';

import { Estrutura, Title1, Formulario } from './styles';

const Home = () => {
  const nomeProduto = useForm();
  const descricao = useForm();
  const [logo, setLogo] = React.useState({});
  const [manual, setManual] = React.useState({});

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://desafionodegx2.herokuapp.com/products/', {
        name: nomeProduto.value,
        descricao: descricao.value,
        logo,
        manual,
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
  function handleLogoChange({ target }) {
    setLogo({
      raw: target.files[0],
    });
  }

  return (
    <Estrutura>
      <p>Bem-vindo, {sessionStorage.getItem('name')}</p>
      <Title1>Adicionar Produtos</Title1>
      <Formulario onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="nomeProduto"
          placeholder="Nome do Produto"
          {...nomeProduto}
        />
        <Input
          label="Descrição"
          type="text"
          name="descricao"
          placeholder="Faça a descrição do Produto"
          {...descricao}
        />
        <input label="Imagem" type="file" onChange={handleLogoChange} />
        <input label="Logo" type="file" accept="application/pdf" />
        <button type="submit">Add Produto</button>
      </Formulario>
    </Estrutura>
  );
};

export default Home;
