import React from 'react';
import { Link } from 'react-router-dom';

import { Estrutura, Container } from './styles';

const Header = () => {
  return (
    <Estrutura>
      <Container>
        <h1>Produtos Usados</h1>
        <Link to="/Login">Cadastre-se</Link>
        <Link to="/Login/logar">Login</Link>
      </Container>
    </Estrutura>
  );
};

export default Header;
