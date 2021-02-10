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
  height: 580px;
  margin-left: 350px;
  margin-top: 30px;
  padding-bottom: 50px;
  border-radius: 8px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: 40px 40px 20px black;
  input {
    width: 300px;
    height: 30px;
    margin-top: 2px;
    margin-bottom: 20px;
    margin-left: 80px;
    border-radius: 5px;
    cursor: pointer;
  }
  label {
    margin-left: 85px;
    padding-top: 60px;
    padding-bottom: 0px;
    cursor: pointer;
  }
  button {
    width: 150px;
    height: 30px;
    border-radius: 5px;
    margin-left: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }
`;

export const Titulo = styled.h1`
  margin-left: 100px;
  padding-top: 20px;
  cursor: pointer;
`;

export const Linky = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  font-size: 20px;
  color: Red;
  cursor: pointer;
  text-decoration: underline;
`;
