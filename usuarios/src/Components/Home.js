import React from 'react';

const Home = () => {
  return (
    <div>
      Home
      <p>Bem-vindo, {sessionStorage.getItem('name')}</p>
    </div>
  );
};

export default Home;
