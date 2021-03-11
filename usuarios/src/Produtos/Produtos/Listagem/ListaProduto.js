import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../../../Modal/Modal';

import { ListaProd, Geral, Botao, Btndel } from './styles';

const ListaProduto = () => {
  const [listaProd, setListaProd] = useState();
  const [openModal, setOpenModal] = useState(false);

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = 'https://desafionodegx2.herokuapp.com/products/';

  function handleClick(event) {
    event.preventDefault();

    axios
      .get(url, options)
      .then((res) => {
        console.log(res.data);
        setListaProd(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function closeModal() {
    setOpenModal(false);
  }
  async function deleteProd(id) {
    axios
      .delete(`https://desafionodegx2.herokuapp.com/products/` + id, options)
      .then((res) => {
        const atualProd = listaProd.filter((lista) => lista.id !== id);
        setListaProd(atualProd);
      });
  }

  return (
    <Geral>
      {openModal && <Modal onClose={closeModal} productId={openModal} />}
      <Botao onClick={handleClick}>Produtos</Botao>
      <ul>
        {listaProd &&
          listaProd.map(({ id, name, descricao, logo, manual }) => (
            <li key={id}>
              <ListaProd>
                <button onClick={() => setOpenModal(id)}>Detalhes</button>
                <Btndel onClick={() => deleteProd(id)}>Deletar</Btndel>
                <p>Nome: {name}</p>
                <p>Descrição: {descricao}</p>
                <p>Logo:{logo}</p>
                <p>Manual:{manual}</p>
              </ListaProd>
            </li>
          ))}
      </ul>
    </Geral>
  );
};

export default ListaProduto;
