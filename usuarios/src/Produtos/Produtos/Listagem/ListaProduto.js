import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../../../Modal/Modal';
import useForm from '../../../Hooks/useForm';
import Modal2 from 'react-modal';

import {
  ListaProd,
  Geral,
  Botoes,
  Btndel,
  BtnProd,
  BtnEdit,
  SectionInputs,
  DivInput1,
  DivInput2,
  ListaProd2,
} from './styles';
import Input from '../../../Components/Form/Input';

const ListaProduto = () => {
  const [listaProd, setListaProd] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openIsModal, setOpenIsModal] = useState(false);

  const name = useForm();
  const descricao = useForm();

  const data = {
    name: name.value,
    descricao: descricao.value,
    logo: 'c6b0080241d5a5fa0274847c1c738b71.jpg',
    manual: 'b5b8be673eb68193a7f5b1628be6ad03.pdf',
  };

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = 'https://desafionodegx2.herokuapp.com/products/';

  useEffect(() => {
    getlistaProducts();
  }, []);
  const getlistaProducts = async () => {
    axios
      .get(url, options)
      .then((res) => {
        console.log(res.data);
        setListaProd(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function closeModal() {
    setOpenModal(false);
  }
  async function deleteProd(id) {
    if (window.confirm('Tem certeza que deseja excluir ??')) {
      axios
        .delete(`https://desafionodegx2.herokuapp.com/products/` + id, options)
        .then((res) => {
          const atualProd = listaProd.filter((lista) => lista.id !== id);
          setListaProd(atualProd);
        });
    }
  }

  function alterarProd(num_id) {
    axios
      .put(
        `https://desafionodegx2.herokuapp.com/products/` + num_id,
        data,
        options,
      )
      .then((res) => {
        const alterarProd = listaProd.slice(
          (alterar) => alterar.num_id !== num_id,
        );
        setListaProd(alterarProd);
      });
  }
  return (
    <Geral>
      {openModal && <Modal onClose={closeModal} productId={openModal} />}
      <ul>
        {listaProd &&
          listaProd.map(({ id, name, descricao, logo, manual }) => (
            <li key={id}>
              <ListaProd>
                <Botoes>
                  <BtnProd onClick={() => setOpenModal(id)}>Detalhes</BtnProd>
                  <BtnEdit onClick={() => setOpenIsModal(true)}>Editar</BtnEdit>
                  <Btndel onClick={() => deleteProd(id)}>Deletar</Btndel>
                </Botoes>
                <p>Nome: {name}</p>
                <p>Descrição: {descricao}</p>
                <p>Logo:{logo}</p>
                <p>Manual:{manual}</p>
              </ListaProd>
            </li>
          ))}
      </ul>
      <Modal2 isOpen={openIsModal} onRequestClose={() => setOpenIsModal(false)}>
        <button onClick={() => setOpenIsModal(false)}>X</button>

        <SectionInputs>
          <DivInput1>
            <Input
              label="Nome: "
              type="text"
              name="Nome"
              placeholder="Nome"
              {...name}
            />
          </DivInput1>

          <DivInput2>
            <Input
              label="Descrição: "
              type="text"
              name="descricao"
              placeholder="Faça a descrição do Produto"
              {...descricao}
            />
          </DivInput2>
        </SectionInputs>

        <ul>
          {listaProd &&
            listaProd.map(({ id, name, descricao, logo, manual }) => (
              <li key={id}>
                <ListaProd2>
                  <button onClick={() => alterarProd(id)}>Alterar</button>
                  <p>Nome: {name}</p>
                  <p>Descrição: {descricao}</p>
                  <p>Logo:{logo}</p>
                  <p>Manual:{manual}</p>
                </ListaProd2>
              </li>
            ))}
        </ul>
      </Modal2>
    </Geral>
  );
};

export default ListaProduto;
