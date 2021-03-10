import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../../../Modal/Modal';

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

  return (
    <div>
      {openModal && <Modal onClose={closeModal} productId={openModal} />}
      <button onClick={handleClick}>Produtos</button>
      <ul>
        {listaProd &&
          listaProd.map(({ id, name, descricao, logo, manual }) => (
            <li key={id}>
              <div>
                <button onClick={() => setOpenModal(id)}>Detalhes</button>
                <p>Nome: {name}</p>
                <p>Descrição: {descricao}</p>
                <p>Logo:{logo}</p>
                <p>Manual:{manual}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListaProduto;
