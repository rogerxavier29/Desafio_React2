import styled from 'styled-components';

export const Estrutura = styled.header`
  max-width: 100%;
  height: 60px;
  background: #4169e1;
  border-bottom: 3px solid black;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
