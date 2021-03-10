import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Content, Container } from './styles';

const Modal = (props) => {
  const [prodSelecionado, setProdSelecionado] = useState();

  const token = sessionStorage.getItem('token');

  const url = `https://desafionodegx2.herokuapp.com/products/${props.productId}`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    console.log('aqui');
    getProducts();
  }, []);
  const getProducts = async () => {
    axios
      .get(url, options)
      .then((res) => {
        console.log(res.data);
        setProdSelecionado(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Content id="modal">
        <Container>
          <button onClick={props.onClose}>X</button>
          <div>
            <ul>
              {prodSelecionado && (
                <li>
                  <div>
                    <p key={prodSelecionado[0].id}>
                      Name: {prodSelecionado[0].name}
                    </p>
                    <p>Descrição: {prodSelecionado[0].descricao} </p>

                    <p>Logo:{prodSelecionado[0].logo}</p>
                    <p>Manual:{prodSelecionado[0].manual}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </Content>
    </div>
  );
};

export default Modal;
