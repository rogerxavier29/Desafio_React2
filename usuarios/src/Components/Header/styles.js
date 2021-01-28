import styled from 'styled-components';

export const Estrutura = styled.header`
  width: 100%;
  height: 80px;
  background: #4169e1;
  position: fixed;
  z-index: 100;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 30px;
  h1 {
    margin-left: 100px;
    color: gold;
    font-size: 30px;
  }
  a {
    margin-right: 100px;
    color: gold;
  }
`;
