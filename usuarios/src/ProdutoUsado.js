import React from 'react';
import Imagem from './Imagem/produtos-usados.png';
import { Estrutura, Texto } from './styles';

export const ProdutoUsado = () => {
  return (
    <Estrutura>
      <img src={Imagem} />
      <Texto>
        A Produtos Usados nasceu no decorrer de uma necessidade das pessoas se
        desfazerem de seus objetos que so ocupam espaço e que faz voce usuário
        ganhar uma Grana Extra. <br /> <br /> Possui uma vasta variedades de
        Produtos Usados e de qualidade.
        <br />
        <br /> Esse ano de 2021, iremos completar 10 anos atuando no Mercado, de
        muito sucesso, conquistas e aprendizado sempre ao seu lado.
        <br />
        <br />
        Estamos sempre em busca de soluções, melhorias para voces usuarios e
        para o nosso Ecommerce. Em busca da perfeição pretendemos que você faça
        parte dessa jornada por mais 10 longos e felizes anos.
        <br />
        <br />
        Não perca tempo Cadastre-se logo!
      </Texto>
    </Estrutura>
  );
};
