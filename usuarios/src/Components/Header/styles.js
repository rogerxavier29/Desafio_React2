import styled from 'styled-components';

export const Estrutura = styled.header`
  width: 100%;
  background: #4169e1;
  position: fixed;
  z-index: 100;
  top: 0px;
  border-bottom: 3px solid black;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 30px;
  height: 64px;
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
