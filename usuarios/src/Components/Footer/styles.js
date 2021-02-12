import styled from 'styled-components';

export const Estrutura = styled.footer`
  height: 60px;
  background: #4169e1;
  max-width: 100%;
  border-top: 3px solid black;
  padding-left: 450px;
  @media (max-width: 500px) {
    padding-left: 100px;
  }

  p {
    color: gold;
    padding-top: 20px;
  }
`;
