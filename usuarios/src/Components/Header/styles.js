import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const Estrutura = styled.header`
  max-width: 100%;
  height: 60px;
  background: #4169e1;
  border-bottom: 3px solid black;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 30px;
  padding-top: 10px;
  @media (max-width: 500px) {
    display: flex;
  }
  h1 {
    margin-left: 5px;
    color: gold;
    font-size: 30px;
    font-family: 'Nunito', sans-serif;
    cursor: pointer;
    @media (max-width: 500px) {
      font-size: 17px;
      padding-top: 10px;
      flex: 1;
    }
  }
  a {
    margin-right: 80px;
    padding-top: 5px;
    color: gold;
    font-family: 'Nunito', sans-serif;
    cursor: pointer;
    @media (max-width: 500px) {
      font-size: 13px;
      padding-top: 12px;
      margin-right: 60px;
    }
  }
`;
