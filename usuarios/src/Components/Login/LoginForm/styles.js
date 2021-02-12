import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const Estrutura = styled.div`
  background: #87cefa;
  padding-bottom: 200px;
  padding-top: 30px;
  @media (max-width: 500px) {
    padding-bottom: 300px;
  }
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
  @media (max-width: 500px) {
    width: 350px;
    height: 400px;
    margin-left: 50px;
    padding-bottom: 50px;
  }
  input {
    width: 300px;
    height: 30px;
    margin-top: 2px;
    margin-bottom: 20px;
    margin-left: 80px;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 500px) {
      width: 200px;
      height: 28px;
    }
  }
  label {
    margin-left: 85px;
    padding-top: 60px;
    padding-bottom: 0px;
    font-family: 'Nunito', sans-serif;
    cursor: pointer;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
  button {
    width: 150px;
    height: 30px;
    border-radius: 5px;
    margin-left: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0.5px 0.5px 0 0.5px #333;
    transition: box-shadow 0.5s, transform 0.5s ease;
    @media (max-width: 500px) {
      margin: 0 auto;
      width: 100px;
      height: 25px;
      margin-top: 25px;
    }
  }
  button:focus {
    outline: 0;
  }
  button:active {
    box-shadow: 0 0 0 0 #333, inset 0.5px 0.5px 0.5px #333;
    transform: translate(1px 1px);
  }
`;

export const Titulo = styled.h1`
  margin-left: 80px;
  padding-top: 10px;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 30px;
  }
`;

export const Linky = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  font-size: 20px;
  font-family: 'Nunito', sans-serif;
  color: Red;
  cursor: pointer;
  text-decoration: underline;
  @media (max-width: 500px) {
    padding-top: 30px;
    font-size: 15px;
  }
  a {
    color: #191970;
  }
`;
