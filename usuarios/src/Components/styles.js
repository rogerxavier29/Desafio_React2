import styled from 'styled-components';

export const Estrutura = styled.div`
  background: #87cefa;
  height: 540px;
  padding-bottom: 200px;
  padding-top: 30px;
`;

export const Title1 = styled.h1`
  padding-top: 30px;
  margin-left: 10px;
`;

export const Formulario = styled.form`
  margin-top: 10px;
  margin-left: 15px;
  width: 1000px;
  height: 200px;
  border-style: dashed;
  display: flex;
  justify-content: space-between;
  input {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 40px;
    width: 150px;
    height: 20px;
    border: 3px;
  }
  button {
    width: 60px;
    height: 60px;
    margin-top: 70px;
    margin-right: 5px;
  }
`;
