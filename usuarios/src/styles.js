import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const Estrutura = styled.div`
  background: #87cefa;
  height: 800px;
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  img {
    height: 400px;
    padding-top: 60px;
    @media (max-width: 500px) {
      height: 250px;
      padding-top: 30px;
      margin-left: 50px;
    }
  }
`;

export const Texto = styled.p`
  margin-left: 580px;
  margin-top: -345px;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  font-size: 20px;
  width: 600px;
  @media (max-width: 500px) {
    margin-left: 40px;
    font-size: 15px;
    width: 420px;
    padding-top: 220px;
  }
`;
