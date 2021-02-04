import styled from 'styled-components';

export const Estrutura = styled.div`
  background: #87cefa;
  height: 540px;
  padding-bottom: 200px;
  padding-top: 30px;
`;

export const Formulario = styled.form`
  border-style: dashed;
  background: #d3d3d3;
  width: 500px;
  height: 450px;
  margin: 0 auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  input {
    width: 250px;
    height: 25px;
    margin-left: 120px;
    border-radius: 3px;
  }
  label {
    margin-left: 125px;
  }
`;

export const Titulo = styled.h1`
  margin-left: 10px;
  height: 0px;
  margin-top: 5px;
  font-size: 30px;
`;

export const Botao = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  margin: 0 auto;
`;
