import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

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
  border-radius: 8px;
  box-shadow: 20px 20px 10px black;
  input {
    width: 250px;
    height: 25px;
    margin-left: 120px;
    border-radius: 3px;
    cursor: pointer;
  }
  label {
    margin-left: 125px;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
  }
  button {
    width: 150px;
    height: 30px;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }
`;

export const Titulo = styled.h1`
  margin-left: 10px;
  height: 0px;
  margin-top: 5px;
  font-size: 30px;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
`;
