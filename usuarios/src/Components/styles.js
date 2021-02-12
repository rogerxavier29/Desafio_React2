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

export const Pnome = styled.p`
  font-size: 20px;
  margin-left: 10px;
  font-family: 'Nunito', sans-serif;
  @media (max-width: 500px) {
    font-size: 15px;
  }
  span {
    font-size: 23px;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
    color: #191970;
    cursor: pointer;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

export const Title1 = styled.h1`
  margin-left: 510px;
  margin-top: 35px;
  font-family: 'Nunito', sans-serif;
  font-size: 25px;
  @media (max-width: 500px) {
    font-size: 20px;
    margin-left: 150px;
    margin-bottom: 30px;
  }
`;

export const Formulario = styled.form`
  margin-top: 30px;
  margin-left: 380px;
  width: 500px;
  height: 350px;
  background: #b0c4de;
  border-style: dashed;
  border-radius: 8px;
  display: grid;
  box-shadow: 30px 30px 20px black;
  @media (max-width: 500px) {
    width: 380px;
    height: 350px;
    margin-top: 5px;
    margin-left: 50px;
  }
  input {
    margin-left: 18px;
    margin-top: 60px;
    width: 200px;
    height: 30px;
    border: 0.1px;
    border-radius: 5px;
    border-style: solid;
    @media (max-width: 500px) {
      width: 170px;
      height: 27px;
    }
  }
  label {
    margin-left: 80px;
    font-family: 'Nunito', sans-serif;
    @media (max-width: 500px) {
      margin-left: 10px;
      font-size: 15px;
    }
  }
  button {
    width: 100px;
    height: 30px;
    margin-left: 230px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0.5px 0.5px 0 0.5px #333;
    transition: box-shadow 0.5s, transform 0.5s ease;
    @media (max-width: 500px) {
      margin: 0 auto;
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

export const Descricao = styled.section`
  margin-left: 8px;
`;
