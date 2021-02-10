import React from 'react';
import axios from 'axios';
import useForm from '../Hooks/useForm';
import Input from './Form/Input';

import { Estrutura, Title1, Formulario, Descricao, Pnome } from './styles';

const Home = () => {
  const nomeProduto = useForm();
  const descricao = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (nomeProduto.validate() && descricao.validate()) {
      const token = sessionStorage.getItem('token');

      const url = 'https://desafionodegx2.herokuapp.com/products';

      const data = {
        name: nomeProduto.value,
        descricao: descricao.value,
        logo:
          'sdfsdfsdfssdjasjdijasdjasoijdaosijdaosjdajosajosadjjsdjsaijdojdas.jpg',
      };

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.post(url, data, options).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
      );
    }
  }

  return (
    <Estrutura>
      <Pnome>
        Bem-vindo, <span>{sessionStorage.getItem('name')}</span>
      </Pnome>
      <Title1>Adicionar Produtos</Title1>
      <Formulario onSubmit={handleSubmit}>
        <Input
          label="NomeProd"
          type="text"
          name="nomeProduto"
          placeholder="Nome do Produto"
          {...nomeProduto}
        />
        <Descricao>
          <Input
            label="Descrição"
            type="text"
            name="descricao"
            placeholder="Faça a descrição do Produto"
            {...descricao}
          />
        </Descricao>
        <button type="submit">Add Produto</button>
      </Formulario>
    </Estrutura>
  );
};

export default Home;
