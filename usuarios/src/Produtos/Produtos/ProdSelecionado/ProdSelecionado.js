import React, { useState } from 'react';
import axios from 'axios';

const ProdSelecionado = () => {
  const [prodSelecionado, setProdSelecionado] = useState();

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  React.useEffect(() => {
    axios
      .get(url, options)
      .then((res) => {
        console.log(res.data);
        setProdSelecionado(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {prodSelecionado &&
          prodSelecionado.map(({ id, name, descricao, logo, manual }) => (
            <li>
              <div>
                <p key={id}>Name: {name}</p>
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

export default ProdSelecionado;
