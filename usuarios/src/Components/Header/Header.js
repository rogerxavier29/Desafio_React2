import React from 'react';
import { Link } from 'react-router-dom';

import { Estrutura, Container } from './styles';

const Header = () => {
  return (
    <Estrutura>
      <Container>
        <h1>Relíquias</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </Container>
    </Estrutura>
  );
};

export default Header;
