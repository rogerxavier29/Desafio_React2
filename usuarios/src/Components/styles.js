import styled from 'styled-components';

export const Estrutura = styled.div`
  background: #87cefa;
  height: 540px;
  padding-bottom: 200px;
  padding-top: 30px;
`;

export const Pnome = styled.p`
  font-size: 20px;
  margin-left: 10px;
`;

export const Title1 = styled.h1`
  margin-left: 385px;
  margin-top: 30px;
`;

export const Formulario = styled.form`
  margin-top: 8px;
  margin-left: 380px;
  width: 500px;
  height: 350px;
  background: #b0c4de;
  border-style: dashed;
  display: grid;
  input {
    margin-left: 18px;
    margin-top: 60px;
    width: 200px;
    height: 30px;
    border: 0.1px;
    border-radius: 5px;
    border-style: solid;
  }
  label {
    margin-left: 80px;
  }
  button {
    width: 100px;
    height: 30px;
    margin-left: 220px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }
`;

export const Descricao = styled.section`
  margin-left: 8px;
`;
