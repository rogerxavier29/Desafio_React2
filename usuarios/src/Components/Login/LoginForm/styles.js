import styled from 'styled-components';

export const Estrutura = styled.div`
  background: #87cefa;
  padding-bottom: 200px;
  padding-top: 30px;
`;

export const Formulario = styled.form`
  border-style: dashed;
  background: #d3d3d3;
  width: 500px;
  height: 550px;
  margin-left: 350px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  input {
    width: 300px;
    height: 30px;
    margin-top: 2px;
    margin-bottom: 20px;
    margin-left: 80px;
    border-radius: 5px;
  }
  label {
    margin-left: 85px;
    padding-top: 60px;
    padding-bottom: 0px;
  }
`;

export const Titulo = styled.h1`
  margin-left: 100px;
  padding-top: 20px;
`;
